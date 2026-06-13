import { I18N_LANG_KEY } from "@/shared/i18n/i18n-keys";
import type { FilterOption } from "../types/filters.types";
import { jobCountries } from "./countries";
import { jobTechnologies } from "./technologies";

export const postedDateFilterOptions: FilterOption[] = [
  {
    label: "Jobs.filters.options.postedDate.options.month",
    value: "month",
    checked: false,
  },

  {
    label: "Jobs.filters.options.postedDate.options.week",
    value: "week",
    checked: false,
  },
  {
    label: "Jobs.filters.options.postedDate.options.day",
    value: "day",
    checked: false,
  },
];

export const sourceFilterOptions: FilterOption[] = [
  {
    label: "Jobs.filters.options.source.options.linkedin",
    value: "linkedin",
    checked: false,
  },
  {
    label: "Jobs.filters.options.source.options.indeed",
    value: "indeed",
    checked: false,
  },
  {
    label: "Jobs.filters.options.source.options.computrabajo",
    value: "computrabajo",
    checked: false,
  },
  {
    label: "Jobs.filters.options.source.options.getonboard",
    value: "getonboard",
    checked: false,
  },
];

export const technologyFilterOptions: FilterOption[] = jobTechnologies.map(
  (j) => ({ ...j, checked: false }),
);

export const locationFilterOptions: FilterOption[] = jobCountries.map((c) => {
  const locale = localStorage.getItem(I18N_LANG_KEY) || "en";
  return {
    label: c.label[locale],
    value: c.value,
    checked: false,
  };
});

export const modalityFilterOptions: FilterOption[] = [
  {
    label: "Jobs.filters.options.modality.options.remote",
    value: "remote",
    checked: false,
  },
  {
    label: "Jobs.filters.options.modality.options.onsite",
    value: "onsite",
    checked: false,
  },
  {
    label: "Jobs.filters.options.modality.options.hybrid",
    value: "hybrid",
    checked: false,
  },
];
