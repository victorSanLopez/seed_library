import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { PopupProps } from "../../types/modal";
import type { UserType } from "../../types/user";
import { userValidation } from "../../validations/userRegistrationValidations";
import RegisterPopup from "./RegisterPopup";
import style from "./accessPopups.module.css";

export default function SignInPopup({ closePopup }: PopupProps) {
  const [isRegisterPopup, setRegisterPopup] = useState(false);
  const handleCloseRegister = () => {
    setRegisterPopup(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserType>();

  const submitLogin: SubmitHandler<UserType> = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/auth/login`,
        data,
        { withCredentials: true },
      );
      toast.success(response.data.message);

      setTimeout(() => {
        navigate("/ma-grainotheque");
      }, 1984);
    } catch (err) {
      toast.error("Utilisateur ou mot de passe inconnu.");
    }
  };

  const navigate = useNavigate();

  return (
    <div className={style.overlay}>
      <section className={`${style.popupContainer} ${style.signInContainer}`}>
        <form onSubmit={handleSubmit(submitLogin)} className={style.form}>
          <h2 className={style.title}>
            Connecte-toi et accède à ton espace 🌼
          </h2>
          <label className={style.formLabel} htmlFor="email">
            adresse e-mail
            <input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email", userValidation.email)}
              className={style.formInput}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </label>
          <label className={style.formLabel} htmlFor="password">
            Mot de passe
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              {...register("password", userValidation.password)}
              className={style.formInput}
            />
            {errors.password && <span>{errors.password.message}</span>}
          </label>
          <button type="submit" className={style.submitButton}>
            Se Connecter
          </button>
          <p className={style.text}>Pas encore de compte ?</p>
          <button
            type="button"
            className={style.registerButton}
            onClick={() => setRegisterPopup(true)}
          >
            Crée-toi un compte 🌱
          </button>
        </form>
        <button
          type="button"
          className={style.closeButton}
          onClick={closePopup}
        >
          Fermer la pop-up
        </button>
        {isRegisterPopup && <RegisterPopup closePopup={handleCloseRegister} />}
      </section>
    </div>
  );
}
