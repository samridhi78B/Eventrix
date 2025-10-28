import { FaDiscord, FaTwitter, FaYoutube, FaMedium, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Faqs from "./Faqs";

const socialLinks = [
  { href: "https://instagram.com", icon: <FaInstagram /> },
  { href: "https://twitter.com", icon: <FaTwitter /> },
  { href: "https://youtube.com", icon: <FaYoutube /> },
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://medium.com", icon: <FaMedium /> },
];

const Footer = () => {
  const [openFaqs, setOpenFaqs] = useState(false);
  return (
    <footer className="w-screen bg-[#5542ff] text-black">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Eventrix</h3>
            <p className="text-sm opacity-80">
              Plan, promote, and manage events with ease. Ticketing, registrations,
              check-ins, and insights—all in one platform.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-medium">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#features" className="hover:underline">Events</a></li>
              <li><a href="#story" className="hover:underline">Story</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-medium">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => setOpenFaqs(true)} className="hover:underline">
                  FAQs
                </button>
              </li>
              <li><a href="#support" className="hover:underline">Support</a></li>
              <li><a href="#privacy-policy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#terms" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-medium">Follow Us</h4>
            <div className="flex items-center gap-4 text-2xl">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-300 hover:text-white"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-black/20 pt-6 text-sm md:flex-row">
          <p>© Eventrix 2024. All rights reserved.</p>
          <p className="opacity-80">Made for a better event experience.</p>
        </div>
      </div>

      {openFaqs && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-3xl rounded-xl bg-white p-4 text-black shadow-xl">
            <button
              aria-label="Close FAQs"
              className="absolute right-3 top-3 rounded-md px-3 py-1 text-sm hover:bg-black/5"
              onClick={() => setOpenFaqs(false)}
            >
              Close
            </button>
            <div className="max-h-[85vh] overflow-auto">
              <Faqs />
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
