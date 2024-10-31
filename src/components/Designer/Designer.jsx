import { useEffect, useRef } from "react";
import styles from "./Designer.module.css";
import designerLogo from "../../assets/icons/designerLogo.svg";
import designerPic from "../../assets/images/designerPic.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Enregistrer le plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Designer() {
  // Créer une référence pour l'image
  const picRef = useRef(null);

  useEffect(() => {
    // Récupérer l'élément image
    const picElement = picRef.current;

    // Configuration initiale
    gsap.set(picElement, {
      x: "200%", // Position initiale (en dehors de l'écran à droite)
      opacity: 0,
    });

    // Créer l'animation
    gsap.to(picElement, {
      x: 0, // Position finale (position naturelle)
      opacity: 1,
      duration: 2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: picElement,
        start: "top 80%", // Commence l'animation quand le haut de l'image atteint 80% de la hauteur de la fenêtre
        end: "top 50%", // Termine quand le haut de l'image atteint 50% de la hauteur de la fenêtre
        scrub: false, // Animation fluide qui ne dépend pas du scroll
        // markers: true, // Utile pour le debugging, à retirer en production
        toggleActions: "play none none reverse", // Play à l'entrée, reverse à la sortie
      },
    });

    // Nettoyage
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="designer" className={styles.designer}>
      <div className={styles.designerLogo}>
        <img src={designerLogo} alt="designer logo" />
      </div>
      <div className={styles.designerPic}>
        <img ref={picRef} src={designerPic} alt="designer picture" />
      </div>

      <div className={styles.designerDesc}>
        <h2>Provocation et minimalisme</h2>
        <p>
          {
            "Anton Arkadis considère que le design contemporain est une « arnaque glorifiée » et une « extension vide de la vanité humaine ». Son credo est simple : « Si un objet vous fait réfléchir à sa propre existence, alors il est utile. Sinon, il n'est qu'une imposture. » Il s'intéresse particulièrement aux objets de la vie quotidienne qu'il détourne pour questionner leur fonction initiale."
          }
        </p>
        <p>
          {
            "Anton Arkadis est un designer russo-américain né à Moscou en 1988 et ayant grandi entre New York et Berlin. Son parcours éclectique l'a mené des bancs des Beaux-Arts de Berlin aux ateliers d'art industriel de New York. Connu pour ses créations qui interrogent la notion même de valeur et d'utilité, Arkadis est devenu une figure incontournable de l'art conceptuel des années 2020. Ses œuvres allient provocation, esthétique brute et minimalisme exagéré."
          }
        </p>
      </div>
    </section>
  );
}
