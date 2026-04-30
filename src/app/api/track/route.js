export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  console.log("Email opened:", id, new Date());

  try {
    await fetch("https://bauer-automation.synology.me/webhook/vercel-emailtracking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        openedAt: new Date(),
      }),
    });
  } catch (err) {
    console.error("Webhook error:", err);
  }

  const img = Buffer.from(
    "R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
    "base64"
  );

  return new Response(img, {
    headers: {
      "Content-Type": "image/gif",
      "Cache-Control": "no-store",
    },
  });
}
