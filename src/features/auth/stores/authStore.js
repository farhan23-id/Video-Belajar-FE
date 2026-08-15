import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isLogin: false,

      login: (userData) => set({ user: userData, isLogin: true }),
      logout: () => set({ user: null, isLogin: false }),
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;