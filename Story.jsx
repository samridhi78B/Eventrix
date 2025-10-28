import gsap from "gsap";
import { useRef, useState } from "react";

import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";
import Contact from "./Contact";

const FloatingImage = () => {
  const frameRef = useRef(null);
  const [openContact, setOpenContact] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    gsap.to(element, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = frameRef.current;

    if (element) {
      gsap.to(element, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Eventrix
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="Elevate Every Event Experience"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  onMouseEnter={handleMouseLeave}
                  src="/img/entrance.webp"
                  alt="entrance.webp"
                  className="object-contain"
                />
              </div>
            </div>

            {/* for the rounded corner */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start">
              Have questions or need help planning your next event?
              Reach out to our team—let's tailor the perfect experience for you.
            </p>

            <Button
              id="realm-btn"
              title="Contact Us"
              containerClass="mt-5"
              onClick={() => setOpenContact(true)}
            />
          </div>
        </div>
      </div>
      {openContact && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 p-4">
          <div className="relative w-full max-w-5xl rounded-xl bg-black/70 backdrop-blur-xl p-4 text-white shadow-xl">
            <button
              aria-label="Close"
              className="absolute right-3 top-3 rounded-md px-3 py-1 text-sm hover:bg-black/5"
              onClick={() => setOpenContact(false)}
            >
              Close
            </button>
            <div className="max-h-[80vh] overflow-auto">
              <Contact />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingImage;
