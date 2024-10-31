import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerText}>
        Prenez rendez-vous pour assister à l’événement de lancement
      </div>
    </div>
  );
}
