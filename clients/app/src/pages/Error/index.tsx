import React from "react";
import { useRouteError } from "react-router-dom";
import { ErrorScreen } from "components";

interface Error {
  statusText: string;
  message: string;
}

const Error: React.FC = () => {
  const error = useRouteError() as Error;

  return <ErrorScreen message={error.statusText || error.message} />;
};

export default Error;
