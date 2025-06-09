import { useEffect, useRef, useState } from "react";

function SectionWrapper({ children, backgroundImage }) {
  const sectionRef = useRef();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const rect = sectionRef.current?.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect) {
        const distanceFromTop = Math.max(0, windowHeight - rect.top);
        const sectionHeight = rect.height;

        const sectionProgress = Math.min(1, distanceFromTop / sectionHeight);
        setProgress(sectionProgress);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scale = 1 + progress * 0.3;

  return (
    <div ref={sectionRef} className="relative overflow-hidden min-h-screen">
      {/* The background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "blur(8px)",
          transform: `scale(${scale})`,
        }}
      ></div>

      {/* The gradient */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black to-transparent z-10"></div>

      <div className="relative z-20">{children}</div>
    </div>
  );
}

export default SectionWrapper;
