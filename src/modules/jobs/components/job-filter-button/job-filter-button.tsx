import type { ReactNode } from "react";
import type { FilterOption } from "../../types/filters.types";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/shared/components/shadcn-ui/popover";
import { Button } from "@/shared/components/shadcn-ui/button";
import { CheckIcon } from "lucide-react";
import { cn } from "@/shared/lib/cn";

interface Props {
  label: string;
  title: string;
  icon?: ReactNode;
  cols?: string;
  many?: boolean;
  options: FilterOption[];
  setOptions: (options: FilterOption[]) => void;
}
const JobFilterButton = ({
  label,
  title,
  icon: Icon,
  options,
  setOptions,
  cols = "1",
  many = true,
}: Props) => {
  const selectedLength = options.filter((opt) => opt.checked).length;
  const handleChecked = (value: string) => {
    const newOptions = options.map((opt) => {
      if (opt.value === value) {
        return { ...opt, checked: !opt.checked };
      }
      return many ? opt : { ...opt, checked: false };
    });
    setOptions(newOptions);
  };

  const gridColsMap: Record<string, string> = {
    "1": "grid-cols-1",
    "2": "grid-cols-2",
    "3": "grid-cols-3",
    "4": "grid-cols-4",
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {Icon}
          {label}
          {selectedLength > 0 && (
            <div className="size-5 rounded-full bg-bg-accent grid place-items-center text-text-accent shrink-0 text-xs">
              {selectedLength}
            </div>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-auto w-fit">
        <p className="text-sm text-text-1 font-bold"> {title}</p>
        <div
          className={cn(
            `flex-col gap-2 max-w-72 w-fit grid`,
            gridColsMap[cols],
          )}
        >
          {options.map((opt) => {
            return (
              <div
                key={opt.value}
                onClick={() => handleChecked(opt.value)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div
                  className={cn(
                    "rounded-lg border border-border-2 bg-bg-1 grid place-items-center size-5 shrink-0",
                    opt.checked && "bg-bg-accent border-none",
                  )}
                >
                  {opt.checked && (
                    <CheckIcon className="size-4 text-text-accent" />
                  )}
                </div>
                <span className="text-sm text-text-1"> {opt.label}</span>
              </div>
            );
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default JobFilterButton;
