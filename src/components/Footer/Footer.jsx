import { useEffect, useRef } from "react";
import styles from "./Footer.module.css";
import logoLight from "../../assets/icons/logoLight.svg";
import mailIcon from "../../assets/icons/mailIcon.svg";
import instaIcon from "../../assets/icons/instaIcon.svg";
import twitterIcon from "../../assets/icons/twitterIcon.svg";
import chairFooterRight from "../../assets/images/chair/chairFooterRight.png";
import chairFooterMain from "../../assets/images/chair/chairFooterMain.png";
import chairFooterLeft from "../../assets/images/chair/chairFooterLeft.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const logoContainerRef = useRef(null);
  const logoRef = useRef(null);
  const taglineRef = useRef(null);

  useEffect(() => {
    const logoContainer = logoContainerRef.current;
    const logo = logoRef.current;
    const tagline = taglineRef.current;

    // Configuration initiale
    gsap.set([logo, tagline], {
      y: 50,
      opacity: 0,
    });

    // Animation du logo et du tagline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: logoContainer,
        start: "top 80%", // Déclenche quand le haut du footer atteint 80% de la fenêtre
        end: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    tl.to(logo, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }).to(
      tagline,
      {
        y: 0,
        opacity: 1,
        duration: 2.5,
        ease: "power3.out",
      },
      "-=0.5"
    ); // Commence 0.5s avant la fin de l'animation du logo

    // Nettoyage
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerLogo} ref={logoContainerRef}>
        <div>
          <img ref={logoRef} src={logoLight} alt="logo" />
          <p ref={taglineRef}>Plus rare que nécessaire.</p>
        </div>
      </div>

      <div className={styles.footerInfos}>
        <div className={styles.socials}>
          <a href="" target="_blank" aria-label="Mail">
            <img src={mailIcon} alt="Mail" />
            <p>Mail</p>
          </a>
          <a
            href="https://www.instagram.com/monprofil"
            target="_blank"
            aria-label="Instagram"
          >
            <img src={instaIcon} alt="Instagram" />
            <p>Instagram</p>
          </a>
          <a
            href="https://www.twitter.com/monprofil"
            target="_blank"
            aria-label="Twitter"
          >
            <img src={twitterIcon} alt="Twitter" />
            <p>Twitter</p>
          </a>
        </div>

        <div className={styles.address}>
          <p>05 67 45 36 03</p>
          <p>
            Galerie Oncemade
            <br />
            1528 Greene Street
            <br />
            SoHo, New York, NY 10013
          </p>
          <p>galerie.oncemade@contact.com</p>
        </div>

        <div className={styles.leftImg}>
          <img src={chairFooterLeft} alt="chair Zenith" />
        </div>
        <div className={styles.centerImg}>
          <img src={chairFooterMain} alt="chair Zenith" />
        </div>
        <div className={styles.rightImg}>
          <img src={chairFooterRight} alt="chair Zenith" />
        </div>
      </div>

      <div className={styles.credits}>
        <p>© 2024 | Oncemade | Tous droits Réservés</p>
      </div>
    </footer>
  );
}
