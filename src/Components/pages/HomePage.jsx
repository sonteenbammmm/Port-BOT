import { MobileMenu } from "../MobileMenu";
import { Navbar } from "../Navbar";
import { About } from "../sections/About";
import { Projects } from "../sections/Projects";
import { useState } from "react";

export const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div > 
      <About />
      <Projects />
    </>
  );
};
