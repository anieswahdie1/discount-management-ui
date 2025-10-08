const emailRules = {
  required: "Email wajib diisi!",
  pattern: {
    value: /^\S+@\S+\.\S+$/,
    message: "Format email tidak valid!",
  },
};

const passwordRules = {
  required: "Password wajib diisi!",
};

export { emailRules, passwordRules };
