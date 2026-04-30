export default function handler(req, res) {
  const id = req.query.id;

  console.log("Email opened:", id, new Date());

  const img = Buffer.from(
    "R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
    "base64"
  );

  res.setHeader("Content-Type", "image/gif");
  res.setHeader("Cache-Control", "no-store");
  res.send(img);
}
