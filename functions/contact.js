export async function onRequestPost(context) {
  try {
    const formData = await context.request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const msg = formData.get("msg");

    const timestamp = new Date().toISOString();

    // 简单日志记录，未来可改为写入 D1 / KV
    console.log("📩 表单提交：", {
      name,
      email,
      phone,
      service,
      msg,
      time: timestamp
    });

    return new Response(
      JSON.stringify({ success: true, message: "Data received" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("❌ 处理失败:", err);
    return new Response(
      JSON.stringify({ success: false, error: "服务器内部错误" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
