import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import SeedCard from "../../components/cards/SeedCard";
import type { SeedType } from "../../types/seed";
import style from "./seedLibraryPage.module.css";

export default function SeedLibraryPage() {
  const [seedData, setSeedData] = useState<SeedType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/v1/seeds/library`,
        );
        setSeedData(response.data);
      } catch (err) {
        toast.error("Impossible de charger les données.");
      }
    };

    fetchData();
  }, []);

  return (
    <main className={style.mainContainer}>
      <h2 className={style.libraryTitle}>Ma grainothèque</h2>
      <section className={style.libraryContainer}>
        {seedData?.map((userSeedData: SeedType) => (
          <SeedCard key={userSeedData.id} seedDataProps={userSeedData} />
        ))}
      </section>
    </main>
  );
}
