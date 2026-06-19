import { Button } from "../shadcn-ui/button";
import {
  BookmarkIcon,
  BriefcaseIcon,
  Building2Icon,
  HomeIcon,
  LogInIcon,
  MenuIcon,
  MonitorIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../shadcn-ui/dropdown-menu";
import { useTranslation } from "react-i18next";
import { cn } from "@/shared/lib/cn";
import { Link, useLocation } from "react-router";
import type { Theme } from "@/shared/types/theme.types";
import { useTheme } from "@/shared/store/use-theme.store";
import { I18N_LANG_KEY } from "@/shared/i18n/i18n-keys";
import type { JSX } from "react/jsx-runtime";

const options = [
  {
    label: "Header.options.home",
    icon: <HomeIcon className="size-5" />,
    href: "/",
  },
  {
    label: "Header.options.jobs",
    icon: <BriefcaseIcon className="size-5" />,
    href: "/jobs",
  },
  {
    label: "Header.options.companies",
    icon: <Building2Icon className="size-5" />,
    href: "/companies",
  },
  {
    label: "Header.options.saved",
    icon: <BookmarkIcon className="size-5" />,
    href: "/saved",
  },
];

const HeaderApp = () => {
  const { t, i18n } = useTranslation();
  const { setTheme, theme } = useTheme();
  const { pathname } = useLocation();
  const language = i18n.language;

  const handleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    localStorage.setItem(I18N_LANG_KEY, lang);
  };

  const handleTheme = (theme: Theme) => setTheme(theme);
  const icons: Record<Theme, JSX.Element> = {
    dark: <MoonIcon className="size-5" />,
    light: <SunIcon className="size-5" />,
    system: <MonitorIcon className="size-5" />,
  };
  return (
    <header className="sticky top-0 bg-bg-1 z-10 flex items-center justify-center py-5 border-b border-border-2 xl:py-0 xl:h-16">
      <div className="w-11/12 max-w-9xl font-bold text-xl flex justify-between items-center">
        <div className="text-text-1">
          <p>Devflow</p>
        </div>
        <ul className="lg:flex gap-5 hidden">
          {options.map(({ href, label }) => {
            return (
              <Link key={href} to={href}>
                <li
                  className={cn(
                    "text-text-2 text-sm h-9 px-3 rounded-3xl grid place-items-center font-normal",
                    pathname === href && "bg-bg-accent text-text-accent",
                  )}
                >
                  {t(label)}
                </li>
              </Link>
            );
          })}
        </ul>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <MenuIcon className="size-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {options.map(({ href, label, icon: Icon }) => {
              return (
                <Link to={href}>
                  <DropdownMenuItem>
                    {Icon}
                    {t(label)}
                  </DropdownMenuItem>
                </Link>
              );
            })}
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="items-center gap-5 hidden lg:flex">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                {icons[theme!]}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-auto flex flex-col w-36">
              <DropdownMenuItem onClick={() => handleTheme("dark")}>
                <MoonIcon className="size-5" /> {t("Header.themes.dark")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTheme("light")}>
                <SunIcon className="size-5" /> {t("Header.themes.light")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleTheme("system")}>
                <MonitorIcon className="size-5" /> {t("Header.themes.system")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-9">
                {t(`Header.language.${language}`)}
                <img src={`/flags/${language}.png`} className="size-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-fit min-w-auto">
              <DropdownMenuItem onClick={() => handleLanguage("en")}>
                <img src="/flags/en.png" className="size-5" />
                {t("Header.language.en")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguage("es")}>
                <img src="/flags/es.png" className="size-5" />
                {t("Header.language.es")}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleLanguage("pt")}>
                <img src="/flags/pt.png" className="size-5" />
                {t("Header.language.pt")}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link to="/login">
            <Button variant="default">
              {t("Header.login")} <LogInIcon className="size-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderApp;
