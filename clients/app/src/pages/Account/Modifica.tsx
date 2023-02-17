import {
  Alert,
  Box,
  Grid,
  LinearProgress,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { SaveFab } from "components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import accountExists from "~/features/auth/exists";
import update from "~/features/account/update";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";

const AccountModifica: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { dettagli, updating, updateError } = useAppSelector(
    (state) => state.account
  );
  const { exists } = useAppSelector((state) => state.auth);

  const [values, setValues] = React.useState({
    ...dettagli,
  });

  React.useEffect(() => {
    setValues({
      ...dettagli,
    });
  }, [dettagli]);

  const [errors, setErrors] = React.useState({
    nome: false,
    cognome: false,
    email: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (name === "email") {
      const regex =
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

      setErrors({
        ...errors,
        email: !regex.test(value),
      });
    } else {
      setErrors({
        ...errors,
        [name]: value.toString().length < 1,
      });
    }
  };

  const [isDisabled, setIsDisabled] = React.useState(true);

  // Imposta isDisabled
  React.useEffect(() => {
    setIsDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  // Controlla se l'email esiste
  React.useEffect(() => {
    dispatch(accountExists(values.email));
  }, [values]);

  const handleSubmit = () => {
    dispatch(update(dettagli?.id!, values));

    setTimeout(() => {
      navigate("/account");
    }, 1000);
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Modifica Account</Typography>
      </Box>

      <Paper>
        <Box p={2}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <Grid item xs={12} sm={6}>
              <TextField
                label="Nome"
                name="nome"
                value={values.nome}
                error={errors.nome}
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Cognome"
                name="cognome"
                value={values.cognome}
                error={errors.cognome}
                fullWidth
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                name="email"
                value={values.email}
                error={errors.email}
                fullWidth
                onChange={handleChange}
                type="email"
                helperText={errors.email ? "email non conforme" : ""}
              />
              {values.email !== dettagli?.email && (
                <Alert severity={exists ? "error" : "success"}>
                  {exists ? "email non disponibile" : "email disponibile"}
                </Alert>
              )}
            </Grid>
          </Grid>
        </Box>

        {updating && <LinearProgress />}
      </Paper>

      {!isEmpty(updateError) && (
        <Box mt={2}>
          <Alert severity="error">{updateError}</Alert>
        </Box>
      )}

      <SaveFab
        onClick={handleSubmit}
        disabled={isDisabled || (values.email !== dettagli?.email && exists)}
      />
    </>
  );
};

export default AccountModifica;
