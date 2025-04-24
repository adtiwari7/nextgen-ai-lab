module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { message } = req.body;

  try {
    const response = await fetch("https://api.together.xyz/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.TOGETHER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "meta-llama/Llama-2-7b-chat-hf",
        messages: [
          {
            role: "system",
            content: "You are ByteBuddy, an AI assistant created by Adhyayan. Keep responses short, helpful, and friendly unless detailed info is requested."
          },
          {
            role: "user",
            content: message
          }
        ],
        temperature: 0.7,
        top_p: 0.9
      })
    });

    const data = await response.json();

    if (!data.choices || !data.choices[0]) {
      return res.status(500).json({ reply: "ByteBuddy didn’t get a valid response. Wanna try again?" });
    }

    const reply = data.choices[0].message.content;
    return res.status(200).json({ reply });

  } catch (err) {
    console.error("🔥 Together.ai API Error:", err);
    return res.status(500).json({ reply: `Oops! ByteBuddy crashed: ${err.message}` });
  }
};
