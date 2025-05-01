import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Navbar2 = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const [isMenuOpen ,setIsMenuOpen] =useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4 ">
        <div className="relative flex justify-center items-center h-16 w-full  ">
          <Link 
          to ="/#projects"          
          className="font-mono text-xl font-bold text-black ">
            <span className="flex items-center space-x-2">
                <svg className="h-8 w-8 text-gray-900 mr-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
                </svg>
                <span className="text-blue-500">BACK</span>
            </span>
          </Link>

{/*           

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden !text-black "
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            &#9776;
          </div>

 
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
            <a
              href="#contact"
              className="text-blue-600 hove:text-white transition-colors"
            >
              {" "}
              Contact{" "}
            </a>
          </div> */}
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