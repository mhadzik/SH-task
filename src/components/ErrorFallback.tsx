import React from "react";
import { Link } from "react-router-dom";

type Props = { error: any; resetErrorBoundary: any };

const ErrorFallback = ({ error, resetErrorBoundary }: Props) => {
  return (
    <div>
      <h1>Something went wrong</h1>
      <pre>{error.message}</pre>

      <Link to={"/"} onClick={resetErrorBoundary}>
        Go to home page
      </Link>
    </div>
  );
};

export default ErrorFallback;
