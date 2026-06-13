import { useMemo } from "react";
import { Button } from "../shadcn-ui/button";
import { useSearchParams } from "react-router";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";

interface Props {
  total: number;
  limit: number;
  page: number;
}
const Pagination = ({ total, limit, page }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const buttons = useMemo(() => {
    const arr = Array.from(
      { length: Math.ceil(total / limit) },
      (_, i) => i + 1,
    );
    const buttonsNumber = 5;
    let start = Math.max(0, page - Math.ceil(buttonsNumber / 2));
    let end = start + buttonsNumber;

    if (end > arr.length) {
      start = Math.max(0, arr.length - buttonsNumber);
      end = arr.length;
    }
    return arr.slice(start, end);
  }, [page, limit, total]);

  const handleChangePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    setSearchParams(params);
  };
  return (
    <div className="flex gap-2">
      <Button
        size="icon"
        variant="outline"
        className="hidden lg:flex"
        onClick={() => handleChangePage(1)}
      >
        <ChevronsLeftIcon className="size-5" />
      </Button>
      <Button
        size="icon"
        variant="outline"
        disabled={page === 1}
        onClick={() => handleChangePage(page - 1)}
      >
        <ChevronLeftIcon className="size-5" />
      </Button>
      {buttons.map((n) => (
        <Button
          onClick={() => handleChangePage(n)}
          size="icon"
          variant={page === n ? "default" : "outline"}
        >
          {n}
        </Button>
      ))}
      <Button
        size="icon"
        variant="outline"
        disabled={page === Math.ceil(total / limit)}
        onClick={() => handleChangePage(page + 1)}
      >
        <ChevronRightIcon className="size-5" />
      </Button>
      <Button
        size="icon"
        variant="outline"
        className="hidden lg:flex"
        onClick={() => handleChangePage(Math.ceil(total / limit))}
      >
        <ChevronsRightIcon className="size-5" />
      </Button>
    </div>
  );
};

export default Pagination;
