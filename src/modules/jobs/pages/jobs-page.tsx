import { useTranslation } from "react-i18next";

const JobsPage = () => {
  const { t } = useTranslation();
  return <div>{t("Jobs.title")}</div>;
};

export default JobsPage;
