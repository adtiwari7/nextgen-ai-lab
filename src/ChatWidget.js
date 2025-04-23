import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages([...messages, userMsg]);
    setInput('');
    setLoading(true);

    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();
    setMessages([...messages, userMsg, { from: "bot", text: data.reply }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="bg-teal-500 hover:bg-teal-400 text-white p-3 rounded-full shadow-lg"
      >
        {open ? '×' : '💬'}
      </button>

      {open && (
        <div className="w-80 h-96 bg-blue-900 rounded-2xl p-4 shadow-2xl mt-2 flex flex-col">
          <div className="flex-1 overflow-y-auto mb-2 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-xl max-w-[75%] ${msg.from === 'bot' ? 'bg-blue-700 text-left' : 'bg-teal-500 text-white ml-auto text-right'}`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="p-2 rounded-xl max-w-[75%] bg-blue-700 text-left">
                ByteBuddy is typing...
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 p-2 rounded-lg bg-blue-800 text-white border border-blue-600"
              placeholder="Ask me something..."
            />
            <button
              onClick={sendMessage}
              className="bg-teal-600 px-4 py-2 rounded-lg hover:bg-teal-400"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
