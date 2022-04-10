import React from "react";
import styled from "styled-components";

type Props = {
  children: JSX.Element;
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;
  border-bottom: 1px solid #718096;
`;

const Header = (props: Props) => {
  return (
    <Wrapper>
      <h1>SDH Frontend Homework</h1>
      {props.children}
    </Wrapper>
  );
};

export default Header;
