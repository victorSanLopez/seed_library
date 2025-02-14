import type { SeedType } from "../../types/seed";
import style from "./seedCard.module.css";

export default function SeedCard({
  seedDataProps,
}: { seedDataProps: SeedType }) {
  return (
    <article className={style.cardContainer}>
      <h3 className={style.label}>{seedDataProps.label}</h3>
      <p className={style.category}>Catégorie :</p>
      <p className={style.sowing}>Semis :</p>
      <p className={style.harvest}>Récolte :</p>
      <figure
        className={style.image}
        style={{
          backgroundImage: `url(${import.meta.env.VITE_API_URL}/${seedDataProps.image})`,
        }}
      />
      <p className={style.description}>{seedDataProps.description}</p>
    </article>
  );
}
