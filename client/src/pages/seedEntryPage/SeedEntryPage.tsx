import SeedEntryForm from "../../components/seedEntryForm/SeedEntryForm";
import style from "./seedEntryPage.module.css";

export default function SeedEntryPage() {
  return (
    <main className={style.mainContainer}>
      <SeedEntryForm />
    </main>
  );
}
