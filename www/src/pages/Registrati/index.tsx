import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { HtmlHTMLAttributes } from "react";
import { SaveFab } from "~/components";
import { logoTheme } from "~/context/theme";

const Registrati: React.FC = () => {
  const [account, setAccount] = React.useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const [accountErrors, setAccountErrors] = React.useState({
    fname: true,
    lname: true,
    email: true,
    password: true,
    passwordRepeat: true,
  });

  const handleAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAccount({
      ...account,
      [name]: value,
    });

    setAccountErrors({
      ...accountErrors,
      [name]: value.toString().length < 1,
    });
  };

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

  // Azienda
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

  const handleAziendaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAzienda({
      ...azienda,
      [name]: value,
    });

    setAziendaErrors({
      ...aziendaErrors,
      [name]: value.toString().length < 1,
    });
  };

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

  const [negozio, setNegozio] = React.useState({
    nome: "",
  });

  const [negozioError, setNegozioError] = React.useState({
    nome: true,
  });

  const handleNegozioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNegozio({
      ...negozio,
      nome: e.target.value,
    });

    setNegozioError({
      ...negozioError,
      nome: e.target.value.toString().length < 1,
    });
  };

  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    const isAccountOK = !Object.values(accountErrors).every(
      (value) => value === false
    );
    const isAziendaOK = !Object.values(aziendaErrors).every(
      (value) => value === false
    );
    const isSedeOK = !Object.values(sedeError).every(
      (value) => value === false
    );
    const isNegozioOk = !Object.values(negozioError).every(
      (value) => value === false
    );

    setIsDisabled(isAccountOK || isAziendaOK || isSedeOK || isNegozioOk);
  }, [accountErrors, aziendaErrors, sedeError, negozioError]);

  const handleSubmit = () => {
    const object = {
      account: {
        fname: account.fname,
        lname: account.lname,
        email: account.email,
        password: account.password,
      },
      azienda: azienda,
      sede: sede,
      negozio: {
        ...negozio,
      },
    };

    console.log(object);
  };

  return (
    <>
      <Container>
        <Box mb={4}>
          <ThemeProvider theme={logoTheme}>
            <Typography variant="h1" component="h1" align="center" mt={3}>
              minigest
            </Typography>
          </ThemeProvider>

          <Typography variant="h6" component="p" align="center" gutterBottom>
            registrati
          </Typography>
        </Box>

        <Box mb={3}>
          <Paper>
            <Box p={2}>
              <Typography variant="h6" gutterBottom>
                Dati personali
              </Typography>

              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Nome"
                    name="fname"
                    value={account.fname}
                    error={accountErrors.fname}
                    fullWidth
                    onChange={handleAccountChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Cognome"
                    name="lname"
                    value={account.lname}
                    error={accountErrors.lname}
                    fullWidth
                    onChange={handleAccountChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    name="email"
                    value={account.email}
                    error={accountErrors.email}
                    fullWidth
                    onChange={handleAccountChange}
                    type="email"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Password"
                    name="password"
                    value={account.password}
                    error={accountErrors.password}
                    fullWidth
                    onChange={handleAccountChange}
                    type="password"
                    helperText={
                      accountErrors.password
                        ? "le password devono coincidere"
                        : ""
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Ripeti password"
                    name="passwordRepeat"
                    value={account.passwordRepeat}
                    error={accountErrors.passwordRepeat}
                    fullWidth
                    onChange={handleAccountChange}
                    type="password"
                    helperText={
                      accountErrors.passwordRepeat
                        ? "le password devono coincidere"
                        : ""
                    }
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
                    error={sedeError.indirizzo}
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

              <TextField
                fullWidth
                label="Nome Negozio"
                name="nome"
                value={negozio.nome}
                error={negozioError.nome}
                onChange={handleNegozioChange}
              />
            </Box>
          </Paper>
        </Box>
      </Container>

      <SaveFab handleClick={handleSubmit} disabled={isDisabled} />
    </>
  );
};

export default Registrati;
