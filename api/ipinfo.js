export default async function handler(req, res) {
  const token = process.env.IPINFO_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "IPINFO_TOKEN is not set" });
  }

  try {
    const apiUrl = `https://ipinfo.io/json?token=${token}`;
    const response = await fetch(apiUrl);
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching IP info:", error.message);
    res.status(500).json({ error: "Failed to fetch IP info" });
  }
}
