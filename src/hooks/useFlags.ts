import { useQuery } from "@tanstack/react-query";
import type { Flag } from "../types/flagTypes";
import { getAllFlags } from "../services/flagServices";

export const useFlags = () => {
  return useQuery<Flag[]>({
    queryKey: ["flags"],
    queryFn: () => getAllFlags(),
    staleTime: 1000 * 60 * 60 * 24, //one day,
  });
};
