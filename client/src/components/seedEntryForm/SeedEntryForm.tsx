import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import type { SeedType } from "../../types/seed";
import { seedValidation } from "../../validations/seedEntryValidations";
import style from "./seedEntryForm.module.css";

export default function SeedEntryForm() {
  const [filePreview, setFilePreview] = useState<string | null>(null);

  type SeedDataType = Omit<SeedType, "id" | "category_id" | "user_id">;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SeedDataType>();

  const sendData: SubmitHandler<SeedDataType> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("label", data.label);
      formData.append("description", data.description);
      if (data.image?.[0]) {
        formData.append("file", data.image[0]);
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/v1/seeds/`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } },
      );
      toast.success(response.data.message);

      setTimeout(() => {
        reset();
      }, 1984);
      // setPreview(null);
    } catch (err) {
      toast.error("Oups, un souci est survenu. On réessaie plus tard ? 🙃");
    }
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (filePreview) {
        URL.revokeObjectURL(filePreview);
      }
      setFilePreview(URL.createObjectURL(file));
    } else {
      setFilePreview(null);
    }
  };

  return (
    <section className={style.formContainer}>
      <form onSubmit={handleSubmit(sendData)} className={style.form}>
        <h2 className={style.title}>
          Complète les informations pour ajouter une nouveauté à ta grainothèque
          🏷️
        </h2>
        <label className={style.formLabel} htmlFor="label">
          Étiquette
          <input
            id="label"
            type="text"
            placeholder="Choisis un nom pour vos graines"
            {...register("label", seedValidation.label)}
            className={style.formInput}
          />
          {errors.label && <span>{errors.label.message}</span>}
        </label>
        <label className={style.formLabel} htmlFor="description">
          Description des graines
          <textarea
            id="description"
            placeholder="Tu peux rédiger une description de la plante dont sont issues ces graines."
            {...register("description", seedValidation.description)}
            className={style.formTextArea}
          />
          {errors.description && <span>{errors.description.message}</span>}
        </label>
        <label className={style.formLabel} htmlFor="image">
          Tu peux ajouter une image
          <input
            id="image"
            type="file"
            accept="image/*"
            {...register("image", seedValidation.image)}
            className={style.imageUploader}
            onChange={handleImageChange}
          />
          {filePreview && (
            <img
              src={filePreview}
              alt="Prévisualisation du fichier sélectionné"
              className={style.imagePreview}
            />
          )}
          {errors.image && <span>{errors.image.message}</span>}
        </label>
        <button type="submit" className={style.submitButton}>
          Valider
        </button>
      </form>
    </section>
  );
}
