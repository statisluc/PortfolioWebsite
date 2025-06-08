export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-xl animate-fade-up ${className}`}
    >
      {children}
    </div>
  );
}
