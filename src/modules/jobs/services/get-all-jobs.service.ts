import type { ApiResponse } from "@/shared/api/api.types";
import { instance } from "@/shared/api/axios";
import { JOBS_ENDPOINTS } from "@/shared/api/endpoints/jobs";
import type { Job } from "../types/jobs.types";

interface Params {
  page: number;
  limit: number;
}

export const getAllJobsService = (params: Params) => {
  return instance.get<ApiResponse<{ jobs: Job[]; total: number }>>(
    JOBS_ENDPOINTS.JOBS.GET_ALL,
    { params },
  );
};
