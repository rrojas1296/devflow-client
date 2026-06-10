import { useTranslation } from "react-i18next";
import useGetAllJobs from "../hooks/use-get-all-jobs";

const JobsPage = () => {
  const { t } = useTranslation();
  const { data } = useGetAllJobs({
    params: {
      page: 1,
      limit: 12,
    },
  });
  const jobs = data?.data.data.jobs;
  console.log({ jobs });
  return <div>{t("Jobs.title")}</div>;
};

export default JobsPage;
