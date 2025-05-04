export async function onRequestPost(context) {
    const { request } = context;
    
    try {
        // 1. 获取表单数据
        const formData = await request.formData();
        
        // 2. 验证必填字段
        const requiredFields = ['name', 'email', 'phone', 'msg'];
        const missingFields = requiredFields.filter(field => !formData.get(field)?.trim());
        
        if (missingFields.length > 0) {
            return new Response(JSON.stringify({
                success: false,
                error: `缺少必填字段: ${missingFields.join(', ')}`
            }), { status: 400 });
        }

        // 3. 验证邮箱格式
        const email = formData.get('email');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return new Response(JSON.stringify({
                success: false,
                error: '邮箱格式不正确'
            }), { status: 400 });
        }

        // 4. 构造邮件内容
        const mailContent = `
            新客户咨询 - ${new Date().toLocaleString()}
            ----------------------------
            姓名: ${formData.get('name')}
            邮箱: ${email}
            电话: ${formData.get('phone')}
            服务类型: ${formData.get('service') || '未选择'}
            留言:
            ${formData.get('msg')}
        `;

        // 5. 通过 SendGrid 发送邮件
        const sendgridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${context.env.SENDGRID_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                personalizations: [{
                    to: [{ email: context.env.ADMIN_EMAIL }]
                }],
                from: { email: 'noreply@virtue-consulting.com' },
                subject: '新客户咨询提交',
                content: [{ type: 'text/plain', value: mailContent }]
            })
        });

        if (!sendgridResponse.ok) {
            throw new Error('邮件发送失败');
        }

        // 6. 返回成功响应
        return new Response(JSON.stringify({
            success: true,
            message: '提交成功，我们将尽快联系您'
        }), {
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' 
            }
        });

    } catch (error) {
        return new Response(JSON.stringify({
            success: false,
            error: '服务器错误: ' + error.message
        }), { 
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}

