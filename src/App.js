// NextGen AI Lab - App.js with Chat UI on Home Page
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ChatBot from './pages/ChatBot';
import { useState } from 'react';

function ChatWidgetMock() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi there! I'm ByteBuddy 🤖 — how can I help you?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: 'user', text: input }]);
    setInput('');
    // Simulate bot reply
    setTimeout(() => {
      setMessages((msgs) => [...msgs, { from: 'bot', text: 'Cool! Tell me more.' }]);
    }, 500);
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
          </div>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 p-2 rounded-lg bg-blue-800 text-white border border-blue-600"
              placeholder="Say something..."
            />
            <button
              onClick={handleSend}
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

function Home() {
  return (
    <section className="max-w-5xl mx-auto text-center relative">
      <h1 className="text-5xl font-extrabold leading-tight mb-4">
        Welcome to <span className="text-teal-400">NextGen AI Lab</span>
      </h1>
      <p className="text-xl text-blue-200 mb-8">
        Learn, build, and create with the power of Artificial Intelligence. Your journey to innovation starts here.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/get-started">
          <button className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-2 px-6 rounded-2xl shadow-xl transition">
            Get Started
          </button>
        </Link>
        <Link to="/about">
          <button className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-2 px-6 rounded-2xl shadow-xl transition">
            Learn More
          </button>
        </Link>
      </div>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-blue-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-teal-300">Interactive AI Learning</h2>
          <p>Experience AI concepts through stories, games, and coding playgrounds designed for curious minds.</p>
        </div>

        <div className="bg-blue-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-teal-300">Build Your Own Projects</h2>
          <p>Create your own AI tools with guided tutorials and launch them to the world. No coding background needed!</p>
        </div>

        <div className="bg-blue-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-teal-300">Join a Global Community</h2>
          <p>Connect with young innovators from around the globe, share your work, and learn together.</p>
        </div>
      </div>

      <ChatWidgetMock />
    </section>
  );
}

function About() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-20">
      <h2 className="text-3xl font-bold text-teal-300 mb-4">About NextGen AI Lab</h2>
      <p className="text-blue-200 text-lg">
        This is an interactive platform to explore the world of Artificial Intelligence. Created by Adhyayan, this lab combines learning, building, and creativity into one place.
      </p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <header className="bg-blue-900 py-4 shadow-lg">
        <nav className="max-w-6xl mx-auto flex justify-between items-center px-4">
          <Link to="/" className="text-white text-2xl font-bold">NextGen AI Lab</Link>
          <div className="flex gap-6 text-blue-200 text-lg">
            <Link to="/" className="hover:text-white">Home</Link>
            <Link to="/get-started" className="hover:text-white">Get Started</Link>
            <Link to="/about" className="hover:text-white">About</Link>
            <Link to="/chat" className="hover:text-white">ChatBot</Link>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-800 text-white p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<About />} />
          <Route path="/chat" element={<ChatBot />} />
        </Routes>
      </main>
    </Router>
  );
}
