import { useState } from "react";
import './App.css'
import { LoadingScreen } from "./Components/LoadingScreen";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { HomePage } from "./Components/pages/HomePage";
import WebApp from "./Components/pages/Web-App";
import Modeling from "./Components/pages/Modeling";
import Detecting from "./Components/pages/Detecting";
import OnCloud from "./Components/pages/onCloud";
import Seed from "./Components/pages/seed";
import Singha from "./Components/pages/Singha";
import HCIA from "./Components/pages/HCIA";
import Other from "./Components/pages/Other";
import { Projects2 } from "./Components/sections/Project2";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/web-app" element={<WebApp />} />
        <Route path="/Modeling" element={<Modeling />} />
        <Route path="/onCloud" element={<OnCloud />} />
        <Route path="/Detecting" element={<Detecting />} />
        <Route path="/seed" element={<Seed />} />
        <Route path="/Singha" element={<Singha />} />
        <Route path="/HCIA" element={<HCIA/>} />
        <Route path="/Other" element={<Other/>} />
        <Route path="/Projects2" element={<Projects2/>} />


      </Routes>
    </>
  );
}

export default App;
