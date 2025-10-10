const voucherCodeRules = {
  required: "Voucher Code wajib diisi!",
};

const discRules = {
  required: "Discount Percent wajib diisi!",
  validate: {
    isNumber: (value) => !isNaN(value) || "Discount harus berupa angka!",
    minValue: (value) => Number(value) >= 1 || "Discount minimal 1%",
    maxValue: (value) => Number(value) <= 100 || "Discount maksimal 100%",
  },
};

const expiryDateRules = {
  required: "Expiry Date wajib diisi!",
};

export { voucherCodeRules, discRules, expiryDateRules };
