import { createContext, useContext } from "react";
export type GlobalContent = {
  stockData: Array<{
    symbol: string;
    name: string;
    inPortfolio: boolean;
    index: number;
  }>;
  setStockData: (
    searchData: Array<{
      symbol: string;
      name: string;
      inPortfolio: boolean;
      index: number;
    }>
  ) => void;
};

export const PortfolioContext = createContext<GlobalContent>({
  stockData: [],
  setStockData: () => {},
});

export const usePortfolioContext = () => useContext(PortfolioContext);
