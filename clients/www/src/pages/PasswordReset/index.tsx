import React from "react";
import { Alert, Box, Button, Container, Paper, TextField } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { isEmpty } from "lodash";
import { useAppDispatch, useAppSelector } from "~/hooks";
import checkToken from "~/features/account/checkToken";
import updatePassword from "~/features/account/updatePassword";

const PasswordReset: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isPwResetTokenValid, pwResetTokenMessage, isPwReset, pwReset } =
    useAppSelector((state) => state.account);
  const [query, setQuery] = useSearchParams();

  const [values, setValues] = React.useState({
    password: "",
    passwordRepeat: "",
  });

  const [errors, setErrors] = React.useState({
    password: true,
    passwordRepeat: true,
  });

  React.useEffect(() => {
    if (!isEmpty(query.get("token"))) {
      dispatch(checkToken(query.get("token")!));
    }
  }, [query]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

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

  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    setIsDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  const handleSubmit = () => {
    const payload = {
      token: query.get("token")!,
      password: values.password,
    };

    dispatch(updatePassword(payload));
  };

  if (isEmpty(query.get("token"))) {
    return (
      <Container maxWidth="xs">
        <Alert severity="error">Token non valido!</Alert>
      </Container>
    );
  } else {
    return (
      <Container maxWidth="xs">
        <Box mb={3}>
          <Alert severity={isPwResetTokenValid ? "success" : "error"}>
            {pwResetTokenMessage}
          </Alert>
        </Box>

        {isPwResetTokenValid && (
          <>
            <Paper>
              <Box p={2}>
                <TextField
                  fullWidth
                  label="Nuova Password"
                  name="password"
                  value={values.password}
                  error={errors.password}
                  margin="normal"
                  onChange={handleChange}
                  type="password"
                />
                <TextField
                  fullWidth
                  label="Ripeti Password"
                  name="passwordRepeat"
                  value={values.passwordRepeat}
                  error={errors.passwordRepeat}
                  margin="normal"
                  onChange={handleChange}
                  type="password"
                />
                <Alert
                  severity={isDisabled ? "error" : "success"}
                  sx={{ marginBottom: 2 }}
                >
                  {isDisabled
                    ? "le password devono coincidere"
                    : "password conforme"}
                </Alert>
                <Button
                  fullWidth
                  variant="contained"
                  disabled={isDisabled}
                  onClick={() => handleSubmit()}
                >
                  Resetta password
                </Button>
              </Box>
            </Paper>

            <Box mt={2}>
              <Alert severity={isPwReset ? "success" : "error"}>
                {pwReset}
              </Alert>
            </Box>
          </>
        )}
      </Container>
    );
  }
};

export default PasswordReset;
