import React from "react";
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
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

          <Typography variant="h6" component="p" align="center">
            Un mini gestionale pensato per le piccole/medie imprese
          </Typography>
        </Box>
      </Container>

      <Container maxWidth="xs">
        <Paper>
          <Box p={2}>
            <form action="" method="post">
              <TextField
                fullWidth
                label="email"
                name="username"
                type="email"
                margin="normal"
              />
              <TextField
                fullWidth
                name="password"
                label="password"
                type="password"
                margin="normal"
              />
              <Button fullWidth variant="contained" type="submit">
                accedi
              </Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Welcome;
