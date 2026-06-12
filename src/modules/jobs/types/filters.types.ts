export interface JobFilterParams {
  page?: number;
  limit?: number;
  technologies?: string;
  modality?: string;
  location?: string;
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
}
