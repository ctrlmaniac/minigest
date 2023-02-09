import React from "react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import {
  Container,
  TextField,
  Alert,
  Paper,
  Box,
  Button,
  FormControlLabel,
  Checkbox,
  LinearProgress,
} from "@mui/material";
import accountExists from "~/features/auth/exists";
import login from "~/features/auth/login";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";

const Accedi: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    exists,
    login: status,
    loginError,
    loginResponse,
  } = useAppSelector((state) => state.account);

  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    email: true,
    password: true,
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const [isDisabled, setIsDisabled] = React.useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: value.toString().length < 1,
    });
  };

  // Imposta isDisabled
  React.useEffect(() => {
    setIsDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  // Controlla se l'email esiste
  React.useEffect(() => {
    dispatch(accountExists(values.email));
  }, [values]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    dispatch(login(values));
  };

  return (
    <>
      <Container maxWidth="xs">
        <Paper>
          <form onSubmit={handleSubmit} method="post">
            <Box p={2}>
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={values.email}
                error={errors.email}
                onChange={handleChange}
                margin="normal"
              />

              {values.email.toString().length > 1 && (
                <Alert severity={exists ? "success" : "error"}>
                  {exists ? "Utente esistente!" : "Utente non esistente!"}
                </Alert>
              )}

              <TextField
                fullWidth
                label="Password"
                name="password"
                value={values.password}
                error={errors.password}
                onChange={handleChange}
                margin="normal"
                type={showPassword ? "text" : "password"}
              />
              <FormControlLabel
                value="mostra password"
                control={
                  <Checkbox
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setShowPassword(e.target.checked)
                    }
                  />
                }
                label="mostra password"
              />

              <Box mt={1} mb={2}>
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  disabled={isDisabled || !exists}
                  onClick={handleSubmit}
                >
                  Accedi
                </Button>
              </Box>
              <Box>
                <Button
                  fullWidth
                  variant="text"
                  onClick={() => navigate("/account/password/forgot")}
                >
                  password dimenticata
                </Button>
              </Box>
              {!isEmpty(loginResponse) && (
                <Alert
                  severity={loginError ? "error" : "success"}
                  sx={{ marginTop: 2 }}
                >
                  {loginResponse}
                </Alert>
              )}
            </Box>
          </form>
        </Paper>
        {status && <LinearProgress />}
      </Container>
    </>
  );
};

export default Accedi;
