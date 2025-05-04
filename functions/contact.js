export async function onRequestPost(context) {
    const formData = await context.request.formData();
  
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const service = formData.get('service');
    const msg = formData.get('msg');
  
    // 可选：存储数据到 KV、D1、或外部 API
    // 这里只记录日志示例
    console.log("📩 New Contact Form Submission:");
    console.log({ name, email, phone, service, msg });
  
    // ✅ 发送邮件（使用 Resend / MailChannels / 邮件 API）
    // 这里以 MailChannels 为例（Cloudflare 推荐）
  
    const sendResult = await fetch("https://api.mailchannels.net/tx/v1/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: "1091796379@qq.com" }] }],
        from: { email: "noreply@virtue-evo.pages.dev", name: "Virtue Site" },
        subject: "📬 新的联系表单提交",
        content: [{
          type: "text/plain",
          value:
  `您有新的提交信息:
  
  姓名: ${name}
  邮箱: ${email}
  电话: ${phone}
  服务: ${service}
  信息: ${msg}`
        }]
      })
    });
  
    if (!sendResult.ok) {
      return new Response(JSON.stringify({ success: false, error: "发送失败" }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }
  
    return new Response(JSON.stringify({ success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  }
  