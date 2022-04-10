import React from "react";
import styled from "styled-components";

import PortfolioTable from "./PortfolioTable";

type Props = {};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-wrap: wrap;
  align-content: center;
}
`;

const Porfolio = (props: Props) => {
  return (
    <Wrapper>
      <h5>Your portfolio</h5>
      <PortfolioTable />
    </Wrapper>
  );
};

export default Porfolio;
