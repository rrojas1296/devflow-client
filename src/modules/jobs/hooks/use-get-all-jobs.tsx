import { useQuery } from "@tanstack/react-query";
import { getAllJobsService } from "../services/get-all-jobs.service";
import type { JobFilterParams } from "../types/filters.types";

interface Props {
  params: JobFilterParams;
}

const useGetAllJobs = ({ params }: Props) => {
  return useQuery({
    queryKey: ["jobs"],
    queryFn: async () => getAllJobsService(params),
  });
};

export default useGetAllJobs;
