export default function handler(req, res) {
  const { fbclid } = req.query;
  const timestamp = Date.now();
  const ref_id = `ref_${timestamp}`;

  console.log("fbclid:", fbclid, "→ ref_id:", ref_id);

  const telegramURL = `https://t.me/tescapi_bot?start=${ref_id}`;
  res.writeHead(302, { Location: telegramURL });
  res.end();
}
