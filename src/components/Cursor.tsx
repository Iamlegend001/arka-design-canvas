import React, { useEffect, useState } from "react";
import { useDarkMode } from "../contexts/useDarkMode";

const Cursor = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  // percent position inside viewport for gradient effect
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const [isBig, setIsBig] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  // track dark mode via context instead of DOM mutation
  // no theme tracking needed

  const { isDark } = useDarkMode();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      const pctX = (e.clientX / window.innerWidth) * 100;
      const pctY = (e.clientY / window.innerHeight) * 100;
      setMousePos({ x: pctX, y: pctY });
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const tag = target.tagName;

      // hide custom pointer when over text inputs / editable areas
      if (tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable) {
        setVisible(false);
        return;
      }

      setVisible(true);

      if (tag === "A" || tag === "BUTTON" || target.dataset.cursor === "big") {
        setIsBig(true);
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const tag = target.tagName;

      // show cursor again when leaving inputs
      if (tag === "INPUT" || tag === "TEXTAREA" || target.isContentEditable) {
        setVisible(true);
      }

      if (tag === "A" || tag === "BUTTON" || target.dataset.cursor === "big") {
        setIsBig(false);
      }
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mouseout", handleOut);

    // hide when cursor leaves window and show when it re-enters
    const handleWindowOut = (e: MouseEvent) => {
      if (!(e.relatedTarget instanceof Node)) {
        setVisible(false);
      }
    };
    const handleWindowIn = () => setVisible(true);
    window.addEventListener("mouseout", handleWindowOut);
    window.addEventListener("mouseenter", handleWindowIn);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mouseout", handleOut);
      window.removeEventListener("mouseout", handleWindowOut);
      window.removeEventListener("mouseenter", handleWindowIn);
    };
  }, [isMobile]);

  return (
    <>
      <style>{`
        /* cursor uses a fixed red color */
        :root {
          --red: #c0392b;
        }

        @media (pointer: fine) {
          /* hide the native cursor across the page on devices with a fine pointer
             but keep a normal text cursor inside form fields */
          * {
            cursor: none !important;
          }
          input,
          textarea,
          select,
          [contenteditable] {
            cursor: text !important;
          }
        }

        .cursor {
          position: fixed;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
          mix-blend-mode: multiply;
          transition: width 0.3s ease, height 0.3s ease;
          border-radius: 50%;
          background: var(--red);
          width: 10px;
          height: 10px;
        }
        .cursor.big {
          width: 56px;
          height: 56px;
        }

        .noise-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 1;
          opacity: 0.035;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px;
        }

        .glow {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 0;
        }

        :root.dark .glow {
          mix-blend-mode: screen;
        }

        @media (max-width: 767px) {
          .cursor {
            display: none;
          }
        }
      `}</style>
      {/* noise and glow layers behind pointer */}
      <div className="noise-layer" />
      <style>{`
        .cursor.dynamic { left: ${cursorPos.x}px; top: ${cursorPos.y}px; }
        .glow.dynamic { background: ${
          isDark
            ? `radial-gradient(500px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255,82,71,0.06), transparent 65%)`
            : `radial-gradient(500px circle at ${mousePos.x}% ${mousePos.y}%, rgba(192,57,43,0.07), transparent 65%)`
        }`}</style>

      <div className="glow dynamic" />
      {visible && <div className={`cursor ${isBig ? "big" : ""} dynamic`} />}
    </>
  );
};

export default Cursor;
