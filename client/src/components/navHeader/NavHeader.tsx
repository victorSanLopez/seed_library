import { Link } from "react-router-dom";
import style from "./navHeader.module.css";

export default function NavHeader() {
  return (
    <header className={style.headerContainer}>
      <h1 className={style.headerTitle}>Mon Grainetier virtuel</h1>
      <nav className={style.navbar}>
        <Link className={style.link} to="/ma-grainotheque">
          Grainothèque
        </Link>
        <Link className={style.link} to="/ajouter-mes-graines">
          Ajouter des graines
        </Link>
        <Link className={style.link} to="/mon-calendrier">
          Calendrier
        </Link>
      </nav>
    </header>
  );
}
