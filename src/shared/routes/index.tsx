import JobsPage from "@/modules/jobs/pages/jobs-page";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/jobs",
    element: <JobsPage />,
  },
]);
