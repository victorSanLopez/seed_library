import { Link } from "react-router-dom";
import LogoutButton from "../logButton/LogoutButton";
import style from "./navHeader.module.css";

export default function UserNavHeader() {
  return (
    <header className={style.headerContainer}>
      <LogoutButton />
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
