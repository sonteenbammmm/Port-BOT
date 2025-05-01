import { useEffect } from "react";
import { useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const [isMenuOpen ,setIsMenuOpen] =useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-black">
            {" "}
            MY<span className="text-blue-500">.PORTFOLIO</span>{" "}
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden !text-black "
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

          {/* <div className="md:hidden">
            <button id ='menu-toggle' className= "text-black cursor-pointer" onClick={toggleMenu}>
                <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap ="round"
                stroke-linejoin ="round" 
                string-width="2"
                viewBox="0 0 24 24"
                className="w-6 h-6"
                >
                 <path d='M4 6h16M4 12h16M4 18h16'></path>
                </svg>
            </button>
          </div> */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-blue-600 hove:text-white transition-colors"
            >
              {" "}
              About{" "}
            </a>
            <a
              href="#projects"
              className="text-blue-600 hove:text-white transition-colors"
            >
              {" "}
              Projects{" "}
            </a>
          </div>
        </div>
      </div>
          {/* Moblie Menu */}
          {/* {isMenuOpen ?(
            <ul className="flex-col md:hidden mb-3 text-center" >
                <li className="px-4 "><a
              href="#about"
              className="text-blue-600 hove:text-white transition-colors"
            >
              {" "}
              About{" "}
                </a></li>
                <li className="px-4"><a
              href="#projects"
              className="text-blue-600 hove:text-white transition-colors"
            >
              {" "}
              Projects{" "}
                </a></li>
                <li className="px-4"><a
              href="#contact"
              className="text-blue-600 hove:text-white transition-colors"
            >
              {" "}
              Contact{" "}
                </a></li>
            </ul>

          ): null} */}
    </nav>
  );
};