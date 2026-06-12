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
  cols?: number;
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
  cols = 1,
  many = true,
}: Props) => {
  const handleChecked = (value: string) => {
    // Update to use many param
    const newOptions = options.map((opt) => {
      if (opt.value === value) {
        return { ...opt, checked: !opt.checked };
      }
      return many ? opt : { ...opt, checked: false };
    });
    setOptions(newOptions);
  };
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          {Icon}
          {label}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-2 w-46">
        <p className="text-sm text-text-1 font-bold"> {title}</p>
        <div className={cn(`grid grid-cols-${cols} gap-2`)}>
          {options.map((opt) => {
            return (
              <div
                onClick={() => handleChecked(opt.value)}
                className="flex items-center gap-2 cursor-pointer"
              >
                <div
                  className={cn(
                    "rounded-lg border border-border-2 bg-bg-1 grid place-items-center size-5",
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
