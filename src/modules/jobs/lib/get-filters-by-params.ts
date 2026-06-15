import type { TFunction } from "i18next";
import {
  locationFilterOptions,
  modalityFilterOptions,
  postedDateFilterOptions,
  sourceFilterOptions,
  technologyFilterOptions,
} from "../constants/filters";
import type { JobFiltersState } from "../types/filters.types";

export const getFiltersByParams = (
  params: {
    [key: string]: string;
  },
  t: TFunction,
): JobFiltersState => {
  return {
    locations: locationFilterOptions.map((o) => ({
      ...o,
      label: t(o.label),
      checked: params.locations?.includes(o.value) ?? false,
    })),
    postedDate: postedDateFilterOptions.map((o) => ({
      ...o,
      label: t(o.label),
      checked: params.postedDate?.includes(o.value) ?? false,
    })),
    technologies: technologyFilterOptions.map((o) => ({
      ...o,
      label: t(o.label),
      checked: params.technologies?.includes(o.value) ?? false,
    })),
    source: sourceFilterOptions.map((o) => ({
      ...o,
      label: t(o.label),
      checked: params.source?.includes(o.value) ?? false,
    })),
    modality: modalityFilterOptions.map((o) => ({
      ...o,
      label: t(o.label),
      checked: params.modality?.includes(o.value) ?? false,
    })),
    search: params.search ?? "",
  };
};
