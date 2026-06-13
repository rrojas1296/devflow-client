import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./shared/routes/index.tsx";
import ThemeProvider from "./app/providers/theme-provider.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/shared/styles/app.css";
import "@/shared/i18n/i18n.tsx";
import "dayjs/locale/es";
import "dayjs/locale/en";
import "dayjs/locale/pt";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
