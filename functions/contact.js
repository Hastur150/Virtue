// functions/contact.js
export async function onRequestPost(context) {
  try {
    // 1️⃣ 解析表单
    const formData = await context.request.formData();
    const name = formData.get("name")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const service = formData.get("service")?.toString() || "";
    const msg = formData.get("msg")?.toString() || "";
    const time = new Date().toISOString();

    // 2️⃣ 插入 D1
    const db = context.env.DB;
    await db.prepare(
      `INSERT INTO consultations (name, email, phone, service, msg, time)
       VALUES (?, ?, ?, ?, ?, ?)`
    )
    .bind(name, email, phone, service, msg, time)
    .run();

    console.log("✅ 已存库：", { name, email, phone, service, msg, time });

    // 3️⃣ 调用 Resend 发邮件
    const resendKey = context.env.RESEND_API_KEY;
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendKey}`
      },
      body: JSON.stringify({
        from: "2679447437qbz@gmail.com",
        to: ["2679447437qbz@gmail.com"],             // 发给用户
        cc: ["2679447437qbz@gmail.com"], // 抄送到你的邮箱
        subject: "🤝 谢谢你的咨询，我们已收到！",
        html: `
          <h2>你好，${name}</h2>
          <p>我们已收到你的咨询：</p>
          <ul>
            <li>服务：${service}</li>
            <li>电话：${phone}</li>
            <li>留言：${msg}</li>
            <li>时间：${time}</li>
          </ul>
          <p>我们会尽快与您联系！</p>
        `
      })
    });

    if (!emailResponse.ok) {
      console.error("❌ Resend 发信失败：", await emailResponse.text());
      // 发信失败也不要阻断用户体验，仍然返回 success
    } else {
      console.log("✉️ Resend 发信成功");
    }

    // 最后响应给前端
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (err) {
    console.error("❌ 处理失败：", err);
    return new Response(JSON.stringify({ success: false, error: "服务器内部错误" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
