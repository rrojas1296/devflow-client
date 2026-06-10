import { create } from "zustand";
import type { Theme, ThemeStore } from "../types/theme.types";
import { THEME_KEY } from "../constants/theme.constants";

export const useTheme = create<ThemeStore>((set) => ({
  setTheme: (theme: Theme) => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
    localStorage.setItem(THEME_KEY, theme);
    set({ theme });
  },
}));
