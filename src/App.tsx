import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import GlobalContact from "./components/layout/GlobalContact";

import Home from "./pages/Hero";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <GlobalContact /> {/* muncul di semua page */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;