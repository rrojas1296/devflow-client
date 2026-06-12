import type { TFunction } from "i18next";
import {
  modalityFilterOptions,
  postedDateFilterOptions,
  sourceFilterOptions,
} from "../constants/filters";
import type { JobFilterParams, JobFiltersState } from "../types/filters.types";

export const handleLoadFilters = (params: JobFilterParams, t: TFunction) => {
  const { postedDate, source, modality } = params;

  const filters: JobFiltersState = {
    locations: [],
    postedDate: postedDateFilterOptions.map((o) => ({
      ...o,
      label: t(o.label),
      checked: postedDate?.split(",").includes(o.value) ?? false,
    })),
    technologies: [],
    source: sourceFilterOptions.map((o) => ({
      ...o,
      label: t(o.label),
      checked: source?.split(",").includes(o.value) ?? false,
    })),
    modality: modalityFilterOptions.map((o) => ({
      ...o,
      label: t(o.label),
      checked: modality?.split(",").includes(o.value) ?? false,
    })),
  };
  return filters;
};
