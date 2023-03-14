import {
  Alert,
  Autocomplete,
  Box,
  FormControlLabel,
  FormGroup,
  Grid,
  Paper,
  Snackbar,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { findIndex, isEmpty } from "lodash";
import React from "react";
import { SaveFab } from "~/components";
import { default as listAziende } from "~/features/azienda/list";
import { default as listRuoli } from "~/features/accountRuolo/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { Account, AccountRuolo, Azienda } from "~/types";
import update from "~/features/account/update";
import { unsetResponse } from "~/features/account/slice";
import { useNavigate } from "react-router-dom";

interface Props {
  dettagli: Account;
}

const AccountModificaForm: React.FC<Props> = ({ dettagli }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { principal, putting, putError, response } = useAppSelector(
    (state) => state.account
  );
  const { list: aziende, listing: listingAziende } = useAppSelector(
    (state) => state.azienda
  );
  const { list: ruoli, listing: listingRuoli } = useAppSelector(
    (state) => state.accountRuolo
  );

  const isAdmin = findIndex(
    principal?.authorities,
    (o: AccountRuolo) => o.authority === "ROLE_ADMIN"
  );

  React.useEffect(() => {
    dispatch(listAziende());
    dispatch(listRuoli());
  }, []);

  const [values, setValues] = React.useState<Account>({ ...dettagli });
  const [errors, setErrors] = React.useState({
    nome: false,
    cognome: false,
    email: false,
    azienda: false,
    authorities: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    if (isEmpty(value)) {
      setErrors({
        ...errors,
        [name]: true,
      });
    }
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.checked,
    });
  };

  /**
   * CHECK
   * Controlla che il form sia completo
   */
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    setIsDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  /**
   * SUBMIT
   */
  const handleSubmit = () => {
    dispatch(update(dettagli.id!, values));

    if (!putError) {
      setTimeout(() => {
        dispatch(unsetResponse());
        navigate(`/account/dettagli/${dettagli.id!}`);
      }, 3000);
    }
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Modifica Account</Typography>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Typography variant="h6" sx={{ marginBottom: 3 }}>
              Dettagli anagrafici
            </Typography>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Nome"
                  name="nome"
                  value={values.nome}
                  onChange={handleChange}
                  error={errors.nome}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Cognome"
                  name="cognome"
                  value={values.cognome}
                  onChange={handleChange}
                  error={errors.cognome}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  type="email"
                  label="Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      {isAdmin && (
        <>
          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <Typography variant="h6" sx={{ marginBottom: 3 }}>
                  Cambia azienda
                </Typography>

                <Autocomplete
                  id="aziende"
                  options={aziende || []}
                  loading={listingAziende}
                  noOptionsText="non ci sono altre aziende"
                  isOptionEqualToValue={(option: Azienda, value: Azienda) =>
                    option.denominazione === value.denominazione
                  }
                  getOptionLabel={(option) => {
                    let opt = option as Azienda;
                    return opt.denominazione;
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Seleziona aziende"
                      placeholder="Aziende"
                      error={errors.azienda}
                    />
                  )}
                  value={values.azienda}
                  onChange={(event, newValue) => {
                    setValues({ ...values, azienda: newValue! });
                    setErrors({
                      ...errors,
                      azienda: isEmpty(newValue),
                    });
                  }}
                />
              </Box>
            </Paper>
          </Box>

          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Modifica Ruoli
                </Typography>

                <Autocomplete
                  multiple
                  id="ruoli"
                  options={ruoli || []}
                  loading={listingRuoli}
                  noOptionsText="Non ci sono altri ruoli"
                  isOptionEqualToValue={(
                    option: AccountRuolo,
                    value: AccountRuolo
                  ) => option.authority === value.authority}
                  getOptionLabel={(option) => {
                    let opt = option as AccountRuolo;
                    return opt.authority;
                  }}
                  value={values.authorities}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Seleziona Ruoli"
                      placeholder="Ruoli"
                      error={errors.authorities}
                    />
                  )}
                  onChange={(event, newValue) => {
                    setValues({
                      ...values,
                      authorities: newValue,
                    });
                    setErrors({
                      ...errors,
                      authorities: isEmpty(newValue),
                    });
                  }}
                />
              </Box>
            </Paper>
          </Box>

          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.enabled}
                        onChange={handleSwitchChange}
                        name="enabled"
                      />
                    }
                    label="Account abilitato"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.credentialsNonExpired}
                        onChange={handleSwitchChange}
                        name="credentialsNonExpired"
                      />
                    }
                    label="Credenziali non scadute"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.accountNonExpired}
                        onChange={handleSwitchChange}
                        name="accountNonExpired"
                      />
                    }
                    label="Account non scaduto"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.accountNonLocked}
                        onChange={handleSwitchChange}
                        name="accountNonLocked"
                      />
                    }
                    label="Account non bloccato"
                  />
                </FormGroup>
              </Box>
            </Paper>
          </Box>
        </>
      )}

      <SaveFab disabled={isDisabled} loading={putting} onClick={handleSubmit} />

      <Snackbar
        open={!isEmpty(response)}
        autoHideDuration={3000}
        onClose={() => dispatch(unsetResponse())}
      >
        <Alert severity="info">{response}</Alert>
      </Snackbar>
    </>
  );
};

export default AccountModificaForm;
