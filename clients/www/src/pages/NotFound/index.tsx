import React from "react";
import {
  ThemeProvider,
  Box,
  Typography,
  Container,
  Alert,
} from "@mui/material";
import { logoTheme } from "components";

const NotFound: React.FC = () => {
  return (
    <>
      <Box mb={3} sx={{ textAlign: "center" }}>
        <ThemeProvider theme={logoTheme}>
          <Typography variant="h1" component="h1" align="center" mt={3}>
            minigest
          </Typography>
        </ThemeProvider>
        <Typography>un mini gestionale per piccole aziende</Typography>
      </Box>

      <Container maxWidth="xs">
        <Box sx={{ textAlign: "center" }}>
          <Alert severity="warning">Pagina non trovata</Alert>
        </Box>
      </Container>
    </>
  );
};

export default NotFound;
