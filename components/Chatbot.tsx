"use client";

import { useState } from "react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi 👋 I'm Softlabs AI. How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = async () => {
    if (!input.trim() || isSending) return;

    const userMessage = { role: "user", text: input };
    setMessages((m) => [...m, userMessage]);
    setInput("");
    setIsSending(true);
    setError(null);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.reply || "AI is temporarily unavailable. Please try again soon.");
        setMessages((m) => [
          ...m,
          {
            role: "bot",
            text: data?.reply || "Sorry, something went wrong. Please try again.",
          },
        ]);
        return;
      }

      setMessages((m) => [...m, { role: "bot", text: data.reply }]);
    } catch (err) {
      setError("Network error. Please try again.");
      setMessages((m) => [
        ...m,
        { role: "bot", text: "Sorry, something went wrong. Please try again." },
      ]);
    } finally {
      setIsSending(false);
    }
  };
  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-indigo-600 p-4 text-white shadow-lg hover:bg-indigo-500"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 rounded-2xl bg-white shadow-xl border border-slate-200 flex flex-col">
          <div className="bg-indigo-600 text-white p-4 rounded-t-2xl font-semibold">
            Ask Softlabs AI
          </div>

          <div className="flex-1 p-4 space-y-3 overflow-y-auto max-h-80">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`text-sm p-2 rounded-lg ${
                  msg.role === "user"
                    ? "bg-indigo-100 text-right"
                    : "bg-slate-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t flex gap-2">
  <input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Type your message..."
    className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-black outline-none focus:ring-2 focus:ring-purple-500"
  />
  <button
    onClick={sendMessage}
    disabled={isSending}
    className="rounded-lg bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 disabled:opacity-60 disabled:cursor-not-allowed"
  >
    {isSending ? "Sending..." : "Send"}
  </button>
</div>
          {error && (
            <div className="px-4 pb-3 text-xs text-red-600">{error}</div>
          )}
        </div>
      )}
    </>
  );
}
