import React from "react";
import { rem } from "polished";
import styled from "styled-components";

import AddButton from "./ButtonAdd";

type Props = {
  symbol: string;
  name: string;
  index: number;
};

const StyledLi = styled.li`
  display: flex;
  align-items: center;
  padding: ${rem(8)} 0;

  span {
    margin-right: ${rem(16)};
  }
`;

const ListItem = (props: Props) => {
  const { symbol, name, index } = props;
  return (
    <StyledLi>
      <span>
        {symbol} - {name}
      </span>
      <AddButton symbol={symbol} name={name} index={index} />
    </StyledLi>
  );
};

export default ListItem;
