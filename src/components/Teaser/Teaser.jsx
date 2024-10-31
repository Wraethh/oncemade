import styles from "./Teaser.module.css";
import teaser from "../../assets/videos/teaser.mp4";

export default function Teaser() {
  return (
    <section id="teaser" className={styles.teaser}>
      <video muted autoPlay loop>
        <source src={teaser} type="video/mp4" />
        <p>
          Votre navigateur ne prend pas en charge les vidéos HTML5. Voici
          <a href={teaser}>un lien pour télécharger la vidéo</a>.
        </p>
      </video>
    </section>
  );
}
