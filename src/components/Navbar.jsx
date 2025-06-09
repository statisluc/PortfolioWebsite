import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* via-black/(x) how dark...*/}
      {/* via-(x)% ...at which point*/}
      {/* <div className="py-6 fixed top-20 w-full z-50 bg-gradient-to-b from-black via-black/100 via-15% to-transparent"> */}
      <nav className=" py-4 fixed top-0 w-full z-50 bg-gradient-to-b from-black via-black/100 via-80% to-transparent">
        <div className="container mx-auto px-4 py-4 relative">
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 12h16"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden md:flex items-center justify-center space-x-4 ">
            <a
              href="#hero"
              className="px-3 py-2 text-lg text-white transition transform hover:scale-110
                    active:bg-white active:text-black rounded-md"
            >
              Home
            </a>
            <a
              href="#about"
              className="px-3 py-2 text-lg text-white transition transform hover:scale-110
                    active:bg-white active:text-black rounded-md"
            >
              About
            </a>
            <a
              href="#projects"
              className="px-3 py-2 text-lg text-white transition transform hover:scale-110
                    active:bg-white active:text-black rounded-md"
            >
              Projects
            </a>
            <a
              href="#resume"
              className="px-3 py-2 text-lg text-white transition transform hover:scale-110
                    active:bg-white active:text-black rounded-md"
            >
              Resume
            </a>
            <a
              href="#Contact"
              className="px-3 py-2 text-lg text-white transition transform hover:scale-110
                    active:bg-white active:text-black rounded-md"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
      {/* </div> */}

      <div
        className={`bg-white text-black overflow-hidden w-full fixed top-16 z-40 transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col pt-6">
          <a
            href="#hero"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center px-4 py-3 text-lg text-black border-b border-black last:border-b-0 transition transform hover:scale-105 active:bg-black active:text-white font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center px-4 py-3 text-lg text-black border-b border-black last:border-b-0 transition transform hover:scale-105 active:bg-black active:text-white font-medium"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center px-4 py-3 text-lg text-black border-b border-black last:border-b-0 transition transform hover:scale-105 active:bg-black active:text-white font-medium"
          >
            Projects
          </a>
          <a
            href="#Contact"
            onClick={() => setMenuOpen(false)}
            className="w-full text-center px-4 py-3 text-lg text-black border-b border-black last:border-b-0 transition transform hover:scale-105 active:bg-black active:text-white font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
