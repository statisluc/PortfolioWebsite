export default function Card({ children, className = "" }) {
  return (
    <div
      className={`card bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
