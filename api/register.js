export default async function handler(req, res) {

  const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxzCxbPSlzIXNXDXPPucNK1TzCCR7lTgIZreXAIFssjcI_qWcy99WM3gV8oqoLiZBXV/exec";

  try {

    let response;

    // ✅ HANDLE GET (duplicate check)
    if (req.method === "GET") {

      const { email, eventType } = req.query;

      response = await fetch(
        `${SCRIPT_URL}?email=${encodeURIComponent(email)}&eventType=${encodeURIComponent(eventType)}`
      );

    }

    // ✅ HANDLE POST (registration)
    else if (req.method === "POST") {

      response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: {
          "Content-Type": "text/plain",
        },
      });

    }

    const data = await response.json();

    return res.status(200).json(data);

  } catch (error) {

    console.error("API ERROR:", error);

    return res.status(500).json({
      status: "error",
      message: "Server failed",
    });

  }
}