import { cn } from "@/shared/lib/cn";
import type { Job, Modality } from "../../types/jobs.types";
import { Button } from "@/shared/components/shadcn-ui/button";
import {
  BookmarkIcon,
  MapPinIcon,
  SquareArrowOutUpRightIcon,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { capitalize } from "@/shared/lib/capitalize";
import { Link } from "react-router";

dayjs.extend(relativeTime);

interface Props {
  job: Job;
  index: number;
}
const JobCard = ({ job, index }: Props) => {
  const { t } = useTranslation();
  const {
    title,
    source,
    location,
    company,
    linkUrl,
    modality,
    postedDate,
    stack,
  } = job;
  const letters = company.name
    .split(" ")
    .slice(0, 2)
    .map((l) => l[0])
    .join("")
    .toUpperCase();

  const date = dayjs(postedDate).fromNow();

  const modalityStyles: Record<Modality, string> = {
    remote: "bg-badge-2",
    hybrid: "bg-badge-3",
    onsite: "bg-badge-4",
  };
  return (
    <div
      className="animate-card-enter opacity-0 border border-border-2 rounded-3xl p-5 bg-bg-2 flex flex-col gap-5 hover:-translate-y-1 transition-transform cursor-pointer"
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      <div className="flex justify-between items-start">
        <div className="flex items-start gap-2">
          <div
            className={cn(
              "grid place-items-center border border-border-2 bg-bg-1 text-center size-16 overflow-hidden rounded-[1.25rem] shrink-0",
              company.imageUrl && "border-none bg-bg-2",
            )}
          >
            {company.imageUrl ? (
              <img
                src={company.imageUrl}
                alt={company.name}
                className="w-full h-full object-cover"
              />
            ) : (
              letters
            )}
          </div>
          <div>
            <p className="font-bold text-text-1">{title}</p>
            <p className="text-sm text-text-2 mt-1">{company.name}</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" className="hover:bg-bg-1">
          <BookmarkIcon className="size-5 fill-text-1" />
        </Button>
      </div>
      <div className="flex flex-wrap gap-2 text-text-1 text-sm">
        <div
          className={cn(
            "rounded-3xl h-6 px-3 flex items-center justify-center",
            modalityStyles[modality],
          )}
        >
          {capitalize(modality)}
        </div>
        {stack.slice(0, 8).map((t) => (
          <div className="bg-badge-1 rounded-3xl h-6 px-3 flex items-center justify-center">
            {capitalize(t)}
          </div>
        ))}
        {stack.length > 8 && (
          <div className="flex items-center text-text-2">
            +{stack.length - 8} {t("Jobs.card.more")}
          </div>
        )}
      </div>
      <hr className="text-border-1 w-full" />
      <div className="flex justify-between text-sm flex-1">
        <div className="flex flex-col gap-2">
          <p className="text-text-2">{t("Jobs.card.location")}</p>
          <div className="text-text-1 flex items-center gap-2">
            <MapPinIcon className="size-5" />
            <span>
              {location.slice(0, 16)} {location.length > 16 && "..."}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-text-2">{t("Jobs.card.posted")}</p>
          <div className="text-text-1 flex items-center gap-2">
            <MapPinIcon className="size-5" />
            <span>{date}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-text-2">{t("Jobs.card.source")}</p>
          <div className="text-text-1 flex items-center gap-2">
            <MapPinIcon className="size-5" />
            <span>{capitalize(source)}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-5">
        <Link to={linkUrl} className="flex-1 flex" target="_blank">
          <Button className="w-full">
            {t("Jobs.card.apply")}
            <SquareArrowOutUpRightIcon className="size-5" />{" "}
          </Button>
        </Link>
        <Button className="flex-1 hover:bg-bg-1" variant="outline">
          {t("Jobs.card.details")}
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
