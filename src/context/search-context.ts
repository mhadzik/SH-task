import { createContext, useContext } from "react";
export type GlobalContent = {
  searchData: Array<{
    symbol: string;
    name: string;
    inPortfolio: boolean;
    index: number;
  }>;
  setSearchData: (
    searchData: Array<{
      symbol: string;
      name: string;
      inPortfolio: boolean;
      index: number;
    }>
  ) => void;
};

export const SearchContext = createContext<GlobalContent>({
  searchData: [],
  setSearchData: () => {},
});

export const useSearchContext = () => useContext(SearchContext);
