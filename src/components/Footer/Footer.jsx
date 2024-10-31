import styles from "./Footer.module.css";
import logoLight from "../../assets/icons/logoLight.svg";
import mailIcon from "../../assets/icons/mailIcon.svg";
import instaIcon from "../../assets/icons/instaIcon.svg";
import twitterIcon from "../../assets/icons/twitterIcon.svg";
import chairFooterRight from "../../assets/images/chair/chairFooterRight.png";
import chairFooterMain from "../../assets/images/chair/chairFooterMain.png";
import chairFooterLeft from "../../assets/images/chair/chairFooterLeft.png";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerLogo}>
        <div>
          <img src={logoLight} alt="logo" />
          <p>Plus rare que nécessaire.</p>
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
