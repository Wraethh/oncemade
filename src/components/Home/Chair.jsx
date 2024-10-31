import styles from "./Home.module.css";
import { useRef } from "react";
import Spline from "@splinetool/react-spline";
import { gsap } from "gsap";

export default function Chair() {
  const splineRef = useRef(null);

  const onLoad = (spline) => {
    // Stocke la référence de la scène Spline pour plus tard
    splineRef.current = spline;

    // Accède à la caméra par son nom (par exemple, "Camera")
    const camera = spline.findObjectByName("Camera");

    if (camera) {
      // Ajustez la position ou le zoom de la caméra
      camera.position.z = 400; // Ajustez selon le zoom souhaité
      camera.position.y = 200;
    }

    // Accédez à l'objet par son nom d'ID dans Spline
    const object3D = spline.findObjectByName("chaisagrum");

    // Vérifiez si l'objet existe avant de définir une animation
    if (object3D) {
      // Ajoutez un écouteur de scroll pour animer la rotation de l'objet 3D
      const handleScroll = () => {
        const rotationAngle = window.scrollY / 100; // Ajustez la vitesse de rotation
        gsap.to(object3D.rotation, {
          y: rotationAngle,
          duration: 0.5,
          ease: "power3.out",
        });
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  };

  return (
    <Spline
      scene="https://prod.spline.design/mknEBJu3NTzhohrU/scene.splinecode"
      onLoad={onLoad} // Passez directement la fonction onLoad ici
      className={styles.chair}
    />
  );
}
