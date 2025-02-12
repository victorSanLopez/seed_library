import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { UserType } from "../../types/user";
import { userValidation } from "../../validations/userRegistrationValidations";
import style from "./userRegistrationForm.module.css";

export default function userRegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<UserType>();

  const sendData: SubmitHandler<UserType> = async (data) => {
    const { confirmPassword, ...rest } = data;
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/users/`,
        rest,
      );
      toast.success(response.data.message);
    } catch (err) {
      toast.error("Oups, un souci est survenu. On réessaie plus tard ? 🙃");
    }
  };

  return (
    <section className={style.popupContainer}>
      <form onSubmit={handleSubmit(sendData)} className={style.form}>
        <h2 className={style.title}>
          Rejoins-nous et personnalise ton espace 🌱
        </h2>
        <label className={style.formLabel} htmlFor="username">
          Pseudo
          <input
            id="username"
            type="text"
            {...register("username", userValidation.username)}
            className={style.formInput}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </label>
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
            autoComplete="new-password"
            {...register("password", userValidation.password)}
            className={style.formInput}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        <label className={style.formLabel} htmlFor="confirmPassword">
          Confirmation du mot de passe
          <input
            id="confirmPassword"
            type="password"
            {...register(
              "confirmPassword",
              userValidation.confirmPassword(watch),
            )}
            className={style.formInput}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </label>
        <button type="submit" className={style.submitButton}>
          Valider
        </button>
      </form>
    </section>
  );
}
