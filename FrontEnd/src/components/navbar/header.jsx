import { BtnNav } from "../btn-nav/btn-nav";
import styles from "./header.module.css";

export function Header() {
  return (
    <header id="home">
      <nav className={styles.navbar}>
        <ul className={styles.ulNav}>
          <BtnNav link="/" name="Inicio" />
          <BtnNav link="/characters" name="Personajes" />
          <BtnNav link="/materials" name="Novedades" />
        </ul>
      </nav>
    </header>
  );
}
