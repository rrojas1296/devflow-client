import { create } from "zustand";
import type { JobFiltersState } from "../types/filters.types";

interface JobFiltersStore {
  filters: JobFiltersState;
  setFilters: (filter: JobFiltersState) => void;
}
export const jobFiltersInitialState = {
  locations: [],
  modality: [],
  postedDate: [],
  source: [],
  technologies: [],
  search: "",
};

export const useJobFiltersStore = create<JobFiltersStore>((set) => ({
  filters: jobFiltersInitialState,
  setFilters: (filter: JobFiltersState) => set({ filters: filter }),
}));
