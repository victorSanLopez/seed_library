import { Link } from "react-router-dom";
import style from "./navHeader.module.css";

export default function AdminNavHeader() {
  return (
    <header className={style.headerContainer}>
      <h1 className={style.headerTitle}>Mon Grainetier virtuel</h1>
      <h2 className={style.subTitle}>🌿 Tableau de bord Administrateur 🌱</h2>
      <nav className={style.navbar}>
        <Link className={style.link} to="/admin/liste-utilisateurs">
          Gérer les utilisateurs
        </Link>
        <Link className={style.link} to="/admin/modifier-categories">
          Modifier les catégories
        </Link>
        <Link className={style.link} to="/admin/creer-evenement">
          Créer un événement
        </Link>
      </nav>
    </header>
  );
}
