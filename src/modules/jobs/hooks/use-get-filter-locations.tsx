import { useQuery } from "@tanstack/react-query";
import { getFilterLocationsService } from "../services/get-filter-locations.service";

const useGetFilterLocations = () => {
  return useQuery({
    queryKey: ["filter-locations"],
    queryFn: () => getFilterLocationsService(),
    select: (res) => res.data.data,
  });
};

export default useGetFilterLocations;
