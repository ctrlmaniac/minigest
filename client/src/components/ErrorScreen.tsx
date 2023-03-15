import React from "react";
import { Alert, Container, Typography } from "@mui/material";
import Splash from "./Splash";

interface Props {
  children: string | JSX.Element | JSX.Element[];
}

const ErrorScreen: React.FC<Props> = ({ children }) => {
  return (
    <Splash>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
          Oops!
        </Typography>

        {children}
      </Container>
    </Splash>
  );
};

export default ErrorScreen;
