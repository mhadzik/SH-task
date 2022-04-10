import React, { useState, useEffect } from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { rem } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

import api from "../api/api-service";
import { appSettings } from "../api/app-settings";

type Props = {};

const StyledButton = styled.button`
  border: 1px solid #718096;
  font-weight: 500;

  @media (min-width: 1024px) {
    padding: 1rem 3rem;
  }

  @media (min-width: 320px) and (max-width: 1023px) {
    padding: 0.5rem 2rem;
  }
`;

const PageWrapper = styled.div`
  display: grid;
  grid-gap: ${rem(64)};
  min-height: 100vh;
  overflow-x: hidden;
  text-align: left;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr;
    padding: ${rem(60)};
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: 1fr;
    padding: ${rem(80)} ${rem(100)};
    grid-gap: ${rem(16)};
  }

  @media (min-width: 320px) and (max-width: 767px) {
    grid-template-rows: 1fr;
    padding: ${rem(16)} ${rem(8)};
    grid-gap: ${rem(16)};
    font-size: ${rem(14)};
  }
`;

const ContentWrapper = styled.div`
  margin-top: ${rem(40)};

  h1 {
    font-size: ${rem(34)};
    font-weight: 600;
  }

  p {
    margin-top: ${rem(40)};
  }
`;

const CompanyDetails = (props: Props) => {
  const [companyData, setCompanyData] = useState<{
    Address: string;
    MarketCapitalization: string;
    Description: string;
  }>({ Address: "", MarketCapitalization: "", Description: "" });

  const [isLoading, setIsLoading] = useState(true);
  const companySymbol = window.location.pathname.replace("/", "");

  useEffect(() => {
    api
      .get("query", {
        function: appSettings.detailsFunction,
        symbol: companySymbol,
        apikey: appSettings.apiKey,
      })
      .then((data) => {
        setIsLoading(false);
        setCompanyData(data);
      });
  }, []);

  const capitalization = new Intl.NumberFormat("en-GB", {
    notation: "compact",
    compactDisplay: "short",
  }).format(parseInt(companyData?.MarketCapitalization));

  if (isLoading) {
    return (
      <Grid minH="100vh" p={24} templateColumns="1fr">
        <GridItem w="100%">
          <h1>Loading...</h1>
        </GridItem>
      </Grid>
    );
  }

  return (
    <PageWrapper>
      <div>
        <Link to={"/"}>
          <StyledButton>Go Back</StyledButton>
        </Link>
        <ContentWrapper>
          <h1>{companySymbol}</h1>
          <h2>
            <strong>Address:</strong> {companyData?.Address}
          </h2>
          <h2>
            <strong>Market Capitalization:</strong> {capitalization}
          </h2>
          <p>{companyData?.Description}</p>
        </ContentWrapper>
      </div>
    </PageWrapper>
  );
};

export default CompanyDetails;
