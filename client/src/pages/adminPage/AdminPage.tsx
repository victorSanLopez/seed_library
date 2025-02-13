import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/footer/Footer";
import style from "./adminPage.module.css";

export default function AdminPage() {
  return (
    <div className={style.adminPageContainer}>
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}
