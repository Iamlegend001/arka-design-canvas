import { useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const EXCUSES = [
  "It ran away to join the circus. 🎪",
  "It called in sick. Classic.",
  "It's on a juice cleanse and needs space.",
  "A raccoon ate it. We're investigating.",
  "It ghosted us. We're not okay.",
  "It's in witness protection. We cannot say more.",
  "It went to 'find itself' in Bali.",
  "DNS ate my homework.",
  "It was last seen arguing with a semicolon.",
  "404 pages have feelings too. It left.",
];

const CLUES = ["🔎", "🕵️", "📁", "🗂️", "💾", "📟"];

const NotFound = () => {
  const location = useLocation();
  const containerRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const cluesRef = useRef<HTMLDivElement>(null);
  const typewriterRef = useRef<HTMLParagraphElement>(null);
  const stampRef = useRef<HTMLDivElement>(null);

  const [excuse] = useState(
    () => EXCUSES[Math.floor(Math.random() * EXCUSES.length)],
  );
  const [blinks, setBlinks] = useState(true);

  // Typewriter effect
  useEffect(() => {
    const text = `MISSING: ${location.pathname}`;
    const el = typewriterRef.current;
    if (!el) return;
    el.textContent = "";
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        el.textContent += text[i];
        i++;
      } else {
        clearInterval(interval);
        setBlinks(false);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [location.pathname]);

  useEffect(() => {
    console.error("404 Error: Route not found ->", location.pathname);

    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.4 },
    )
      .fromTo(
        badgeRef.current,
        { scale: 3, rotation: -30, opacity: 0 },
        {
          scale: 1,
          rotation: -3,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(2)",
        },
      )
      .fromTo(
        cluesRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "-=0.2",
      )
      .fromTo(
        stampRef.current,
        { scale: 4, opacity: 0, rotation: -20 },
        {
          scale: 1,
          opacity: 1,
          rotation: -12,
          duration: 0.4,
          ease: "back.out(3)",
        },
        "+=0.6",
      );

    // Wiggle the badge
    gsap.to(badgeRef.current, {
      rotation: -5,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "sine.inOut",
    });
  }, [location.pathname]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center p-6 bg-grid font-mono"
    >
      <div className="max-w-[600px] w-full relative">
        {/* Police tape header */}
        <div className="rotate-[-1deg] mb-6 shadow-[0_3px_0_#c9a400] select-none bg-[#f5c800] text-[#1a1a1a] font-extrabold text-[13px] tracking-[4px] text-center py-2">
          ⚠️ CRIME SCENE — DO NOT CROSS ⚠️ CRIME SCENE — DO NOT CROSS ⚠️
        </div>

        {/* Main card */}
        <div className="relative bg-white border-2 border-[#1a1a1a] p-8 shadow-[6px_6px_0_#1a1a1a]">
          {/* CLASSIFIED STAMP */}
          <div
            ref={stampRef}
            className="absolute top-6 right-6 border-4 border-[#cc2200] text-[#cc2200] font-extrabold text-[22px] tracking-[3px] px-2 py-1 uppercase opacity-0 pointer-events-none"
          >
            COLD CASE
          </div>

          {/* Badge / Case number */}
          <div
            ref={badgeRef}
            className="inline-block bg-[#1a1a1a] text-[#f5c800] font-extrabold text-[72px] px-6 py-2 leading-none mb-2 tracking-[-2px]"
          >
            404
          </div>

          <div className="text-[13px] text-[#888] tracking-[3px] mb-5">
            CASE NO. #{Math.floor(Math.random() * 90000) + 10000} — PAGE NOT
            FOUND
          </div>

          {/* Missing file poster */}
          <div className="border-2 border-dashed border-[#ccc] p-4 mb-6 bg-[#fafaf8]">
            <div className="text-[11px] tracking-[3px] text-[#aaa] mb-1">
              ▶ LAST KNOWN LOCATION
            </div>
            <p
              ref={typewriterRef}
              className="inline text-[18px] font-bold text-[#1a1a1a] m-0 min-h-[28px]"
            />
            {blinks && <span className="inline-block animate-blink">█</span>}
          </div>

          {/* Excuse */}
          <div className="bg-[#fff8dc] border border-[#e8d88a] px-4 py-3 text-[15px] text-[#555] mb-6 leading-[1.6]">
            <strong>🗒️ Detective's note:</strong>
            <br />
            {excuse}
          </div>

          {/* Clue emojis */}
          <div ref={cluesRef} className="flex gap-3 mb-7 flex-wrap">
            {CLUES.map((clue, i) => (
              <span
                key={i}
                title="Potential evidence"
                className={`inline-block text-[28px] cursor-default transition-transform duration-200 ${
                  i > 2 ? "grayscale opacity-30" : ""
                }`}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.4) rotate(10deg)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                {clue}
              </span>
            ))}
            <span className="text-[12px] text-[#aaa] self-center">
              (evidence inconclusive)
            </span>
          </div>

          {/* CTA */}
          <div className="flex gap-3 flex-wrap">
            <a
              href="/"
              className="inline-block px-6 py-3 bg-[#1a1a1a] text-[#f5c800] font-extrabold tracking-[2px] text-[13px] border-2 border-[#1a1a1a] hover:bg-[#f5c800] hover:text-[#1a1a1a] transition-colors duration-150"
            >
              ← RETURN TO SAFETY
            </a>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-transparent text-[#888] font-bold tracking-[2px] text-[13px] border-2 border-[#ccc] hover:border-[#888] hover:text-[#333] transition-colors duration-150"
            >
              TRY AGAIN (FUTILE)
            </button>
          </div>
        </div>

        {/* Footer tape */}
        <div className="rotate-[1deg] mt-6 shadow-[0_-3px_0_#c9a400] select-none bg-[#f5c800] text-[#1a1a1a] font-extrabold text-[13px] tracking-[4px] text-center py-2">
          ⚠️ CRIME SCENE — DO NOT CROSS ⚠️ CRIME SCENE — DO NOT CROSS ⚠️
        </div>
      </div>
    </div>
  );
};

export default NotFound;
