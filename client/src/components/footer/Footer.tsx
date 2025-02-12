import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.footerContainer}>
      <img
        className={style.footerLogo}
        src="/images/logo_v1.png"
        alt="Logo du site représentant trois feuilles"
      />
      <p className={style.text}>
        Ce site a été développé dans un temps limité dans le cadre de ma
        formation à la Wild Code School. Il a pour but de faciliter
        l'organisation des graines pour les passionnés de jardinage. Ce projet
        est en évolution ! Toute suggestion ou retour est le bienvenu.
      </p>
    </footer>
  );
}
