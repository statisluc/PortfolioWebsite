import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Transitioner from "./components/Transitioner";
import About from "./components/About";
import Project from "./components/Project";

function App() {
  return (
    <>
      <div className="bg-black text-white overflow-x-hidden">
        <Navbar />

        <main className="pt-16">
          <Transitioner>
            <section id="hero">
              <Hero />
            </section>
          </Transitioner>
        </main>
        <main className="pt-16">
          <Transitioner backgroundImage="/spongeboy.png">
            <section id="about">
              <About />
            </section>
          </Transitioner>
        </main>
        <main className="pt-16">
          <Transitioner backgroundImage="/hank.jpg">
            <section id="projects">
              <Project />
            </section>
          </Transitioner>
        </main>
      </div>
    </>
  );
}

export default App;
