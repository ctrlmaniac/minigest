import React from "react";
import { Box, Container, Fab, ThemeProvider, Typography } from "@mui/material";
import { Splash } from "~/components";
import { logoTheme } from "~/context/theme";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Splash>
      <Container>
        <Box mb={4}>
          <ThemeProvider theme={logoTheme}>
            <Typography variant="h1" component="h1" align="center" mt={3}>
              minigest
            </Typography>
          </ThemeProvider>

          <Typography variant="h6" component="p" align="center" gutterBottom>
            pagina non trovata
          </Typography>

          <Fab variant="extended" onClick={() => navigate(-1)} color="primary">
            Torna indietro
          </Fab>
        </Box>
      </Container>
    </Splash>
  );
};

export default NotFound;
