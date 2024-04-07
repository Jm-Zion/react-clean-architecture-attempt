import { queryOptions } from "@tanstack/react-query";
import { useDependencies } from "../../../../../hooks/dependencies.hook";

export const useBreweriesOptions = () => {
  const { breweriesRepository } = useDependencies();

  return queryOptions({
    queryKey: ["breweries"],
    queryFn: () => breweriesRepository.getBreweries(),
  });
};
