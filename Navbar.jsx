import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";
import Login from "./login";

const navItems = ["Home", "About", "Events", "Help", "Contact"];

const NavBar = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const [route, setRoute] = useState(() => (typeof window !== "undefined" ? window.location.hash : ""));

  // Refs for audio and navigation container
  const navContainerRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  

  useEffect(() => {
    const onHashChange = () => setRoute(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const el = navContainerRef.current;
    if (!el) {
      setLastScrollY(currentScrollY);
      return;
    }

    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      el.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      el.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      el.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    const el = navContainerRef.current;
    if (!el) return;
    gsap.to(el, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo and Product button */}
          <div className="flex items-center gap-7">
            <img src="/img/images.png" alt="logo" className="w-10" />

            <Button
              id="login-button"
              title="Login"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
              onClick={() => setOpenLogin(true)}
            />

          </div>

          {/* Navigation Links and Audio Button */}
          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item === "Events" ? "#/booking" : `#${item.toLowerCase()}`}
                  className={
                    `nav-hover-btn ${item === "Events" && route === "#/booking" ? "text-white after:bg-white font-semibold" : ""}`
                  }
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
      {openLogin && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-5xl rounded-xl bg-white p-4 text-black shadow-xl">
            <button
              aria-label="Close login"
              className="absolute right-3 top-3 rounded-md px-3 py-1 text-sm hover:bg-black/5"
              onClick={() => setOpenLogin(false)}
            >
              Close
            </button>
            <div className="max-h-[85vh] overflow-auto">
              <Login onSuccess={() => setOpenLogin(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

