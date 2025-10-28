import { useEffect, useMemo, useRef, useState } from "react";

const PREDEFINED_FAQ = [
  {
    q: "What services do you offer?",
    a: "We handle end-to-end event management: venue booking, vendor coordination, guest registrations, stage & AV, catering, and on-site ops.",
    keywords: ["services", "offer", "do you do", "capabilities"],
  },
  {
    q: "Do you manage corporate events?",
    a: "Yes. We specialize in conferences, product launches, offsites, award nights, trade shows, and team gatherings.",
    keywords: ["corporate", "conference", "product", "trade", "team"],
  },
  {
    q: "What is your pricing?",
    a: "Pricing depends on scope, venue, date, and guest count. Share your details and we'll send a quick estimate.",
    keywords: ["price", "pricing", "cost", "budget", "charges"],
  },
  {
    q: "Can you help with weddings?",
    a: "Absolutely! From decor and themes to logistics and hospitality, we cover full wedding planning.",
    keywords: ["wedding", "engagement", "reception", "sangeet", "ceremony"],
  },
  {
    q: "Do you provide on-site support?",
    a: "Yes, our on-ground team manages vendors, timelines, rehearsals, and guest experience throughout the event.",
    keywords: ["on-site", "onsite", "support", "team", "manage"],
  },
  {
    q: "How do I get a quote?",
    a: "Click Contact in the navbar or share your event type, city, date, and guest count here to start a quick quote.",
    keywords: ["quote", "estimate", "proposal", "contact"],
  },
];

function useAutoScroll(dep) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);
  return ref;
}

function getAnswer(userText) {
  const text = (userText || "").toLowerCase();
  const match = PREDEFINED_FAQ.find((f) => f.keywords.some((k) => text.includes(k)));
  if (match) return match.a;
  return "I couldn't find an exact answer. Please ask about services, pricing, corporate events, weddings, or on-site support. You can also head to Contact to share details for a quote.";
}

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hi! I'm your Eventrix assistant. Ask me about services, pricing, or event types." },
  ]);
  const [input, setInput] = useState("");
  const containerRef = useAutoScroll(messages.length);

  const suggested = useMemo(() => PREDEFINED_FAQ.slice(0, 4), []);

  const send = (text) => {
    const content = (text ?? input).trim();
    if (!content) return;

    const userMsg = { role: "user", text: content };
    const botMsg = { role: "bot", text: getAnswer(content) };
    setMessages((m) => [...m, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className="fixed z-50 bottom-5 right-5 flex items-center gap-2 rounded-full bg-indigo-600 text-white px-4 py-3 shadow-lg hover:bg-indigo-700 active:bg-indigo-800 transition md:bottom-6 md:right-6"
      >
        <span className="inline-block size-2 rounded-full bg-green-300 animate-pulse" />
        <span className="font-semibold">{open ? "Close" : "Chat"}</span>
      </button>

      {open && (
        <div className="fixed z-50 bottom-20 right-5 md:right-6 w-[92vw] max-w-sm bg-white/95 backdrop-blur border border-black/10 rounded-xl shadow-2xl flex flex-col overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-indigo-600 text-white">
            <div className="flex items-center gap-2">
              <div className="size-2 rounded-full bg-green-300 animate-pulse" />
              <h3 className="font-semibold">Eventrix Assistant</h3>
            </div>
            <button onClick={() => setOpen(false)} className="text-sm/none opacity-90 hover:opacity-100">✕</button>
          </div>

          <div ref={containerRef} className="px-3 py-2 max-h-80 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={
                    "rounded-2xl px-3 py-2 max-w-[80%] text-sm " +
                    (m.role === "user"
                      ? "bg-indigo-600 text-white rounded-br-sm"
                      : "bg-gray-100 text-gray-900 rounded-bl-sm border border-black/5")
                  }
                >
                  {m.text}
                </div>
              </div>
            ))}
          </div>

          <div className="px-3 pb-2">
            <div className="flex flex-wrap gap-2 mb-2">
              {suggested.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => send(s.q)}
                  className="text-xs bg-gray-100 hover:bg-gray-200 border border-black/5 rounded-full px-3 py-1"
                >
                  {s.q}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2 pb-3">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") send();
                }}
                placeholder="Type your question..."
                className="flex-1 rounded-lg border border-black/10 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={() => send()}
                className="rounded-lg bg-indigo-600 text-white px-3 py-2 text-sm font-semibold hover:bg-indigo-700 active:bg-indigo-800"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
