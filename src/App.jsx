import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Transitioner from "./components/Transitioner";
import About from "./components/About";
import Project from "./components/Project";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="bg-black text-white overflow-x-hidden">
        <Navbar />

        <main className="pt-14">
          <Transitioner>
            <section id="hero">
              <Hero />
            </section>
          </Transitioner>

          <Transitioner backgroundImage="/school.png">
            <section id="about">
              <About />
            </section>
          </Transitioner>

          <Transitioner backgroundImage="/super.png">
            <section id="projects">
              <Project />
            </section>
          </Transitioner>

          <Transitioner backgroundImage="/buillding.jpg">
            <section id="resume">
              <Resume />
            </section>
          </Transitioner>

          <Transitioner>
            <section id="Contact">
              <Contact />
            </section>
          </Transitioner>
        </main>
      </div>
    </>
  );
}

export default App;
