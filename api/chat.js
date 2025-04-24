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
            content: "You're ByteBuddy, a chill and supportive AI created by Adhyayan. Keep things light and fun unless asked to explain deep topics."
          },
          {
