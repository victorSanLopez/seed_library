import axios from "axios";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { UserType } from "../../types/user";
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
      toast.error(
        "Une erreur s'est produite, veuillez réessayer ultérieurement.",
      );
    }
  };

  return (
    <section className={style.popupContainer}>
      <form onSubmit={handleSubmit(sendData)} className={style.form}>
        <h2 className={style.title}>
          Inscrivez-vous pour accéder à votre espace personnel
        </h2>
        <label className={style.formLabel} htmlFor="pseudonyme">
          Pseudonyme
          <input
            type="text"
            {...register("username", {
              required: "Ce champ est obligatoire",
              minLength: {
                value: 2,
                message:
                  "Votre pseudonyme devrait contenir au moins 2 caractères. 😌",
              },
              maxLength: {
                value: 50,
                message:
                  "Votre pseudonyme ne peux pas faire plus de 50 caractères. 😉",
              },
            })}
            className={style.formInput}
          />
          {errors.username && <span>{errors.username.message}</span>}
        </label>
        <label className={style.formLabel} htmlFor="email">
          adresse email
          <input
            type="email"
            {...register("email", { required: "Ce champ est obligatoire" })}
            className={style.formInput}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </label>
        <label className={style.formLabel} htmlFor="password">
          Mot de passe
          <input
            type="password"
            {...register("password", {
              required: "Ce champ est obligatoire",
              minLength: {
                value: 12,
                message: "Le mot de passe doit contenir au moins 12 caratères",
              },
              maxLength: {
                value: 20,
                message: "Le mot de passe doit contenir moins de 20 caractères",
              },
            })}
            className={style.formInput}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </label>
        <label className={style.formLabel} htmlFor="confirmPassword">
          Confirmer le mot de passe
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Ce champ est obligatoire",
              minLength: {
                value: 12,
                message: "Le mot de passe doit contenir au moins 12 caratères",
              },
              maxLength: {
                value: 20,
                message: "Le mot de passe doit contenir moins de 20 caractères",
              },
              validate: (value: string) => {
                if (watch("password") !== value) {
                  return "Le mot de passe saisit est différent";
                }
              },
            })}
            className={style.formInput}
          />
          {errors.confirmPassword && (
            <span>{errors.confirmPassword.message}</span>
          )}
        </label>
        <button type="submit" className={style.submitButton}>
          VALIDER
        </button>
      </form>
    </section>
  );
}
