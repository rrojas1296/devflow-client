import type { JobFiltersState } from "../types/filters.types";

export const getParamsByFilters = (filters: JobFiltersState) => {
  const params = new URLSearchParams();
  if (filters.search) {
    params.set("search", filters.search);
  }
  if (filters.locations.filter((f) => f.checked).length) {
    params.set(
      "locations",
      filters.locations
        .filter((o) => o.checked)
        .map((o) => o.value)
        .join(","),
    );
  }
  if (filters.postedDate.filter((f) => f.checked).length) {
    params.set(
      "postedDate",
      filters.postedDate
        .filter((o) => o.checked)
        .map((o) => o.value)
        .join(","),
    );
  }
  if (filters.technologies.filter((f) => f.checked).length) {
    params.set(
      "technologies",
      filters.technologies
        .filter((f) => f.checked)
        .map((o) => o.value)
        .join(","),
    );
  }
  if (filters.source.filter((f) => f.checked).length) {
    params.set(
      "source",
      filters.source
        .filter((f) => f.checked)
        .map((o) => o.value)
        .join(","),
    );
  }
  if (filters.modality.filter((f) => f.checked).length) {
    params.set(
      "modality",
      filters.modality
        .filter((f) => f.checked)
        .map((o) => o.value)
        .join(","),
    );
  }

  return params;
};
