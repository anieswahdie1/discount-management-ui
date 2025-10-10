import axiosInstance from "../middleware/instances";

const login = async (data) => {
  const result = {
    success: false,
    data: undefined,
    code: undefined,
  };

  try {
    const res = await axiosInstance.post("/login", data);

    const datas = {
      token: null,
      message: null,
    };

    if (res?.status === 200) {
      datas.token = res?.data?.token;
      datas.message = res?.data?.message;

      result.success = true;
      result.data = datas;
      result.code = res?.status;
    }
  } catch (error) {
    result.success = error?.response?.data?.success;
    result.data = error?.response?.data?.error;
    result.code = error?.status;
  }

  return result;
};

const logout = async () => {
  const result = {
    success: false,
    data: undefined,
    code: undefined,
  };

  try {
    const res = await axiosInstance.get("/auth/logout");
    if (res?.status === 200) {
      result.success = true;
      result.data = res?.data?.message;
      result.code = res?.status;
    }
  } catch (error) {
    result.success = error?.response?.data?.success;
    result.data = error?.response?.data?.message;
    result.code = error?.status;
  }

  return result;
};

const authApi = {
  login,
  logout,
};

export default authApi;
