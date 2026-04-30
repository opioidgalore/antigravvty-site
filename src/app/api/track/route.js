export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  console.log("Email opened:", id, new Date());

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
