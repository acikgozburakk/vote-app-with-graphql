export default function handler(req, res) {
  if (req.method === "POST") {
    const logData = req.body;
    console.log("clg log:", logData);
    // database veya dosyaya yazma
    res.status(200).json({ status: "Log received" });
  } else {
    res.status(405).end();
  }
}
