import React from "react";
import { Alert, CircularProgress } from "@mui/material";
import Splash from "./Splash";

interface Props {
  messaggio: String;
}

const ErrorScreen: React.FC<Props> = ({ messaggio }) => {
  return (
    <Splash>
      <Alert severity="error">{messaggio}</Alert>
    </Splash>
  );
};

export default ErrorScreen;
