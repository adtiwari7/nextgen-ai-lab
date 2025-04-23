import { useState } from "react";

export default function ChatWidget() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages([...messages, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });

      const data = await res.json();
      setMessages([...messages, userMsg, { from: "bot", text: data.reply }]);
    } catch (error) {
      setMessages([...messages, userMsg, { from: "bot", text: "Oops! Something went wrong." }]);
    }

    setLoading(false);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto mb-4 space-y-2 p-2">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-xl max-w-[75%] ${
              msg.from === 'bot'
                ? 'bg-blue-700 text-left'
                : 'bg-teal-500 text-white ml-auto text-right'
            }`}
          >
            {msg.text}
          </div>
        ))}
        {loading && (
          <div className="p-2 rounded-xl max-w-[75%] bg-blue-700 text-left">
            ByteBuddy is thinking...
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          className="flex-1 p-2 rounded-lg bg-blue-800 text-white border border-blue-600"
          placeholder="Ask ByteBuddy anything..."
        />
        <button
          onClick={sendMessage}
          className="bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-400"
        >
          Send
        </button>
      </div>
    </div>
  );
}
