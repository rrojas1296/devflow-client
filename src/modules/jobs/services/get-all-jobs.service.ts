import type { ApiResponse } from "@/shared/api/api.types";
import { instance } from "@/shared/api/axios";
import { JOBS_ENDPOINTS } from "@/shared/api/endpoints/jobs";
import type { Job } from "../types/jobs.types";
import type { JobFilterParams } from "../types/filters.types";

export const getAllJobsService = (params: JobFilterParams) => {
  return instance.get<ApiResponse<{ jobs: Job[]; count: number }>>(
    JOBS_ENDPOINTS.JOBS.GET_ALL,
    { params },
  );
};
