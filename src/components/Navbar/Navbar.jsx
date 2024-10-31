import styles from "./Navbar.module.css";
import favicon from "/favicon.svg";

export default function Navbar() {
  const navlinks = [
    { id: "home", display: favicon },
    { id: "designer", display: "Anton Arkadis" },
    { id: "concept", display: "Notre concept" },
    { id: "chair1", display: "Produit" },
    { id: "contact", display: "Contact" },
  ];

  return (
    <nav className={styles.navbar}>
      <ul>
        {navlinks.map((link, i) => {
          return (
            <li key={link.id} className={link.id === "list" ? styles.list : ""}>
              <a href={"#" + link.id}>
                {i === 0 ? (
                  <img src={link.display} alt="favicon" />
                ) : (
                  link.display
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
