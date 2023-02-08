import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { logoTheme } from "components";

const Root: React.FC = () => {
  return (
    <Box mt={3}>
      <Box mb={3}>
        <ThemeProvider theme={logoTheme}>
          <Typography variant="h1" align="center">
            minigest
          </Typography>
        </ThemeProvider>
        <Typography align="center" variant="h6">
          un mini gestionale per le piccole aziende
        </Typography>
      </Box>

      <Container>
        <Outlet />
      </Container>
    </Box>
  );
};

export default Root;
