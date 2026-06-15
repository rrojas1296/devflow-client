import { useEffect, useState } from "react";
import type {
  FilterOption,
  JobChipFilter,
  JobFiltersState,
} from "../types/filters.types";
import { useJobFiltersStore } from "../store/use-job-filters.store";

const useGetChipFiltersJobs = () => {
  const { filters } = useJobFiltersStore();
  const [chips, setChips] = useState<JobChipFilter[]>([]);
  useEffect(() => {
    const entries = Object.entries(filters) as [
      keyof JobFiltersState,
      FilterOption[],
    ][];
    const newChips: JobChipFilter[] = [];
    entries.forEach(([key, values]) => {
      if (key === "search") return;
      for (const v of values) {
        if (v.checked) {
          newChips.push({
            key,
            value: v.value,
          });
        }
      }
    });

    setChips(newChips);
  }, [filters]);
  return chips;
};

export default useGetChipFiltersJobs;
