import { useQuery } from "@tanstack/react-query";
import { getAllJobsService } from "../services/get-all-jobs.service";
import type { JobFilterParams } from "../types/filters.types";

const useGetAllJobs = (params: JobFilterParams) => {
  return useQuery({
    queryKey: ["jobs", params],
    queryFn: async () => getAllJobsService(params),
    select: (res) => res.data.data,
  });
};

export default useGetAllJobs;
