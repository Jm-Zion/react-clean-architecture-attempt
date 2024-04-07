import { useQuery } from "@tanstack/react-query";
import { useBreweriesOptions } from "../../ui/queries/options/breweries.options";

export const useBreweriesService = () => {
  const data = useQuery(useBreweriesOptions());
  return data;
};
