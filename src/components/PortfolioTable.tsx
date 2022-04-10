import React, { Fragment } from "react";
import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { usePortfolioContext } from "../context/portfolio-context";

import RemoveButton from "./ButtonRemove";

type Props = {};

const PortfolioTable = (props: Props) => {
  const { stockData } = usePortfolioContext();
  return (
    <Fragment>
      <TableContainer mt={1} border={"1px solid #718096"} whiteSpace="normal">
        <Table variant="striped" colorScheme="gray" size="md">
          <Thead>
            <Tr>
              <Th>Company Name</Th>
              <Th>Symbol</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {stockData.length > 0 ? (
              stockData.map((item, index) => {
                return (
                  <Tr key={index}>
                    <Td>
                      <Link to={`/${item.symbol}`}>{item.symbol}</Link>
                    </Td>
                    <Td>{item.name}</Td>
                    <Td>
                      <RemoveButton index={index} />
                    </Td>
                  </Tr>
                );
              })
            ) : (
              <Tr>
                <Td colSpan={3}>No stock added</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Fragment>
  );
};

export default PortfolioTable;
