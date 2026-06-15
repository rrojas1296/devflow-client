import { Button } from "@/shared/components/shadcn-ui/button";
import { SlidersHorizontal, SparklesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useJobFiltersStore } from "../../store/use-job-filters.store";

const JobEmpty = () => {
  const { t } = useTranslation();
  const { setFilters } = useJobFiltersStore();
  const clearFilters = () => {
    setFilters({
      locations: [],
      modality: [],
      postedDate: [],
      search: "",
      source: [],
      technologies: [],
    });
  };
  return (
    <div className="bg-bg-2 h-96 border border-border-2 rounded-3xl grid place-items-center ">
      <div className="flex flex-col gap-3">
        <div className="size-9 grid place-items-center self-center text-text-1 rounded-full border border-border-1">
          <SparklesIcon className="size-5" />
        </div>
        <div className="text-center">
          <p className="font-bold text-xl text-text-1">
            {t("Jobs.empty.title")}
          </p>
          <p className="mt-1 text-text-2 text-sm">{t("Jobs.empty.subtitle")}</p>
        </div>
        <Button
          variant="outline"
          className="w-fit self-center"
          onClick={clearFilters}
        >
          <SlidersHorizontal className="size-5" />
          {t("Jobs.empty.button")}
        </Button>
      </div>
    </div>
  );
};

export default JobEmpty;
