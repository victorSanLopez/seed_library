export const seedValidation = {
  label: {
    required:
      "Donne un nom à ta graine, c'est plus facile pour s'y retrouver ! 🌱",
    minLength: {
      value: 2,
      message: "Un nom trop court ? Essaie au moins 2 caractères. 😉",
    },
    maxLength: {
      value: 50,
      message:
        "Un peu plus concis ? 50 caractères max, c'est déjà pas mal ! 😄",
    },
  },
  description: {
    required: "Ajoute une petite description, même rapide ! 📜",
    minLength: {
      value: 20,
      message: "Raconte-nous un peu plus ! Au moins 20 caractères. ✍️",
    },
    maxLength: {
      value: 300,
      message:
        "C'est une belle histoire, mais essaye de rester sous 300 caractères. 😅",
    },
  },
  image: {
    validate: (value: FileList | string | null | undefined) => {
      if (!value || typeof value === "string") return true;

      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/gif",
        "image/webp",
      ];
      const maxSize = 2 * 1024 * 1024;

      const uploadedFile = value[0];

      if (!uploadedFile) return true;

      if (!allowedTypes.includes(uploadedFile.type)) {
        return "Format non valide. Choisis un fichier JPG, PNG, GIF ou WEBP. 📸";
      }

      if (uploadedFile.size > maxSize) {
        return "Fichier trop volumineux. Max : 2 Mo. 🚀";
      }

      return true;
    },
  },
};
