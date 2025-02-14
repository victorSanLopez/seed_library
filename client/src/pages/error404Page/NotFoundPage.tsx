import { Link } from "react-router-dom";
import notFoundPage from "../../assets/texts/notFoundPage.json";
import style from "./notFound.module.css";

export default function NotFoundPage() {
  return (
    <div className={style.container}>
      <article className={style.content}>
        <h1 className={style.title}>Oups !</h1>
        <p className={style.message}>Cette graine n'a pas encore germé... 🌱</p>
        <p className={style.message}>{notFoundPage.description}</p>
        <Link to="/" className={style.homeButton}>
          Retour à l'accueil
        </Link>
      </article>
    </div>
  );
}
