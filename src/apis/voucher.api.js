import axiosInstance from "../middleware/instances";

const getListVoucher = async () => {
  const result = {
    success: false,
    data: undefined,
    code: undefined,
  };

  try {
    const res = await axiosInstance.get("/vouchers");
    if (res?.status === 200) {
      result.success = true;
      result.data = res?.data?.data;
      result.code = res?.status;
    }
  } catch (error) {
    result.success = error?.response?.data?.success;
    result.data = error?.response?.data?.error;
    result.code = error?.status;
  }

  return result;
};

const addNewVoucher = async (payload) => {
  const result = {
    success: false,
    data: undefined,
    code: undefined,
  };

  try {
    const res = await axiosInstance.post("/vouchers", payload);

    if (res?.status === 201 || res?.status === 200) {
      result.success = true;
      result.data = res?.data?.data;
      result.code = res?.status;
    }
  } catch (error) {
    result.success = error?.response?.data?.success;
    result.data = error?.response?.data?.error;
    result.code = error?.status;
  }

  return result;
};

const deleteVoucher = async (id) => {
  const result = {
    success: false,
    data: undefined,
    code: undefined,
  };

  try {
    const res = await axiosInstance.delete("/vouchers/" + id);
    console.log("res: ", res);
    if (res?.status === 200) {
      result.success = true;
      result.data = res?.data?.message;
      result.code = res?.status;
    }
  } catch (error) {
    result.success = error?.response?.data?.success;
    result.data = error?.response?.data?.error;
    result.code = error?.status;
  }

  return result;
};

const editVoucher = async (id, payload) => {
  const result = {
    success: false,
    data: undefined,
    code: undefined,
  };

  try {
    const res = await axiosInstance.put("/vouchers/" + id, payload);

    if (res?.status === 201 || res?.status === 200) {
      result.success = true;
      result.data = res?.data?.data;
      result.code = res?.status;
    }
  } catch (error) {
    result.success = error?.response?.data?.success;
    result.data = error?.response?.data?.error;
    result.code = error?.status;
  }

  return result;
};

const voucherApi = {
  getListVoucher,
  addNewVoucher,
  deleteVoucher,
  editVoucher,
};

export default voucherApi;
