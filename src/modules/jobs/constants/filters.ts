import type { FilterOption } from "../types/filters.types";

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
