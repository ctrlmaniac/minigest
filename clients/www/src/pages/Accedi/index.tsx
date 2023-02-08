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
} from "@mui/material";
import accountExists from "~/features/account/exists";

const Accedi: React.FC = () => {
  const dispatch = useAppDispatch();
  const { exists } = useAppSelector((state) => state.account);

  const [values, setValues] = React.useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = React.useState({
    username: true,
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
    dispatch(accountExists(values.username));
  }, [values]);

  return (
    <>
      <Container maxWidth="xs">
        <Paper>
          <Box p={2}>
            <form action="" method="post">
              <TextField
                fullWidth
                label="Email"
                name="username"
                value={values.username}
                error={errors.username}
                onChange={handleChange}
                margin="normal"
              />

              {values.username.toString().length > 1 && (
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

              <Box mt={1}>
                <Button
                  fullWidth
                  variant="contained"
                  type="submit"
                  disabled={isDisabled || !exists}
                >
                  Accedi
                </Button>
              </Box>
            </form>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Accedi;
