import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/footer/Footer";
import AdminNavHeader from "../../components/navHeader/AdminNavHeader";
import style from "./adminPage.module.css";

export default function AdminPage() {
  return (
    <div className={style.adminPageContainer}>
      <AdminNavHeader />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
      <ToastContainer />
    </div>
  );
}
