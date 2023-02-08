import React from "react";
import { Box, Container, Alert } from "@mui/material";

const Forbidden: React.FC = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Box sx={{ textAlign: "center" }}>
          <Alert severity="error">Non puoi accedere a questa risorsa!</Alert>
        </Box>
      </Container>
    </>
  );
};

export default Forbidden;
