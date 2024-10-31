import styles from "./Designer.module.css";
import designerLogo from "../../assets/icons/designerLogo.svg";
import designerPic from "../../assets/images/designerPic.jpg";

export default function Designer() {
  return (
    <section id="designer" className={styles.designer}>
      <div className={styles.designerLogo}>
        <img src={designerLogo} alt="designer logo" />
      </div>
      <div className={styles.designerPic}>
        <img src={designerPic} alt="designer picture" />
      </div>

      <div className={styles.designerDesc}>
        <h2>Provocation et minimalisme</h2>
        <p>
          {
            "Anton Arkadis considère que le design contemporain est une « arnaque glorifiée » et une « extension vide de la vanité humaine ». Son credo est simple : « Si un objet vous fait réfléchir à sa propre existence, alors il est utile. Sinon, il n’est qu’une imposture. » Il s'intéresse particulièrement aux objets de la vie quotidienne qu’il détourne pour questionner leur fonction initiale."
          }
        </p>
        <p>
          {
            "Anton Arkadis est un designer russo-américain né à Moscou en 1988 et ayant grandi entre New York et Berlin. Son parcours éclectique l'a mené des bancs des Beaux-Arts de Berlin aux ateliers d'art industriel de New York. Connu pour ses créations qui interrogent la notion même de valeur et d'utilité, Arkadis est devenu une figure incontournable de l’art conceptuel des années 2020. Ses œuvres allient provocation, esthétique brute et minimalisme exagéré."
          }
        </p>
      </div>
    </section>
  );
}
