import React from "react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { Box, Grid, Paper, TextField, Typography, Alert } from "@mui/material";
import { default as checkAccountExistance } from "~/features/auth/exists";
import { default as checkAziendaExistance } from "~/features/aziende/exists";
import { SaveFab } from "components";
import register from "~/features/auth/register";
import { isEmpty } from "lodash";

const Registrati: React.FC = () => {
  const dispatch = useAppDispatch();

  const { exists: accountExists } = useAppSelector((state) => state.account);
  const { exists: aziendaExists } = useAppSelector((state) => state.aziende);

  /**
   * ACCOUNT
   */
  const [account, setAccount] = React.useState({
    nome: "",
    cognome: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const [accountErrors, setAccountErrors] = React.useState({
    nome: true,
    cognome: true,
    email: true,
    password: true,
    passwordRepeat: true,
  });

  // Controlla se l'account esiste
  React.useEffect(() => {
    dispatch(checkAccountExistance(account.email));
  }, [account]);

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setAccount({
      ...account,
      [name]: value,
    });

    setAccountErrors({
      ...accountErrors,
      [name]: value.toString().length < 1,
    });
  };

  // Controlla se le password sono identiche
  React.useEffect(() => {
    setAccountErrors({
      ...accountErrors,
      password:
        account.password !== account.passwordRepeat ||
        account.password.toString().length < 1,
      passwordRepeat:
        account.password !== account.passwordRepeat ||
        account.passwordRepeat.toString().length < 1,
    });
  }, [account]);

  /**
   * AZIENDA
   */
  const [azienda, setAzienda] = React.useState({
    denominazione: "",
    idFiscaleIVAPaese: "IT",
    idFiscaleIVACodice: "",
    codiceFiscale: "",
  });

  const [aziendaErrors, setAziendaErrors] = React.useState({
    denominazione: true,
    idFiscaleIVAPaese: false,
    idFiscaleIVACodice: true,
    codiceFiscale: true,
  });

  // Controlla se l'azienda esiste
  React.useEffect(() => {
    dispatch(
      checkAziendaExistance(
        azienda.idFiscaleIVAPaese,
        azienda.idFiscaleIVACodice
      )
    );
  }, [azienda]);

  const handleAziendaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAzienda({
      ...azienda,
      [name]: value,
    });

    if (!aziendaExists) {
      setAziendaErrors({
        ...aziendaErrors,
        [name]: value.toString().length < 1,
      });
    } else {
      setAziendaErrors({
        ...aziendaErrors,
        denominazione: false,
        codiceFiscale: false,
      });

      if (name === "idFiscaleIVACodice" || name == "idFiscaleIVAPaese") {
        setAziendaErrors({
          ...aziendaErrors,
          [name]: value.toString().length < 1,
        });
      }
    }
  };

  /**
   * SEDE
   */
  const [sede, setSede] = React.useState({
    indirizzo: "",
    numeroCivico: "",
    cap: "",
    comune: "",
    provincia: "",
    nazione: "IT",
  });

  const [sedeError, setSedeError] = React.useState({
    indirizzo: true,
    numeroCivico: false,
    cap: true,
    comune: true,
    provincia: false,
    nazione: false,
  });

  const handleSedeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, required } = e.target;

    setSede({
      ...sede,
      [name]: value,
    });

    if (required) {
      setSedeError({
        ...sedeError,
        [name]: value.toString().length < 1,
      });
    }
  };

  /**
   * NEGOZIO
   */
  const [negozio, setNegozio] = React.useState({
    nome: "",
  });

  const handleNegozioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNegozio({
      ...negozio,
      nome: value,
    });
  };

  /**
   * CHECK
   * Controlla che il form sia completo
   */
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    const isAccountOK = !Object.values(accountErrors).every(
      (value) => value === false
    );
    const isAziendaOK = aziendaExists
      ? false
      : !Object.values(aziendaErrors).every((value) => value === false);
    const isSedeOK = aziendaExists
      ? false
      : !Object.values(sedeError).every((value) => value === false);

    console.log(isAccountOK, isAziendaOK, isSedeOK);
    setIsDisabled(isAccountOK || isAziendaOK || isSedeOK);
  }, [aziendaExists, accountErrors, aziendaErrors, sedeError]);

  /**
   * SUBMIT
   */
  const handleSubmit = () => {
    let payload: any = {
      nome: account.nome,
      cognome: account.cognome,
      email: account.email,
      password: account.password,
    };

    if (!aziendaExists) {
      let aziendaPayload: any = {
        ...azienda,
        sede: { ...sede },
      };

      if (!isEmpty(negozio.nome)) {
        aziendaPayload = {
          ...aziendaPayload,
          negozi: [{ ...negozio }],
        };
      }

      payload = {
        ...payload,
        azienda: {
          ...azienda,
          sede: { ...sede },
        },
      };
    } else {
      payload = {
        ...payload,
        addMeTo: {
          idFiscaleIVAPaese: azienda.idFiscaleIVAPaese,
          idFiscaleIVACodice: azienda.idFiscaleIVACodice,
        },
      };
    }

    dispatch(register(payload));
  };

  return (
    <>
      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Dati Personali
            </Typography>

            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nome"
                  name="nome"
                  value={account.nome}
                  error={accountErrors.nome}
                  onChange={handleAccountChange}
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Cognome"
                  name="cognome"
                  value={account.cognome}
                  error={accountErrors.cognome}
                  onChange={handleAccountChange}
                  required
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  value={account.email}
                  error={accountErrors.email}
                  onChange={handleAccountChange}
                  type="email"
                  required
                />
                {account.email.toString().length > 0 && (
                  <Alert
                    severity={accountExists ? "error" : "success"}
                    variant="outlined"
                  >
                    {accountExists
                      ? "Account già registrato!"
                      : "Account disponibile"}
                  </Alert>
                )}
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  value={account.password}
                  error={accountErrors.password}
                  onChange={handleAccountChange}
                  type="password"
                  helperText={
                    accountErrors.password
                      ? "le password devono coincidere"
                      : "password conforme"
                  }
                  required
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Ripeti Password"
                  name="passwordRepeat"
                  value={account.passwordRepeat}
                  error={accountErrors.passwordRepeat}
                  onChange={handleAccountChange}
                  type="password"
                  helperText={
                    accountErrors.password
                      ? "le password devono coincidere"
                      : "password conforme"
                  }
                  required
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Aggiungi la tua azienda
            </Typography>

            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12}>
                <TextField
                  label="Denominazione o Nome e Cognome"
                  name="denominazione"
                  value={azienda.denominazione}
                  error={aziendaErrors.denominazione}
                  fullWidth
                  onChange={handleAziendaChange}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  label="Nazione"
                  name="idFiscaleIVAPaese"
                  value={azienda.idFiscaleIVAPaese}
                  error={aziendaErrors.idFiscaleIVAPaese}
                  fullWidth
                  onChange={handleAziendaChange}
                />
              </Grid>
              <Grid item xs={10}>
                <TextField
                  label="Partita IVA"
                  name="idFiscaleIVACodice"
                  value={azienda.idFiscaleIVACodice}
                  error={aziendaErrors.idFiscaleIVACodice}
                  fullWidth
                  onChange={handleAziendaChange}
                />
              </Grid>
              <Grid item xs={12}>
                {azienda.idFiscaleIVAPaese.toString().length > 0 &&
                  azienda.idFiscaleIVACodice.toString().length > 0 && (
                    <Alert
                      severity={aziendaExists ? "error" : "success"}
                      variant="outlined"
                    >
                      {aziendaExists
                        ? "Azienda già esistente! Dovrai essere aggiunto manualmente da un nostro moderatore!"
                        : "Azienda disponibile"}
                    </Alert>
                  )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Codice Fiscale"
                  name="codiceFiscale"
                  value={azienda.codiceFiscale}
                  error={aziendaErrors.codiceFiscale}
                  fullWidth
                  onChange={handleAziendaChange}
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      {!aziendaExists && (
        <>
          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <Typography gutterBottom variant="h6">
                  Aggiungi la sede della tua azienda
                </Typography>

                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={10}>
                    <TextField
                      fullWidth
                      label="Indirizzo"
                      name="indirizzo"
                      value={sede.indirizzo}
                      error={sedeError.indirizzo}
                      required
                      onChange={handleSedeChange}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <TextField
                      fullWidth
                      label="N. Civico"
                      name="numeroCivico"
                      value={sede.numeroCivico}
                      error={sedeError.numeroCivico}
                      onChange={handleSedeChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="CAP"
                      name="cap"
                      value={sede.cap}
                      error={sedeError.cap}
                      required
                      onChange={handleSedeChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Comune"
                      name="comune"
                      value={sede.comune}
                      error={sedeError.comune}
                      required
                      onChange={handleSedeChange}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Provincia"
                      name="provincia"
                      value={sede.provincia}
                      error={sedeError.provincia}
                      onChange={handleSedeChange}
                      helperText="Esempio: BS"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Nazione"
                      name="nazione"
                      value={sede.nazione}
                      error={sedeError.nazione}
                      onChange={handleSedeChange}
                      required
                      helperText="Esempio: IT"
                    />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>

          <Box mb={16}>
            <Paper>
              <Box p={2}>
                <Typography gutterBottom variant="h6">
                  Aggiungi il nome del tuo negozio
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  Se non hai un negozio non aggiungerlo
                </Typography>

                <TextField
                  fullWidth
                  label="Nome Negozio"
                  name="nome"
                  value={negozio.nome}
                  onChange={handleNegozioChange}
                />
              </Box>
            </Paper>
          </Box>
        </>
      )}

      <SaveFab onClick={handleSubmit} disabled={isDisabled || accountExists} />
    </>
  );
};

export default Registrati;
