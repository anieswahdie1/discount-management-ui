import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuth = create(
  persist(
    (set) => ({
      isAuthorized: false,
      accessToken: null,
      email: null,
      setAuthorizeTrue: (state) => {
        set({
          isAuthorized: true,
          accessToken: state.token,
          email: state.email,
        });
      },
      setLogout: () => {
        set({
          isAuthorized: false,
          accessToken: null,
          email: null,
        });
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuth;
