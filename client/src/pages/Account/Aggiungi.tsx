import {
  Alert,
  Autocomplete,
  Box,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { find, isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ErrorScreen, SaveFab } from "~/components";
import post from "~/features/account/post";
import { unsetResponse } from "~/features/account/slice";
import list from "~/features/azienda/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { AccountRuolo, Azienda } from "~/types";

interface Payload {
  nome: string;
  cognome: string;
  email: string;
  azienda: Azienda | null;
}

const AccountAggiungi: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { principal, posting, postError, response } = useAppSelector(
    (state) => state.account
  );
  const { list: aziende, listing } = useAppSelector((state) => state.azienda);

  const isAdmin = !isEmpty(
    find(
      principal?.authorities,
      (o: AccountRuolo) => o.authority === "ROLE_ADMIN"
    )
  );

  React.useEffect(() => {
    dispatch(list());
  }, []);

  const [values, setValues] = React.useState<Payload>({
    nome: "",
    cognome: "",
    email: "",
    azienda: null,
  });
  const [errors, setErrors] = React.useState({
    nome: true,
    cognome: true,
    email: true,
    azienda: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: isEmpty(value),
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
    dispatch(post(values));

    if (!postError) {
      setTimeout(() => {
        dispatch(unsetResponse());
        navigate("/account");
      }, 3000);
    }
  };

  if (!isAdmin) {
    return (
      <ErrorScreen>
        Non hai i permessi per visualizzare questa pagina
      </ErrorScreen>
    );
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Aggiungi Account</Typography>
        </Box>

        <Box mb={3}>
          <Paper>
            <Box p={2}>
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
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
                    fullWidth
                    label="Email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    error={errors.email}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Autocomplete
                    id="aziende"
                    options={aziende || []}
                    loading={listing}
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
                        label="Seleziona azienda"
                        placeholder="Azienda"
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
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>

        <SaveFab
          disabled={isDisabled}
          loading={posting}
          onClick={handleSubmit}
        />

        <Snackbar
          open={!isEmpty(response)}
          autoHideDuration={3000}
          onClose={() => dispatch(unsetResponse())}
        >
          <Alert severity="info">{response}</Alert>
        </Snackbar>
      </>
    );
  }
};

export default AccountAggiungi;
