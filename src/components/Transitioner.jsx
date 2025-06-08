import { useEffect, useRef, useState } from "react";

function SectionWrapper({ children, backgroundImage }) {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scale = 1 + scrollY / 1000;

  return (
    <div ref={ref} className="relative overflow-hidden min-h-screen">
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
