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


function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      
      <Routes>
        <Route path="/port-BOT" element={<HomePage />} />
        <Route path="/port-BOT/web-app" element={<WebApp />} />
        <Route path="/port-BOT/Modeling" element={<Modeling />} />
        <Route path="/port-BOT/onCloud" element={<OnCloud />} />
        <Route path="/port-BOT/Detecting" element={<Detecting />} />
        <Route path="/port-BOT/seed" element={<Seed />} />
        <Route path="/port-BOT/Singha" element={<Singha />} />
        <Route path="/port-BOT/HCIA" element={<HCIA/>} />
        <Route path="/port-BOT/Other" element={<Other
/>} />

      </Routes>
    </>
  );
}

export default App;
