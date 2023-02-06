import { Alert, Container } from "@mui/material";
import React from "react";

const NotFound: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Alert severity="warning">Pagina non trovata!</Alert>
    </Container>
  );
};

export default NotFound;
