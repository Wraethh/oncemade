import { useEffect, useRef } from "react";
import styles from "./Teaser.module.css";
import teaser from "../../assets/videos/teaser.mp4";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Teaser() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const section = sectionRef.current;

    if (!container || !section) return;

    gsap.set(container, {
      width: "30%",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        // Augmenter la valeur de end pour prolonger la durée du pinning
        end: "+=200%", // Animation sur 2 fois la hauteur de la section
        scrub: 1,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      },
    });

    // Diviser l'animation en trois phases
    // Phase 1: Clip Path (0-33%)
    tl.fromTo(
      container,
      {
        clipPath: "inset(10% 50% 10% 50%)",
      },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 1,
        ease: "power2.inOut",
      },
      0
    );

    // Phase 2: Width expansion (33-66%)
    tl.to(container, {
      width: "100%",
      duration: 1,
      ease: "power2.inOut",
    });

    // Phase 3: Pause state (66-100%)
    tl.to({}, { duration: 5 }); // Période d'attente

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className={styles.teaser}>
      <div className={styles.videoContainer} ref={containerRef}>
        <video muted autoPlay loop playsInline className={styles.video}>
          <source src={teaser} type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
