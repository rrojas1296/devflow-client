import type { ApiResponse } from "@/shared/api/api.types";
import { instance } from "@/shared/api/axios";
import { JOBS_ENDPOINTS } from "@/shared/api/endpoints/jobs";

export const getJobsKpisService = () => {
  return instance.get<ApiResponse<Record<string, string>>>(
    JOBS_ENDPOINTS.JOBS.JOBS_KPIS,
  );
};
