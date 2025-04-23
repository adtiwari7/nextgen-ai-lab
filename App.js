// NextGen AI Lab - Homepage (React + Tailwind CSS)
import './index.css';

export default function App() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-800 text-white p-8">
      <section className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          Welcome to <span className="text-teal-400">NextGen AI Lab</span>
        </h1>
        <p className="text-xl text-blue-200 mb-8">
          Learn, build, and create with the power of Artificial Intelligence. Your journey to innovation starts here.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-2 px-6 rounded-2xl shadow-xl transition">
            Get Started
          </button>
          <button className="bg-white hover:bg-gray-100 text-blue-900 font-semibold py-2 px-6 rounded-2xl shadow-xl transition">
            Learn More
          </button>
        </div>
      </section>

      <section className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
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
      </section>
    </main>
  );
}
