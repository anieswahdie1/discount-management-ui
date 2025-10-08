const emailRules = {
  required: "Email wajib diisi!",
  pattern: {
    value: /^\S+@\S+\.\S+$/,
    message: "Format email tidak valid!",
  },
};

export { emailRules };
