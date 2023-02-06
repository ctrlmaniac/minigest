import React from "react";
import { Alert, Container, Typography } from "@mui/material";
import Splash from "./Splash";

interface Props {
  message: String;
}

const ErrorScreen: React.FC<Props> = ({ message }) => {
  return (
    <Splash>
      <Container maxWidth="xs">
        <Typography variant="h3" component="h1" gutterBottom>
          Oops!
        </Typography>
        <Alert severity="error">{message}</Alert>
      </Container>
    </Splash>
  );
};

export default ErrorScreen;
