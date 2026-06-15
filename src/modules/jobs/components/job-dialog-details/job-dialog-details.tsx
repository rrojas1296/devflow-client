import { cn } from "@/shared/lib/cn";
import type { Job, Modality } from "../../types/jobs.types";
import { capitalize } from "@/shared/lib/capitalize";
import {
  CalendarIcon,
  CheckIcon,
  ClipboardIcon,
  EarthIcon,
  MapPinIcon,
  SquareArrowOutUpRightIcon,
} from "lucide-react";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";
import { jobCountries } from "../../constants/countries";
import { Button } from "@/shared/components/shadcn-ui/button";
import { useState } from "react";
import { DialogClose } from "@/shared/components/shadcn-ui/dialog";
import { Link } from "react-router";

interface Props {
  job: Job;
}
let id: number | undefined;
const JobDialogDetails = ({ job }: Props) => {
  const { i18n, t } = useTranslation();
  const locale = i18n.language;
  const {
    company,
    description,
    stack,
    title,
    source,
    linkUrl,
    postedDate,
    location,
    modality,
  } = job;
  const date = dayjs(postedDate).locale(locale).fromNow();
  const [copied, setCopied] = useState(false);
  const translatedLocation =
    jobCountries.find((c) => c.value === location)?.label[locale] || "";
  const letters = company.name
    .split(" ")
    .slice(0, 2)
    .map((l) => l[0])
    .join("")
    .toUpperCase();
  const modalityStyles: Record<Modality, string> = {
    remote: "bg-badge-2",
    hybrid: "bg-badge-3",
    onsite: "bg-badge-4",
  };

  const handleClipboard = (linkUrl: string) => {
    if (id) clearTimeout(id);
    setCopied(true);
    navigator.clipboard.writeText(linkUrl);
    id = setTimeout(() => {
      setCopied(false);
    }, 2000);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-start gap-2">
        <div
          className={cn(
            "grid place-items-center border border-border-2 bg-bg-1 text-center size-16 overflow-hidden rounded-[1.25rem] shrink-0 text-text-2 font-bold text-xl",
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
          <p className="font-bold text-base text-text-1">{title}</p>
          <p className="text-sm text-text-2 mt-1">{company.name}</p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 text-text-1 text-xs">
        <div
          className={cn(
            "rounded-3xl h-6 px-3 flex items-center justify-center",
            modalityStyles[modality],
          )}
        >
          {capitalize(modality)}
        </div>
        {stack.map((t) => (
          <div className="bg-badge-1 rounded-3xl h-6 px-3 flex items-center justify-center">
            {capitalize(t)}
          </div>
        ))}
      </div>
      <hr className="text-border-1 w-full" />
      <div className="flex justify-between text-sm flex-1">
        <div className="flex flex-col gap-2">
          <p className="text-text-2">{t("Jobs.card.location")}</p>
          <div className="text-text-1 flex items-center gap-2">
            <MapPinIcon className="size-5" />
            <span>
              {translatedLocation.slice(0, 16)}{" "}
              {translatedLocation.length > 16 && "..."}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-text-2">{t("Jobs.card.posted")}</p>
          <div className="text-text-1 flex items-center gap-2">
            <CalendarIcon className="size-5" />
            <span>{date}</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-text-2">{t("Jobs.card.source")}</p>
          <div className="text-text-1 flex items-center gap-2">
            <EarthIcon className="size-5" />
            <span>{capitalize(source)}</span>
          </div>
        </div>
      </div>
      <div
        className="text-sm text-text-1 max-w-full overflow-hidden html-content"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <hr className="text-border-1 w-full" />
      <div className="flex flex-col gap-5 lg:justify-between lg:items-center lg:flex-row">
        <Button
          variant="ghost"
          className="w-fit"
          onClick={() => handleClipboard(linkUrl)}
        >
          {copied ? (
            <CheckIcon className="text-green-500 size-5" />
          ) : (
            <ClipboardIcon className="size-5 text-text-2" />
          )}
          <p className="text-text-2 text-sm">
            {linkUrl?.slice(0, 40)} {linkUrl?.length > 40 && "..."}
          </p>
        </Button>
        <div className="gap-5 flex">
          <DialogClose asChild>
            <Button variant="outline" className="flex-1">
              {t("Jobs.job-details.close")}
            </Button>
          </DialogClose>
          <Link to={linkUrl} target="_blank">
            <Button className="flex-1">
              {t("Jobs.job-details.apply")}
              <SquareArrowOutUpRightIcon className="size-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDialogDetails;
