// api/chat.js - Handles GPT responses for ByteBuddy
export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { message } = req.body;

  try {
    console.log("➡️ User message:", message);
    console.log("🔐 Using key:", process.env.OPENAI_API_KEY ? "✅ Exists" : "❌ MISSING");

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are ByteBuddy, a friendly, witty, and helpful AI assistant built by Adhyayan to help young minds learn about technology, coding, and AI. Answer clearly and with a touch of fun."
          },
          {
            role: "user",
            content: message
          }
        ],
        temperature: 0.7
      })
    });

    const data = await response.json();
    console.log("📦 OpenAI API Response:", JSON.stringify(data));

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({ reply: "Hmm, ByteBuddy didn’t get a clear response. Try asking again?" });
    }

    const reply = data.choices[0].message.content || "Oops! GPT replied blank. Wanna try rephrasing that?";
    return res.status(200).json({ reply });
  } catch (err) {
    console.error("🚨 Chat API Error:", err);
    return res.status(500).json({ reply: "Something went wrong while talking to OpenAI. Please try again." });
  }
}
