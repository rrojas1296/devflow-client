export interface JobFilterParams {
  page?: number;
  limit?: number;
  technologies?: string[];
  modality?: string[];
  location?: string[];
  postedDate?: string;
  source?: string;
  search?: string;
}
