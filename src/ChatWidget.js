import React from 'react';
import ChatWidget from '../ChatWidget';

export default function ChatBot() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-950 to-blue-800 p-8 text-white">
      <h2 className="text-3xl font-bold text-teal-300 mb-6 text-center">Talk to ByteBuddy 🤖</h2>
      <div className="max-w-xl mx-auto bg-blue-900 p-6 rounded-2xl shadow-lg">
        <ChatWidget />
      </div>
    </div>
  );
}
