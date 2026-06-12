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
import { handleLoadFilters } from "../../utils/get-initial-filters";
import { capitalize } from "@/shared/lib/capitalize";

const JobFilters = () => {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const jobFilterParams = Object.fromEntries(searchParams.entries());
  const badgets = Object.keys(jobFilterParams)
    .map((key) => ({
      value: jobFilterParams[key]?.toString().split(",") ?? [],
      key,
    }))
    .flat();

  const filters = handleLoadFilters(jobFilterParams, t);

  const handleSearch = (text: string) => {
    const params = new URLSearchParams(jobFilterParams);
    if (text.length) {
      params.set("search", text);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  };

  const handleDeleteParam = (value: string, key: string) => {
    const params = new URLSearchParams(jobFilterParams);
    const vals = (params.get(key)?.split(",") ?? []).filter((v) => v !== value);

    if (vals.length) {
      params.set(key, vals.join(","));
    } else {
      params.delete(key);
    }
    setSearchParams(params);
  };

  const handleFilter = (key: keyof JobFiltersState, opts: FilterOption[]) => {
    const params = new URLSearchParams(jobFilterParams);
    params.set(
      key,
      opts
        .filter((o) => o.checked)
        .map((o) => o.value)
        .join(","),
    );

    for (const [k, v] of params.entries()) {
      if (!v || v.trim() === "") {
        params.delete(k);
      }
    }

    setSearchParams(params);
  };

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        <Input
          icon={<SearchIcon className="size-5" />}
          className="w-full lg:max-w-3xl"
          placeholder={t("Jobs.filters.searchPlaceholder")}
          onChange={(e) => handleSearch(e.target.value)}
          value={jobFilterParams.search ?? ""}
        />
        <JobFilterButton
          label={t("Jobs.filters.options.location.label")}
          title={t("Jobs.filters.options.location.title")}
          icon={<MapPinIcon className="text-text-1 size-5" />}
          options={filters.locations}
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
      {badgets.length ? (
        <>
          <hr className="flex-1 text-border-2 my-3" />
          <div className="flex flex-wrap gap-3">
            {badgets.map(({ value, key }) => {
              return value.map((val) => (
                <div
                  onClick={() => handleDeleteParam(val, key)}
                  className="text-sm text-text-accent bg-bg-accent rounded-3xl px-3 h-6 flex items-center gap-2"
                >
                  {key === "search" ? val : capitalize(val)}
                  <XIcon className="size-4 cursor-pointer" />
                </div>
              ));
            })}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default JobFilters;
