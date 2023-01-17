import React from "react";
import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { logoTheme } from "~/context/theme";

const Welcome: React.FC = () => {
  return (
    <>
      <Container>
        <Box mb={4}>
          <ThemeProvider theme={logoTheme}>
            <Typography variant="h1" component="h1" align="center" mt={3}>
              minigest
            </Typography>
          </ThemeProvider>

          <Typography variant="h6" component="p" align="center" gutterBottom>
            Un mini gestionale pensato per le piccole/medie imprese
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" href="/app">
            Accedi
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Welcome;
