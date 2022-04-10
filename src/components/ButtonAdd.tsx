import React, { Fragment } from "react";
import { GoDiffAdded } from "react-icons/go";
import { AiOutlineCheck } from "react-icons/ai";
import { rem } from "polished";
import styled from "styled-components";

import { usePortfolioContext } from "../context/portfolio-context";
import { useSearchContext } from "../context/search-context";

type Props = {
  symbol: string;
  name: string;
  index: number;
};

const StyledButton = styled.button`
  font-size: ${rem(22)};
`;

const ButtonAdd = (props: Props) => {
  const { symbol, name, index } = props;
  const { stockData, setStockData } = usePortfolioContext();
  const { searchData, setSearchData } = useSearchContext();

  const handleButton = () => {
    setStockData([
      ...stockData,
      { symbol: symbol, name: name, inPortfolio: true, index: index },
    ]);

    const newSearchData = [...searchData];
    newSearchData[index] = {
      ...newSearchData[index],
      inPortfolio: true,
      index: index,
    };

    setSearchData(newSearchData);
  };
  return (
    <Fragment>
      <StyledButton
        type="button"
        onClick={handleButton}
        disabled={searchData[index]?.inPortfolio}
      >
        {searchData[index]?.inPortfolio ? (
          <AiOutlineCheck color="green" />
        ) : (
          <GoDiffAdded color="#ccc" />
        )}
      </StyledButton>
    </Fragment>
  );
};

export default ButtonAdd;
