import { useQuery } from "@tanstack/react-query";
import { getAllJobsService } from "../services/get-all-jobs.service";
import { useJobFiltersStore } from "../store/use-job-filters.store";
import { getParamsByFilters } from "../lib/get-params-by-filters";
import useDebounce from "@/shared/hooks/use-debounce";

interface Props {
  page: number;
  limit: number;
  orderBy: string;
}

const useGetAllJobs = (params: Props) => {
  const { filters } = useJobFiltersStore();
  const filterParams = Object.fromEntries(
    getParamsByFilters(filters).entries(),
  );

  const debouncedSearch = useDebounce(filters.search, 500);
  return useQuery({
    queryKey: ["jobs", { ...params, ...filterParams, search: debouncedSearch }],
    queryFn: async () =>
      getAllJobsService({
        ...params,
        ...filterParams,
        search: debouncedSearch,
      }),
    select: (res) => res.data.data,
  });
};

export default useGetAllJobs;
