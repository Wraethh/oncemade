import { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Product.module.css";
import chairBig1 from "../../assets/images/chair/chairBig1.jpg";
import chairBig2 from "../../assets/images/chair/chairBig2.jpg";
import chairBig3 from "../../assets/images/chair/chairBig3.jpg";
import chairSm1 from "../../assets/images/chair/chairSm1.png";
import chairSm2 from "../../assets/images/chair/chairSm2.png";
import chairSm3 from "../../assets/images/chair/chairSm3.png";

// Utilisation de forwardRef pour accepter la référence
const Product = forwardRef(({ activeDisplay }, ref) => {
  const chairSelect = [
    { id: "chair1", img: chairSm1, desc: "édition limitée de 50 pièces" },
    { id: "chair2", img: chairSm2, desc: "design élégant et intemporel" },
    { id: "chair3", img: chairSm3, desc: "résine éco-responsable" },
  ];

  return (
    <section ref={ref} id={activeDisplay} className={styles.product}>
      <div className={styles.productDisplay}>
        <div className={styles.productsSmall}>
          {chairSelect.map((chair) => (
            <div
              key={chair.id}
              className={activeDisplay === chair.id ? styles.active : ""}
            >
              <figure>
                <img src={chair.img} alt="chair" />
                <figcaption>{chair.desc}</figcaption>
              </figure>
            </div>
          ))}
        </div>
        <div className={styles.productBig}>
          <h2>
            La chaise <em>Zenith</em>
          </h2>
          <div className={activeDisplay}>
            {activeDisplay === "chair1" && (
              <img src={chairBig1} alt="chair zenith" />
            )}
            {activeDisplay === "chair2" && (
              <img src={chairBig2} alt="chair zenith" />
            )}
            {activeDisplay === "chair3" && (
              <img src={chairBig3} alt="chair zenith" />
            )}
          </div>
          <p>
            Inspirée des tendances extravagantes des années 70, la chaise
            “Zenith” fusionne des éléments de mobilier et d’appareils de cuisine
            dans une structure mi-chaise, mi-sculpture, que personne n’osera
            utiliser.
          </p>
        </div>
      </div>
    </section>
  );
});

Product.propTypes = {
  activeDisplay: PropTypes.string.isRequired,
};

Product.displayName = "Product";
export default Product;
