import { useState } from "react";

const FAQ_DATA = [
  { q: "What services do you offer?", a: "End-to-end event planning including venue, vendors, registrations, AV, catering, and on-site management." },
  { q: "Do you handle corporate events?", a: "Yes, from conferences and launches to offsites and award nights." },
  { q: "How does pricing work?", a: "Pricing depends on scope, date, venue, and guest count. Share details for a tailored estimate." },
  { q: "Can you manage weddings?", a: "Yes, full-service wedding planning from decor and hospitality to logistics." },
  { q: "Do you provide on-site support?", a: "Our on-ground team manages vendors, timelines, rehearsals, and guest experience." },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
      <div className="divide-y divide-black/10">
        {FAQ_DATA.map((item, idx) => {
          const open = openIndex === idx;
          return (
            <div key={idx} className="py-2">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-3 text-left"
                aria-expanded={open}
              >
                <span className="font-medium">{item.q}</span>
                <span
                  className={
                    "transition-transform duration-200 " + (open ? "rotate-90" : "rotate-0")
                  }
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </button>
              {open && (
                <div className="mt-2 text-sm text-gray-700">{item.a}</div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
