import React from "react";
import { Alert, Container } from "@mui/material";

const Admin: React.FC = () => {
  return (
    <Container maxWidth="xs">
      <Alert severity="error">
        Devi essere ADMIN per poter accedere a questa sezione!
      </Alert>
    </Container>
  );
};

export default Admin;
