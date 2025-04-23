import React from 'react';
import ChatWidget from '../ChatWidget';

export default function ChatBot() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-800 text-white flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold text-teal-300 mb-6">Talk to ByteBuddy 🤖</h2>
      <div className="w-full max-w-xl bg-blue-900 p-6 rounded-2xl shadow-2xl">
        <ChatWidget />
      </div>
    </div>
  );
}
