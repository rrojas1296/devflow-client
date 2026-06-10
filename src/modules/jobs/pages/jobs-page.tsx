import { useTranslation } from "react-i18next";
import useGetAllJobs from "../hooks/use-get-all-jobs";
import { useSearchParams } from "react-router";
import type { JobFilterParams } from "../types/filters.types";
import JobKpiCard from "../components/job-kpi-card";
import {
  BriefcaseIcon,
  Building2Icon,
  ClockIcon,
  EarthIcon,
} from "lucide-react";

const JobsPage = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries()) as JobFilterParams;
  const { data } = useGetAllJobs(params);
  const jobs = data?.data.data.jobs;
  console.log({ jobs });
  return (
    <div>
      <h1 className="text-3xl font-semibold">{t("Jobs.title")}</h1>
      <h2 className="text-sm text-text-2 mt-1">{t("Jobs.subtitle")}</h2>
      <section className="mt-5 grid grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-4">
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
    </div>
  );
};

export default JobsPage;
