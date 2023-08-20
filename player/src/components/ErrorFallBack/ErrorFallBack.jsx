import React from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../router/route-path";
import { Wrapper } from "./ErrorFallBack.styles";


const ErrorFallBack = ({
  error,
  resetErrorBoundary,
}) => {
  return (
    <Wrapper role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
      <Link to={HOME}>To Home</Link>
      <button onClick={resetErrorBoundary}>Try again</button>
    </Wrapper>
  );
};

export default ErrorFallBack;
