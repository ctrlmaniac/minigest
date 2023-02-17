import React from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Wallpaper } from "components";
import dashboard from "./dashboard.webp";
import corrispettivi from "./corrispettivi.webp";
import fatture from "./fatture.webp";
import scadenzario from "./scadenzario.webp";
import bilancio from "./bilancio.webp";

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
          Gestisci le tue fatture, dai un'occhiata alle ultime fatture acquisto!
        </Typography>
        <Wallpaper src={fatture} alt="fatture" />
      </Box>

      <Box mt={6}>
        <Typography variant="h6" component="p" align="center" gutterBottom>
          Gestisci le tue chiusure fiscali in base al negozio in cui sono state
          emesse!
        </Typography>
        <Wallpaper src={corrispettivi} alt="corrispettivi" />
      </Box>

      <Box mt={6}>
        <Typography variant="h6" component="p" align="center" gutterBottom>
          Tieni sempre d'occhio le tue scadenze!
        </Typography>
        <Wallpaper src={scadenzario} alt="scadenzario" />
      </Box>

      <Box mt={6}>
        <Typography variant="h6" component="p" align="center" gutterBottom>
          Controlla il bilancio delle entrate e delle uscite!
        </Typography>
        <Wallpaper src={bilancio} alt="bilancio" />
      </Box>

      <Box mt={6}>
        <Paper>
          <Box p={2}>
            <Typography align="center">
              Quest'applicazione è solo dimostrativa, sebbene ci si possa
              registrare, non va utilizzata per salvare i vostri dati personali!
            </Typography>
            <Typography align="center">
              I dati possono essere cancellati in qualsiasi momento, soprattuto
              al riavvio dell'applicazione!
            </Typography>

            <Box sx={{ textAlign: "center" }} mt={3}>
              <Button
                variant="contained"
                onClick={() =>
                  window.open(
                    "https://github.com/ctrlmaniac/minigest",
                    "_blank"
                  )
                }
              >
                Visualizza il codice sorgente!
              </Button>
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Home;
