import * as React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./components/ColorModeSwitcher";

import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import { Route, Routes } from "react-router-dom";
import CompanyDetails from "./components/CompanyDetails";
import ErrorFallback from "./components/ErrorFallback";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Header>
            <ColorModeSwitcher justifySelf="flex-end" />
          </Header>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path=":id" element={<CompanyDetails />} />
          </Routes>
        </ErrorBoundary>
      </Box>
    </ChakraProvider>
  );
}

export default App;
