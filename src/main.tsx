import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./shared/routes/index.tsx";
import ThemeProvider from "./core/providers/theme-provider.tsx";
import "@/shared/styles/app.css";
import "@/shared/i18n/i18n.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
