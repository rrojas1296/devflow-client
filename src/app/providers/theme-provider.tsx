import { THEME_KEY } from "@/shared/constants/theme.constants";
import { useTheme } from "@/shared/store/use-theme.store";
import type { Theme } from "@/shared/types/theme.types";
import { useEffect, type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const ThemeProvider = ({ children }: Props) => {
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    const localTheme = localStorage.getItem(THEME_KEY) as Theme;
    if (!localTheme) {
      setTheme("system");
    } else {
      setTheme(localTheme);
    }
  }, []);
  if (!theme) return null;
  return children;
};

export default ThemeProvider;
