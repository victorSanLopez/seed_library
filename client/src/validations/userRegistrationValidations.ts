export const userValidation = {
  username: {
    required: "Un pseudo, c'est plus sympa pour te reconnaître ! 😊",
    minLength: {
      value: 2,
      message: "Allez, au moins 2 caractères pour ton pseudo !",
    },
    maxLength: {
      value: 50,
      message: "Ton pseudo est un peu long (max 50 caractères) ! 😅",
    },
  },
  email: {
    required: "L'email est nécessaire pour t'identifier' ! 📩",
  },
  password: {
    required: "Un mot de passe sécurisé, c'est important ! 🔒",
    minLength: {
      value: 12,
      message: "Minimum 12 caractères pour sécuriser ton compte ! 💪",
    },
    maxLength: {
      value: 150,
      message: "150 caractères max, pas besoin d'en faire trop ! 😉",
    },
  },
  confirmPassword: (watch: (field: string) => string) => ({
    required: "Confirme ton mot de passe pour éviter les erreurs ! ✅",
    minLength: {
      value: 12,
      message: "Minimum 12 caractères, comme l'original !",
    },
    maxLength: {
      value: 150,
      message: "Pas plus de 150 caractères, comme l'original !",
    },
    validate: (value: string) =>
      watch("password") !== value
        ? "Oups ! Les mots de passe ne correspondent pas. 🤔"
        : undefined,
  }),
};
