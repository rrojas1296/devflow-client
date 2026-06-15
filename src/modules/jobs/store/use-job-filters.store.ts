import { create } from "zustand";
import type { JobFiltersState } from "../types/filters.types";

interface JobFiltersStore {
  filters: JobFiltersState;
  setFilters: (filter: JobFiltersState) => void;
}

export const useJobFiltersStore = create<JobFiltersStore>((set) => ({
  filters: {
    locations: [],
    modality: [],
    postedDate: [],
    source: [],
    technologies: [],
    search: "",
  },
  setFilters: (filter: JobFiltersState) => set({ filters: filter }),
}));
