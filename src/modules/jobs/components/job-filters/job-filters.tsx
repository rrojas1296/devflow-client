import { useTranslation } from "react-i18next";
import JobFilterButton from "../job-filter-button/job-filter-button";
import {
  BriefcaseIcon,
  CalendarIcon,
  EarthIcon,
  MapPinIcon,
  SearchIcon,
  SquareStackIcon,
  XIcon,
} from "lucide-react";
import Input from "@/shared/components/input/input";
import type { FilterOption, JobFiltersState } from "../../types/filters.types";
import { useSearchParams } from "react-router";
import { capitalize } from "@/shared/lib/capitalize";
import { ignoredParams } from "../../constants/ignoredParams";
import { useEffect } from "react";
import { getFiltersByParams } from "../../lib/get-filters-by-params";
import { getParamsByFilters } from "../../lib/get-params-by-filters";
import { useJobFiltersStore } from "../../store/use-job-filters.store";
import useGetChipFiltersJobs from "../../hooks/use-get-chip-filters-jobs";

const JobFilters = () => {
  const { t } = useTranslation();
  const { filters, setFilters } = useJobFiltersStore();
  const [searchParams, setSearchParams] = useSearchParams();
  const showFilters = Array.from(searchParams.entries()).some(
    ([key, value]) => !ignoredParams.includes(key) && value,
  );
  const chips = useGetChipFiltersJobs();

  const handleSearch = (text: string) => {
    setFilters({
      ...filters,
      search: text,
    });
  };

  const handleDeleteParam = (value: string, key: keyof JobFiltersState) => {
    const values = (filters[key] as FilterOption[]).map((f) => ({
      ...f,
      checked: f.value === value ? false : f.checked,
    }));
    setFilters({
      ...filters,
      [key]: values,
    });
  };

  const handleFilter = (key: keyof JobFiltersState, opts: FilterOption[]) => {
    setFilters({
      ...filters,
      [key]: opts,
    });
  };

  useEffect(() => {
    const params = getParamsByFilters(filters);
    setSearchParams(params);
  }, [filters]);

  useEffect(() => {
    const params = Object.fromEntries(searchParams.entries());
    const f = getFiltersByParams(params, t);
    setFilters(f);
  }, []);

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <Input
          icon={<SearchIcon className="size-5" />}
          className="w-full lg:max-w-3xl"
          placeholder={t("Jobs.filters.searchPlaceholder")}
          onChange={(e) => handleSearch(e.target.value)}
          value={filters.search ?? ""}
        />
        <JobFilterButton
          label={t("Jobs.filters.options.location.label")}
          title={t("Jobs.filters.options.location.title")}
          icon={<MapPinIcon className="text-text-1 size-5" />}
          options={filters.locations}
          cols="2"
          setOptions={(opts) => handleFilter("locations", opts)}
        />
        <JobFilterButton
          label={t("Jobs.filters.options.postedDate.label")}
          title={t("Jobs.filters.options.postedDate.title")}
          icon={<CalendarIcon className="text-text-1 size-5" />}
          options={filters.postedDate}
          many={false}
          setOptions={(opts) => handleFilter("postedDate", opts)}
        />
        <JobFilterButton
          label={t("Jobs.filters.options.technologies.label")}
          title={t("Jobs.filters.options.technologies.title")}
          icon={<SquareStackIcon className="text-text-1 size-5" />}
          options={filters.technologies}
          cols="2"
          setOptions={(opts) => handleFilter("technologies", opts)}
        />
        <JobFilterButton
          label={t("Jobs.filters.options.source.label")}
          title={t("Jobs.filters.options.source.title")}
          icon={<EarthIcon className="text-text-1 size-5" />}
          options={filters.source}
          setOptions={(opts) => handleFilter("source", opts)}
        />
        <JobFilterButton
          label={t("Jobs.filters.options.modality.label")}
          title={t("Jobs.filters.options.modality.title")}
          icon={<BriefcaseIcon className="text-text-1 size-5" />}
          options={filters.modality}
          setOptions={(opts) => handleFilter("modality", opts)}
        />
      </div>
      {chips.length > 0 ? (
        <>
          <hr className="flex-1 text-border-2 my-3" />
          <div className="flex flex-wrap gap-3">
            {chips.map(({ value, key }) => {
              if (ignoredParams.includes(key)) return null;
              return (
                <div className="text-sm text-text-accent bg-bg-accent rounded-3xl px-3 h-6 flex items-center gap-2">
                  {capitalize(value)}
                  <XIcon
                    onClick={() =>
                      handleDeleteParam(value, key as keyof JobFiltersState)
                    }
                    className="size-4 cursor-pointer"
                  />
                </div>
              );
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default JobFilters;
