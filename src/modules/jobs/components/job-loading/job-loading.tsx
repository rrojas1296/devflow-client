import { LoaderIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

const JobLoading = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-bg-2 h-96 border border-border-2 rounded-3xl grid place-items-center text-text-1">
      <div className="flex flex-col gap-1 items-center text-sm">
        <LoaderIcon className="size-5 animate-spin" />
        <p>{t("Jobs.loading")}</p>
      </div>
    </div>
  );
};

export default JobLoading;
