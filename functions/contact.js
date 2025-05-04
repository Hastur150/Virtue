export async function onRequestPost(context) {
    try {
      const formData = await context.request.formData();
  
      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const service = formData.get('service');
      const msg = formData.get('msg');
      const terms = formData.get('terms');
  
      if (!name || !email || !phone || !msg || terms !== 'on') {
        return new Response(JSON.stringify({ success: false, message: "表单字段无效或未同意条款" }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        });
      }
  
      // 你可以在这里添加更多操作，如发送邮件、写入数据库等
      console.log("📩 收到提交：", { name, email, phone, service, msg });
  
      return new Response(JSON.stringify({ success: true, message: "感谢您的提交！" }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
  
    } catch (err) {
      return new Response(JSON.stringify({ success: false, message: "服务器错误" }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  