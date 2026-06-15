import {
  modalityFilterOptions,
  postedDateFilterOptions,
  sourceFilterOptions,
  technologyFilterOptions,
} from "../constants/filters";
import type { JobFiltersState } from "../types/filters.types";
import { useTranslation } from "react-i18next";
import { jobCountries } from "../constants/countries";

const useLoadFilters = (params: { [k: string]: string }) => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;

  const {
    locations = "",
    postedDate = "",
    source = "",
    modality = "",
    technologies = "",
  } = params;
  const isChecked = (value: string, param?: string) =>
    param?.split(",").includes(value) ?? false;
  return {
    locations: jobCountries.map((o) => ({
      label: o.label[locale],
      value: o.value,
      checked: isChecked(o.value, locations),
    })),
    postedDate: postedDateFilterOptions.map((o) => ({
      ...o,
      label: t(o.label),
      checked: isChecked(o.value, postedDate),
    })),
    technologies: technologyFilterOptions.map((o) => ({
      ...o,
      checked: isChecked(o.value, technologies),
    })),
    source: sourceFilterOptions.map((o) => ({
      ...o,
      label: t(o.label),
      checked: isChecked(o.value, source),
    })),
    modality: modalityFilterOptions.map((o) => ({
      ...o,
      label: t(o.label),
      checked: isChecked(o.value, modality),
    })),
  } as JobFiltersState;
};

export default useLoadFilters;
