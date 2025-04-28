import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <section className="max-w-5xl mx-auto text-center relative">
      <h1 className="text-5xl font-extrabold leading-tight mb-4">
        Welcome to <span className="text-teal-400">NextGen AI Lab</span>
      </h1>
      <p className="text-xl text-blue-200 mb-8">
        Learn, build, and create with the power of Artificial Intelligence. Your journey to innovation starts here.
      </p>

      <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Card 1 */}
        <div className="bg-blue-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-teal-300">Interactive AI Learning</h2>
          <p>Experience AI concepts through stories, games, and coding playgrounds designed for curious minds.</p>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-teal-300">Build Your Own Projects</h2>
          <p>Create your own AI tools with guided tutorials and launch them to the world. No coding background needed!</p>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-900 p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold mb-2 text-teal-300">Join a Global Community</h2>
          <p>Connect with young innovators from around the globe, share your work, and learn together.</p>
        </div>

        {/* 📚 NEW Card for Book */}
        <Link to="/hey-ai-whats-up" className="bg-blue-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 text-center">
          <h2 className="text-2xl font-bold mb-2 text-teal-300">📚 Hey AI, What's Up?</h2>
          <p>A beginner’s playful guide to Artificial Intelligence!</p>
        </Link>
      </div>
    </section>
  );
}

function About() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-20">
      <h2 className="text-3xl font-bold text-teal-300 mb-4">About NextGen AI Lab</h2>
      <p className="text-blue-200 text-lg mb-6">
        NextGen AI Lab is a youth-driven platform where the next generation of innovators learn artificial intelligence by building real-world projects. We believe in learning by doing — with AI tools, guided challenges, and a global creative community.
      </p>
      <h3 className="text-2xl font-semibold text-white mt-10 mb-4">About the Founder</h3>
      <p className="text-blue-200 text-lg mb-6">
        Hi, I'm <strong>Adhyayan Tiwari</strong>, a student, dreamer, and AI enthusiast. My passion for using technology to solve real-world problems — especially in the fields of robotics, education, and safety — inspired me to build this lab. I’ve worked on disaster response bots, health care AI, and even wrote a fun book called "Hey AI, What’s Up?" to make AI accessible for everyone. NextGen AI Lab is my way of bringing that same energy to youth across the globe.
      </p>
      <img
        src="/ChatGPT Image Apr 24, 2025, 02_06_18 PM.png"
        alt="About NextGen AI Lab"
        className="w-full max-w-xl mx-auto rounded-2xl shadow-lg mt-10"
      />
    </div>
  );
}

// 📚 NEW Book Page
function HeyAIWhatsUp() {
  return (
    <div className="max-w-3xl mx-auto text-center mt-20">
      <h2 className="text-4xl font-bold text-teal-400 mb-6">📚 Hey AI, What's Up?</h2>
      <p className="text-blue-200 text-lg mb-8">
        Dive into a fun, beginner-friendly guide to the amazing world of Artificial Intelligence. No complex jargon, just real ideas, real coding, and a real chance to build your future!
      </p>
      
      <div className="flex flex-col items-center gap-4">
        <a href="https://amzn.in/d/3QFgkHv" target="_blank" className="bg-teal-500 px-6 py-3 rounded-lg hover:bg-teal-600 text-white font-semibold">
          Buy on Amazon
        </a>
        <a href="https://www.flipkart.com/hey-ai-what-s-up/p/itm3962aa7a1aa17?pid=9798899067303&affid=editornoti" target="_blank" className="bg-teal-500 px-6 py-3 rounded-lg hover:bg-teal-600 text-white font-semibold">
          Buy on Flipkart
        </a>
        <a href="https://direct.notionpress.com/in/read/hey-ai-what-s-up-hardcover/" target="_blank" className="bg-teal-500 px-6 py-3 rounded-lg hover:bg-teal-600 text-white font-semibold">
          Buy on NotionPress
        </a>
      </div>
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
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-800 text-white p-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-started" element={<About />} />
          <Route path="/hey-ai-whats-up" element={<HeyAIWhatsUp />} /> {/* 📚 NEW Route */}
        </Routes>
      </main>
    </Router>
  );
}
