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

const Login: React.FC = () => {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value.trim(),
    });
  };

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
                value={values.username}
                onChange={handleChange}
                error={values.username.length < 1}
                required
              />
              <TextField
                fullWidth
                name="password"
                label="password"
                type="password"
                margin="normal"
                value={values.password}
                onChange={handleChange}
                error={values.password.length < 1}
                required
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

export default Login;
