import React from "react";
import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { logoTheme } from "~/context/theme";
import { Wallpaper } from "~/components";

// images
import dashboard from "./dashboard.webp";
import corrispettivi from "./corrispettivi.webp";

const Home: React.FC = () => {
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
            Un mini gestionale pensato per le piccole imprese
          </Typography>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Button variant="contained" href="/app" sx={{ marginRight: 2 }}>
            Accedi
          </Button>
          <Button variant="outlined" href="/registrati">
            registrati
          </Button>
        </Box>

        <Box mt={6}>
          <Typography variant="h6" component="p" align="center" gutterBottom>
            Gestisci le tue aziende e i tuoi negozi!
          </Typography>
          <Wallpaper src={dashboard} alt="dashboard" />
        </Box>

        <Box mt={6}>
          <Typography variant="h6" component="p" align="center" gutterBottom>
            Gestisci le tue chiusure fiscali in base al negozio in cui sono
            state emesse!
          </Typography>
          <Wallpaper src={corrispettivi} alt="corrispettivi" />
        </Box>
      </Container>
    </>
  );
};

export default Home;
