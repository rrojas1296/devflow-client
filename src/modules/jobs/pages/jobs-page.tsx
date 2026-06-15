import { useTranslation } from "react-i18next";
import useGetAllJobs from "../hooks/use-get-all-jobs";
import {
  ArrowUpDownIcon,
  BriefcaseIcon,
  Building2Icon,
  ClockIcon,
  EarthIcon,
  SlidersHorizontalIcon,
  XIcon,
} from "lucide-react";
import { Button } from "@/shared/components/shadcn-ui/button";
import JobKpiCard from "../components/job-kpi-card/job-kpi-card";
import { cn } from "@/shared/lib/cn";
import { useState } from "react";
import JobCard from "../components/job-card/job-card";
import Pagination from "@/shared/components/pagination/pagination";
import JobEmpty from "../components/job-empty/job-empty";
import JobFilters from "../components/job-filters/job-filters";
import useGetChipFiltersJobs from "../hooks/use-get-chip-filters-jobs";
import { useJobFiltersStore } from "../store/use-job-filters.store";
import JobLoading from "../components/job-loading/job-loading";
import { getFiltersByParams } from "../lib/get-filters-by-params";

const JobsPage = () => {
  const { t, i18n } = useTranslation();
  const locale = i18n.language;
  const [page, setPage] = useState(1);
  const limit = 12;
  const [orderBy, setOrder] = useState("new");
  const { data, isLoading } = useGetAllJobs({
    orderBy,
    page,
    limit,
  });
  const { setFilters } = useJobFiltersStore();
  const chips = useGetChipFiltersJobs();
  const jobs = data?.jobs ?? [];
  const count = data?.count ?? 0;
  const start = Math.max(1, (page - 1) * limit + 1);
  const end = Math.min(count, start + limit - 1);

  const showClearFilters = chips.length > 0;

  const handleClearFilters = () => {
    const p = new URLSearchParams();
    const params = Object.fromEntries(p.entries());
    const f = getFiltersByParams(params, t, locale);
    setFilters(f);
  };

  const handleOrderBy = (key: string) => setOrder(key);
  return (
    <div className="flex flex-col gap-5">
      <div>
        <h1 className="text-3xl text-text-1 font-semibold">
          {t("Jobs.title")}
        </h1>
        <h2 className="text-sm text-text-2 mt-1">{t("Jobs.subtitle")}</h2>
      </div>
      <section className="grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
        <JobKpiCard
          title={t("Jobs.kpis.total.title")}
          subtitle={t("Jobs.kpis.total.description")}
          icon={<BriefcaseIcon className="text-text-1 size-5" />}
          value={"745"}
        />
        <JobKpiCard
          title={t("Jobs.kpis.added.title")}
          subtitle={t("Jobs.kpis.added.description")}
          icon={<ClockIcon className="text-text-1 size-5" />}
          value="240"
        />
        <JobKpiCard
          title={t("Jobs.kpis.sources.title")}
          subtitle={t("Jobs.kpis.sources.description")}
          icon={<EarthIcon className="text-text-1 size-5" />}
          value="12"
        />
        <JobKpiCard
          title={t("Jobs.kpis.companies.title")}
          subtitle={t("Jobs.kpis.companies.description")}
          icon={<Building2Icon className="text-text-1 size-5" />}
          value="83"
        />
      </section>
      <section className="p-5 rounded-3xl border border-border-2 bg-bg-2 flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <SlidersHorizontalIcon className="text-text-2 size-5" />
            <p className="text-text-2 text-sm">{t("Jobs.filters.title")}</p>
          </div>
          {showClearFilters && (
            <Button
              variant="ghost"
              onClick={handleClearFilters}
              className="text-text-2"
            >
              <XIcon className="size-5" />
              {t("Jobs.filters.clear")}
            </Button>
          )}
        </div>
        <JobFilters />
      </section>
      <div className="flex justify-between flex-col gap-5 lg:flex-row lg:items-center">
        <div className="text-text-2 text-sm">
          <span> {t("Jobs.show.showing")}</span>
          <span className="text-text-1 font-bold">
            {start} -{end}
          </span>
          <span> {t("Jobs.show.of")}</span>
          <span className="text-text-1 font-bold">{count}</span>
          <span> {t("Jobs.show.jobs")}</span>
        </div>
        <div className="rounded-3xl border border-border-2 bg-bg-2 h-9 py-1.5 text-xs text-text-2 flex items-center gap-2 px-3 w-fit">
          <ArrowUpDownIcon className="size-4" />
          {["new", "old", "az"].map((key) => (
            <button
              onClick={() => handleOrderBy(key)}
              className={cn(
                "h-full px-3 rounded-3xl cursor-pointer outline-none",
                orderBy === key && "bg-bg-accent text-text-accent",
              )}
            >
              {t(`Jobs.orderBy.${key}`)}
            </button>
          ))}
        </div>
      </div>
      {isLoading ? (
        <JobLoading />
      ) : jobs.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-5">
          {jobs.map((job, i) => (
            <JobCard key={job.id} job={job} index={i} />
          ))}
        </div>
      ) : (
        <JobEmpty />
      )}
      <div className="flex items-center justify-center">
        <Pagination total={count} limit={limit} page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default JobsPage;
