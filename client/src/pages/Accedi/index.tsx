import React from "react";
import { Splash } from "~/components";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { IconAt, IconEye, IconEyeClosed } from "@tabler/icons-react";

const Accedi: React.FC = () => {
  const [values, setValues] = React.useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(values);
  };

  return (
    <>
      <Splash>
        <Container maxWidth="xs">
          <Paper>
            <Box p={2}>
              <Typography variant="h6">Accedi a minigest</Typography>
              <form action="/accedi" method="post" onSubmit={handleSubmit}>
                <TextField
                  required
                  type="email"
                  label="email"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                />

                <TextField
                  required
                  type={showPassword ? "text" : "password"}
                  label="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? <IconEye /> : <IconEyeClosed />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />

                <Box mt={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Accedi
                  </Button>
                </Box>
              </form>
            </Box>
          </Paper>
        </Container>
      </Splash>
    </>
  );
};

export default Accedi;
