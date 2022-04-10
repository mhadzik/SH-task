import React, { useState } from "react";
import styled from "styled-components";
import { rem } from "polished";

import { SearchContext } from "../context/search-context";
import { PortfolioContext } from "../context/portfolio-context";

import Porfolio from "./Porfolio";
import CustomInput from "./SearchInput";
import SearchResults from "./SearchResults";

type Props = {};

const Wrapper = styled.div`
  display: grid;
  grid-gap: ${rem(64)};
  min-height: 100vh;
  overflow-x: hidden;

  a {
    color: green;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    padding: ${rem(60)};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr;
    padding: ${rem(80)} ${rem(100)};
    grid-gap: ${rem(16)};
  }

  @media (min-width: 320px) and (max-width: 767px) {
    grid-template-rows: 50%;
    padding: ${rem(16)} ${rem(8)};
    grid-gap: ${rem(16)};
    font-size: ${rem(14)};
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const Dashboard = (props: Props) => {
  const [searchData, setSearchData] = useState<
    Array<{
      symbol: string;
      name: string;
      inPortfolio: boolean;
      index: number;
    }>
  >([]);
  const [stockData, setStockData] = useState<
    Array<{
      symbol: string;
      name: string;
      inPortfolio: boolean;
      index: number;
    }>
  >([]);
  return (
    <Wrapper>
      <PortfolioContext.Provider value={{ stockData, setStockData }}>
        <SearchContext.Provider value={{ searchData, setSearchData }}>
          <ContentWrapper>
            <h5>Company Name</h5>
            <CustomInput />
            <SearchResults />
          </ContentWrapper>
          <div>
            <Porfolio />
          </div>
        </SearchContext.Provider>
      </PortfolioContext.Provider>
    </Wrapper>
  );
};

export default Dashboard;
