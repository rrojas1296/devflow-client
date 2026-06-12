import { useEffect, useState } from "react";

const useDebounce = (text: string, time: number = 300) => {
  const [debouncedValue, setDebouncedValue] = useState(text);
  useEffect(() => {
    const id = setTimeout(() => setDebouncedValue(text), time);
    return () => clearTimeout(id);
  }, [text, time]);
  return debouncedValue;
};

export default useDebounce;
