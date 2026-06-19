import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  icon: ReactNode;
  value: string;
}
const JobKpiCard = ({ title, subtitle, icon: Icon, value }: Props) => {
  const formatNumber = (num: number) => {
    if (num > 999) {
      return `${(num / 1000).toFixed(1)}k`;
    }
    return num.toString();
  };
  return (
    <div className="p-5 border border-border-2 rounded-3xl bg-bg-2 flex justify-start">
      <div className="flex-1 flex flex-col gap-1 xl:gap-2">
        <p className="text-text-2 text-sm">{title}</p>
        <p className="text-2xl xl:text-4xl text-text-1 font-bold">
          {formatNumber(parseInt(value))}
        </p>
        <p className="text-text-2 text-sm">{subtitle}</p>
      </div>
      <div className="size-9 flex items-center justify-center shrink-0">
        {Icon}
      </div>
    </div>
  );
};

export default JobKpiCard;
