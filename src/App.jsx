import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Designer from "./components/Designer/Designer";
import Concept from "./components/Concept/Concept";
import Teaser from "./components/Teaser/Teaser";
import Product from "./components/Product/Product";
import Banner from "./components/Banner/Banner";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [activeChairDisplay, setActiveChairDisplay] = useState("home");

  useEffect(() => {
    document
      .getElementById(activeChairDisplay)
      .scrollIntoView({ behavior: "smooth" });
  }, [activeChairDisplay]);

  const handleClickChair = (e) => {
    setActiveChairDisplay(e.currentTarget.value);
  };

  return (
    <>
      <Navbar />
      <main id="main-content">
        <Home />
        <Designer />
        <Concept />
        <div className="sepPattern"></div>
        <Teaser />
        <Product activeDisplay={"chair1"} handleClick={handleClickChair} />
        <Product activeDisplay={"chair2"} handleClick={handleClickChair} />
        <Product activeDisplay={"chair3"} handleClick={handleClickChair} />
        <Banner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
