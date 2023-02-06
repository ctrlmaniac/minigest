import React from "react";
import { Outlet } from "react-router-dom";
import { ThemeProvider, Box, Typography, Container } from "@mui/material";
import { logoTheme } from "components";

const Root: React.FC = () => {
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

      <Container>
        <Box sx={{ textAlign: "center" }}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
};

export default Root;
