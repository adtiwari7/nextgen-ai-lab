export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { message } = req.body;

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://nextgen-ai-lab.vercel.app",
        "X-Title": "ByteBuddy-AI"
      },
      body: JSON.stringify({
        model: "mistralai/mixtral-8x7b-instruct", // or try "openchat/openchat-7b"
        messages: [
          {
            role: "system",
            content: `You're ByteBuddy, a fun, helpful, and casual AI assistant for teens and beginners learning about technology and AI.  Keep your replies short, friendly, and human-like unless you're asked for an explanation.  If someone says "hi", "hello", or "how are you", just greet them warmly in 1-2 lines.  Only use emojis occasionally. Avoid long paragraphs unless it's an explanation request.  Your tone is chill, supportive, and smart and give cool tech vibes."
          },
          {
            role: "user",
            content: message
          }
        ]
      })
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({ reply: "Oops! No reply from the AI. Try again?" });
    }

    const reply = data.choices[0].message.content;
    return res.status(200).json({ reply });
  } catch (err) {
    console.error("🔥 OpenRouter API Error:", err);
    return res.status(500).json({ reply: "ByteBuddy glitched out. Try again in a few?" });
  }
}
