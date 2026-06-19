import { useQuery } from "@tanstack/react-query";
import { getJobsKpisService } from "../services/get-jobs-kpis.service";

const useGetJobsKpis = () => {
  return useQuery({
    queryKey: ["jobs-kpis"],
    queryFn: () => getJobsKpisService(),
    select: (res) => res.data.data,
  });
};

export default useGetJobsKpis;
