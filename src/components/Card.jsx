// import { useRef, useEffect, useState } from "react";

// export default function Card({ children, className = "" }) {
//   const ref = useRef();
//   const [inView, setInView] = useState(false);

//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => setInView(e.isIntersecting), {
//       threshold: 0.1,
//     });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);
//   return (
//     <div
//       ref={ref}
//       className={`card
//         ${
//           inView ? "" : "opacity-0 translate-y-8"
//         } transition-all duration-700 ease-out
//         bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl ${className}`}
//     >
//       {children}
//     </div>
//   );
// }
import { useRef, useEffect, useState } from "react";

export default function Card({ children, className = "" }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`w-full max-w-[800px] transition-all duration-700 ease-out transform 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
        bg-white p-6 rounded-xl shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
