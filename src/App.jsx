import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <main className="pt-16">
        <div className="w-full max-w-screen-md mx-auto px-4">
          <Hero />
        </div>
      </main>
    </div>
  );
}

export default App;
