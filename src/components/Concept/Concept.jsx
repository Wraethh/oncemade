import { useState } from "react";
import styles from "./Concept.module.css";
import faviconLight from "/faviconLight.svg";

export default function Concept() {
  const [content, setContent] = useState("collab");

  const contentValues = [
    {
      id: "collab",
      color: "#191919",
      title: "La collaboration",
    },
    {
      id: "object",
      color: "#E95212",
      title: "L'objet",
    },
    {
      id: "convictions",
      color: "#A5BCF5",
      title: "Nos convictions",
    },
  ];

  const currentContent =
    contentValues[contentValues.findIndex((el) => el.id === content)];

  const handleClick = (e) => {
    setContent(e.currentTarget.value);
  };

  return (
    <section id="concept" className={styles.concept}>
      <div>
        <div
          className={styles.conceptDesc}
          style={{
            backgroundColor: currentContent.color,
          }}
        >
          <h2
            style={
              currentContent.id === "convictions"
                ? { color: "var(--dark-color)" }
                : {}
            }
          >
            {currentContent.title}
          </h2>
          {currentContent.id === "collab" && (
            <p>
              La décision de collaborer avec <b>Anton Arkadis</b> s’est imposée
              comme une évidence pour l’ensemble de l’équipe de <b>Oncemade</b>.
              Dès le début, il était clair que cette association serait
              fructueuse. Au fil du processus, cette collaboration s’est
              transformée en une expérience grandiose, qui a non seulement
              enrichi notre travail, mais a également dépassé de manière
              significative toutes nos espérances et anticipations. Nous avons
              été agréablement surpris par les résultats obtenus et l’impact
              positif qu’elle a eu sur notre projet.
            </p>
          )}
          {currentContent.id === "object" && (
            <p>
              Il s’intéresse particulièrement aux{" "}
              <b>objets de la vie quotidienne</b> qu’il détourne pour
              questionner leur <b>fonction initiale</b>, ce fût donc avec grand
              enthousiasme qu’il a souhaité travailler sur notre concept d’objet
              chimère. Une façon complexe et brillante de s’intéresser à nos
              habitudes quotidiennes, aux objets qui nous entourent, en d’en
              créer enfin une réelle pièce contemporaine.
            </p>
          )}
          {currentContent.id === "convictions" && (
            <>
              <div className={styles.quotes}>
                <h3>Une phrase qui décrirait son oeuvre ?</h3>
                <blockquote>
                  « Si un objet vous fait réfléchir à sa propre existence, alors
                  il est utile. Sinon, il n’est qu’une imposture. »
                </blockquote>
              </div>
              <div className={styles.quotes}>
                <h3>Une phrase qui décrirait la notre ?</h3>
                <blockquote>
                  « C’est ce que l’on s’achète lorsqu’on a déjà tout. »
                </blockquote>
              </div>
            </>
          )}
        </div>
        <div className={styles.conceptBtn}>
          {contentValues.map((val) => {
            return (
              <button
                key={val.id}
                value={val.id}
                onClick={(e) => handleClick(e)}
              >
                <img
                  src={faviconLight}
                  alt="favicon"
                  className={currentContent.id === val.id && styles.rotate90}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
