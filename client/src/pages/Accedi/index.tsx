import React from "react";
import { Splash } from "~/components";
import {
  Alert,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import login from "~/features/auth/login";
import { isEmpty } from "lodash";

interface UserDetails {
  email: string;
  password: string;
}

const Accedi: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    login: loading,
    loginError,
    response,
  } = useAppSelector((state) => state.auth);
  const [values, setValues] = React.useState<UserDetails>({
    email: "",
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
    dispatch(login(values));
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
                  name="email"
                  value={values.email}
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

                <Box mt={2} mb={2}>
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

              {!isEmpty(response) && (
                <Alert
                  variant="outlined"
                  severity={loginError ? "error" : "success"}
                >
                  {response}
                </Alert>
              )}

              {loading && <LinearProgress />}
            </Box>
          </Paper>
        </Container>
      </Splash>
    </>
  );
};

export default Accedi;
