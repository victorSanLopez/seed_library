import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import style from "./logButton.module.css";

export default function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/auth/logout`, {
        withCredentials: true,
      });

      navigate("/");
    } catch (err) {
      toast.error("Impossible de se déconnecter 🤯");
    }
  };

  return (
    <button className={style.logoutButton} type="button" onClick={handleLogout}>
      Se déconnecter
    </button>
  );
}
