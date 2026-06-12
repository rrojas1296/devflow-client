import { cn } from "@/shared/lib/cn";
import type { ComponentProps, ReactNode } from "react";

interface Props extends ComponentProps<"input"> {
  icon: ReactNode;
  inputClassName?: string;
}
const Input = ({ icon: Icon, className, inputClassName, ...props }: Props) => {
  return (
    <div
      className={cn(
        "h-9 rounded-3xl border border-border-1 bg-bg-2 text-text-2 focus-within:ring-3 focus-within:ring-ring-1/30 flex gap-3 items-center px-3",
        className,
      )}
    >
      {Icon}
      <input
        className={cn(
          "outline-none flex-1 border-none bg-transparent placeholder:text-text-2 text-text-1 text-sm",
          inputClassName,
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
