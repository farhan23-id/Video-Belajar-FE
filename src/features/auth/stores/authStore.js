import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isLogin: false,

      login: (userData) => set({ user: userData, isLogin: true }),
      logout: () => set({ user: null, isLogin: false }),
      isAdmin: () => get().user?.role === "admin"
    }),
    {
      name: "auth-storage",
    }
  )
);

export default useAuthStore;