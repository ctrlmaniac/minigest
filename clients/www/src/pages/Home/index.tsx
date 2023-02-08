import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Wallpaper } from "components";
import dashboard from "./dashboard.webp";
import corrispettivi from "./corrispettivi.webp";

const Home: React.FC = () => {
  return (
    <>
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
          Gestisci le tue chiusure fiscali in base al negozio in cui sono state
          emesse!
        </Typography>
        <Wallpaper src={corrispettivi} alt="corrispettivi" />
      </Box>
    </>
  );
};

export default Home;
