import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useSearchParams } from "react-router-dom";
import { Splash } from "~/components";
import checkPasswordToken from "~/features/auth/checkPasswordToken";
import resetPassword from "~/features/auth/resetPassword";
import { useAppDispatch, useAppSelector } from "~/hooks";

const PasswordReset: React.FC = () => {
  const dispatch = useAppDispatch();
  const [query, setQuery] = useSearchParams();
  const { isTokenValid, resetting, resetError, response } = useAppSelector(
    (state) => state.auth
  );

  // Controlla se il token è valido
  React.useEffect(() => {
    dispatch(checkPasswordToken(query.get("token") || ""));
  }, [query]);

  const [values, setValues] = React.useState({
    password: "",
    passwordRepeat: "",
  });

  const [errors, setErrors] = React.useState({
    password: true,
    passwordRepeat: true,
  });

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

  const [showPassword, setShowPassword] = React.useState(false);

  // Controlla se le password sono identiche
  React.useEffect(() => {
    setErrors({
      ...errors,
      password:
        values.password !== values.passwordRepeat ||
        values.password.toString().length < 1,
      passwordRepeat:
        values.password !== values.passwordRepeat ||
        values.passwordRepeat.toString().length < 1,
    });
  }, [values]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      token: query.get("token"),
      password: values.password,
    };

    dispatch(resetPassword(payload));
  };

  let content = <Typography>Caricamento in corso...</Typography>;

  if (!isTokenValid) {
    content = <Alert severity="error">Token non valido o scaduto!</Alert>;
  } else {
    content = (
      <>
        <form action="" method="post" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Password"
            name="password"
            value={values.password}
            error={errors.password}
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            margin="normal"
            helperText={
              errors.password
                ? "le password devono coincidere ed essere conformi"
                : ""
            }
          />
          <TextField
            fullWidth
            label="Ripeti Password"
            name="passwordRepeat"
            value={values.passwordRepeat}
            error={errors.passwordRepeat}
            onChange={handleChange}
            type={showPassword ? "text" : "password"}
            margin="normal"
            helperText={
              errors.passwordRepeat
                ? "le password devono coincidere ed essere conformi"
                : ""
            }
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

          <Box mt={1}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isDisabled}
              onClick={handleSubmit}
            >
              cambia password
            </Button>
          </Box>
        </form>
      </>
    );
  }

  return (
    <Splash>
      <Container maxWidth="xs">
        <Paper>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Scegli la tua nuova password
            </Typography>

            {content}
          </Box>
        </Paper>
        {resetting && <LinearProgress />}
        {resetError && (
          <Alert variant="outlined" severity="error">
            {resetError}
          </Alert>
        )}
        {response && (
          <Alert variant="outlined" severity="success">
            {response}
          </Alert>
        )}
      </Container>
    </Splash>
  );
};

export default PasswordReset;
