export interface JobFilterParams {
  page?: string;
  limit?: string;
  technologies?: string;
  modality?: string;
  locations?: string;
  postedDate?: string;
  source?: string;
  search?: string;
  orderBy?: string;
}

export interface FilterOption {
  label: string;
  checked: boolean;
  value: string;
}

export interface JobFiltersState {
  locations: FilterOption[];
  postedDate: FilterOption[];
  technologies: FilterOption[];
  source: FilterOption[];
  modality: FilterOption[];
  search: string;
}

export interface JobChipFilter {
  value: string;
  key: string;
}
