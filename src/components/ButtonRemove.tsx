import React, { Fragment } from "react";
import styled from "styled-components";

import { usePortfolioContext } from "../context/portfolio-context";
import { useSearchContext } from "../context/search-context";

type Props = {
  index: number;
};

const StyledButton = styled.button`
  display: inline-flex;
  color: red;
`;

const ButtonRemove = (props: Props) => {
  const { index } = props;
  const { stockData, setStockData } = usePortfolioContext();
  const { searchData, setSearchData } = useSearchContext();

  const handleButton = () => {
    const itemTarget = [[...stockData][index]];
    setStockData(
      [...stockData].filter((element) => !itemTarget.includes(element))
    );

    const newSearchData = [...searchData];
    newSearchData[stockData[index].index].inPortfolio = false;
    setSearchData(newSearchData);
  };
  return (
    <Fragment>
      <StyledButton type="button" onClick={handleButton}>
        Remove
      </StyledButton>
    </Fragment>
  );
};

export default ButtonRemove;
