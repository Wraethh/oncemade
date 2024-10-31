import styles from "./Contact.module.css";
import contactImg from "../../assets/images/contactImg.jpg";

export default function List() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactForm}>
        <div className={styles.contactFormImg}>
          <img src={contactImg} alt="illustration" />
        </div>
        <div className={styles.contactFormAction}>
          <h2>
            Découvrir notre <br /> chaise
          </h2>
          <p>{'Vous souhaitez découvrir la chaise "Zénith" ?'}</p>
          <button>Prendre rendez-vous</button>
        </div>
      </div>
    </section>
  );
}
