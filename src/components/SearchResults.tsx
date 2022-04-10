import React from "react";
import { rem } from "polished";
import styled from "styled-components";

import { useSearchContext } from "../context/search-context";

import ListItem from "./ListItem";

type Props = {};

const Wrapper = styled.div`
  margin-top: ${rem(60)};
  display: flex;
  flex-direction: column;
  align-items: start;
`;

const StyledUl = styled.ul`
  border: 1px solid #718096;
  width: 100%;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${rem(10)};
  text-align: left;
`;

const SearchResults = (props: Props) => {
  const { searchData } = useSearchContext();
  return (
    <Wrapper>
      <h5>Search Results</h5>
      <StyledUl>
        {searchData.length > 0 ? (
          searchData.map((item, index) => {
            return (
              <ListItem
                symbol={Object.values(item)[0].toString()}
                name={Object.values(item)[1].toString()}
                key={index}
                index={index}
              />
            );
          })
        ) : (
          <li>No results</li>
        )}
      </StyledUl>
    </Wrapper>
  );
};

export default SearchResults;
