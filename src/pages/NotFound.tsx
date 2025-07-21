import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const NotFound = () => {
  const location = useLocation();
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const emojiRef = useRef(null);

  useEffect(() => {
    console.error("404 Error: Route not found ->", location.pathname);

    const tl = gsap.timeline();

    tl.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.5"
      )
      .fromTo(
        emojiRef.current,
        { rotation: -20 },
        { rotation: 20, duration: 0.5, yoyo: true, repeat: 5, ease: "elastic.out(1, 0.3)" }
      );
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[#f4f4f4] px-4"
      ref={containerRef}
    >
      <div className="text-center space-y-4">
        <div className="text-7xl font-extrabold text-gray-800" ref={textRef}>
          404
        </div>
        <div
          ref={emojiRef}
          className="text-5xl"
          role="img"
          aria-label="emoji"
        >
          😵‍💫
        </div>
        <p className="text-lg text-gray-600">
          Uh-oh! The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
