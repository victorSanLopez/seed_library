import { ToastContainer } from "react-toastify";
import landingPage from "../../assets/texts/landingPage.json";
import Footer from "../../components/footer/Footer";
import LandingNavHeader from "../../components/navHeader/LandingNavHeader";
import style from "./landingLayout.module.css";

export default function LandingLayout() {
  return (
    <>
      <LandingNavHeader />
      <main className={style.landingMain}>
        <p className={style.description}>{landingPage.description}</p>
        <figure className={style.illustration} />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}
