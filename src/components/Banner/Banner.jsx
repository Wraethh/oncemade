import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerText}>
        Prenez rendez-vous pour découvrir notre chaise Zenith dans notre galerie
      </div>
    </div>
  );
}
