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
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const productSectionsRef = useRef([]);

  useEffect(() => {
    productSectionsRef.current.forEach((section, index) => {
      if (index < productSectionsRef.current.length - 1) {
        ScrollTrigger.create({
          trigger: section,
          start: "top top", // L'animation commence quand le haut de la section atteint le haut de la vue
          pin: true, // Fixe la section
          pinSpacing: false, // Évite de créer un espace supplémentaire
          end: () => `+=${window.innerHeight}`, // La section reste épinglée pour la hauteur de l'écran
          onLeave: () => ScrollTrigger.refresh(), // Actualise les déclencheurs quand une section est déplacée
        });
      }
    });
  }, []);

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
        <Product
          ref={(el) => (productSectionsRef.current[0] = el)}
          activeDisplay={"chair1"}
          handleClick={handleClickChair}
        />
        <Product
          ref={(el) => (productSectionsRef.current[1] = el)}
          activeDisplay={"chair2"}
          handleClick={handleClickChair}
        />
        <Product
          ref={(el) => (productSectionsRef.current[2] = el)}
          activeDisplay={"chair3"}
          handleClick={handleClickChair}
        />
        <Banner />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
