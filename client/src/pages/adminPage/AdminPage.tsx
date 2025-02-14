import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/footer/Footer";
import AdminNavHeader from "../../components/navHeader/AdminNavHeader";
import type { AuthStatusType } from "../../types/auth";
import style from "./adminPage.module.css";

export default function AdminPage() {
  const data = useLoaderData() as AuthStatusType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!data.authenticated) {
      navigate("/");
    }
  }, [data, navigate]);

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
