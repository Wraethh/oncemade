import styles from "./Home.module.css";
import { useRef } from "react";
import Spline from "@splinetool/react-spline";

export default function Chair() {
  const splineRef = useRef();

  const onLoad = (spline) => {
    // Stocke la référence de la scène Spline pour plus tard
    splineRef.current = spline;

    // Accède à la caméra par son nom (par exemple, "Camera")
    const camera = spline.findObjectByName("Camera");

    if (camera) {
      // Ajustez la position ou le zoom de la caméra
      camera.position.z = 400; // Changez la valeur pour ajuster le zoom
      camera.position.y = 200; // Changez la valeur pour ajuster le zoom
    }
  };
  return (
    <Spline
      scene="https://prod.spline.design/mknEBJu3NTzhohrU/scene.splinecode"
      onLoad={onLoad}
      className={styles.chair}
    />
  );
}
