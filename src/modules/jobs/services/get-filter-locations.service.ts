import type { ApiResponse } from "@/shared/api/api.types";
import { instance } from "@/shared/api/axios";
import { JOBS_ENDPOINTS } from "@/shared/api/endpoints/jobs";

export const getFilterLocationsService = () => {
  return instance.get<ApiResponse<string[]>>(JOBS_ENDPOINTS.JOBS.GET_LOCATIONS);
};
