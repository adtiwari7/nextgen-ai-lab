// pages/ChatBot.js - Fullscreen Chat UI
import React from 'react';
import ChatWidget from '../ChatWidget';

export default function ChatBot() {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-blue-950 to-blue-800 text-white flex flex-col">
      <header className="bg-blue-900 text-center py-4 shadow-lg">
        <h1 className="text-2xl md:text-3xl font-bold text-teal-300">Chat with ByteBuddy 🤖</h1>
      </header>
      <main className="flex-1 p-4 md:p-8 flex justify-center items-center">
        <div className="w-full max-w-3xl bg-blue-900 p-4 md:p-6 rounded-2xl shadow-2xl h-[85%] flex flex-col">
          <ChatWidget />
        </div>
      </main>
    </div>
  );
}
