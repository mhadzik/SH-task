import React, { useEffect, useState } from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

import api from "../api/api-service";
import { appSettings } from "../api/app-settings";

import { useSearchContext } from "../context/search-context";

type Props = {};

const SearchInput = (props: Props) => {
  const [value, setValue] = useState("");
  const { setSearchData } = useSearchContext();

  useEffect(() => {
    if (value.length >= 2) {
      api
        .get("query", {
          function: appSettings.searchFunction,
          keywords: value,
          apikey: appSettings.apiKey,
        })
        .then((data) => setSearchData(data.bestMatches));
    }
  }, [value]);

  const handleChange = (event: any) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<BsSearch color="#ccc" />}
        />
        <Input
          type="text"
          placeholder="Example: Apple"
          _placeholder={{ opacity: 1, color: "#ccc" }}
          borderColor="gray.500"
          value={value}
          onChange={handleChange}
        />
      </InputGroup>
    </div>
  );
};

export default SearchInput;
