import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { UserType } from "../../types/user";
import { userValidation } from "../../validations/userRegistrationValidations";
import style from "./accessPopups.module.css";

export default function SignInPopup() {
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
    } catch (err) {
      toast.error("Erreur inattendue, veuillez réessayer.");
    }
  };

  return (
    <section className={style.popupContainer}>
      <form onSubmit={handleSubmit(submitLogin)} className={style.form}>
        <h2 className={style.title}>Connecte-toi et accède à ton espace 🌱</h2>
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
        <p className={style.link}>Crée-toi un compte</p>
      </form>
    </section>
  );
}
