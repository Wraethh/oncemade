import styles from "./Home.module.css";
import logo from "../../assets/icons/logo.svg";
import xIcon from "../../assets/icons/xIcon.svg";
import designerLogo from "../../assets/icons/designerLogo.svg";

import Chair from "./Chair";

export default function Home() {
  return (
    <section id="home" className={styles.home}>
      <div className={styles.logos}>
        <img src={logo} alt="logo" />
        <img src={xIcon} alt="x-icon" />
        <img src={designerLogo} alt="designer logo" />
      </div>

      <div className={styles.bgPatt}></div>
      <figure className={styles.summary}>
        <Chair />
        <figcaption className={styles.descTxt}>
          <h2>
            La chaise <em>Zenith</em>
          </h2>
          <p>
            {
              "Un objet audacieux et intemporel, conçu pour les esprits uniques et les intérieurs d'exception."
            }
          </p>
        </figcaption>
      </figure>
    </section>
  );
}
