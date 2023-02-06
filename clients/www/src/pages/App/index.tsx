import React from "react";
import { Alert } from "@mui/material";
import { Container } from "@mui/system";

const App: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Alert severity="error">
        Devi essere registrato per poter accedere a questa sezione!
      </Alert>
    </Container>
  );
};

export default App;
