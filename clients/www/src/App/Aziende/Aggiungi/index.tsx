import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { AddFab, Page, SaveFab } from "~/components";

const AggiungiAzienda: React.FC = () => {
  const [values, setValues] = React.useState({
    denominazione: "",
    titolo: "",
    nome: "",
    cognome: "",
    codiceEORI: "",
    idFiscaleIVAPaese: "",
    idFiscaleIVACodice: "",
    codiceFiscale: "",
  });

  const [sede, setSede] = React.useState({
    indirizzo: "",
    numeroCivico: "",
    cap: "",
    comune: "",
    provincia: "",
    nazione: "",
  });

  const [errors, setErrors] = React.useState({
    denominazione: true,
    titolo: false,
    nome: true,
    cognome: true,
    codiceEORI: false,
    idFiscaleIVAPaese: true,
    idFiscaleIVACodice: true,
    codiceFiscale: true,
  });

  const [sedeErrors, setSedeErrors] = React.useState({
    indirizzo: true,
    numeroCivico: false,
    provincia: false,
    nazione: true,
    comune: true,
    cap: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, required } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: required && value.length < 1,
    });
  };

  const handleSedeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, required } = e.target;

    setSede({
      ...sede,
      [name]: value,
    });

    setSedeErrors({
      ...sedeErrors,
      [name]: required && value.length < 1,
    });
  };

  // Controlla denominazione, nome e cognome
  React.useEffect(() => {
    const { denominazione, nome, cognome } = values;

    if (
      denominazione.length === 0 &&
      nome.length === 0 &&
      cognome.length === 0
    ) {
      setErrors({
        ...errors,
        denominazione: true,
        nome: true,
        cognome: true,
      });
    } else if (
      (denominazione.length > 0 && nome.length === 0 && nome.length === 0) ||
      (nome.length > 0 && cognome.length > 0 && denominazione.length === 0)
    ) {
      setErrors({
        ...errors,
        denominazione: false,
        nome: false,
        cognome: false,
      });
    }
  }, [values]);

  // Save button
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    const areValuesOk = !Object.values(errors).every(
      (value) => value === false
    );
    const isSedeOk = !Object.values(sedeErrors).every(
      (value) => value === false
    );

    console.log(areValuesOk, isSedeOk);

    setIsDisabled(!(areValuesOk === false && isSedeOk === false));
  }, [errors, sede]);

  const handleSubmit = () => {
    console.log(values);
  };

  return (
    <>
      <Page title="aggiungi">
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            Azienda
          </Typography>

          <Paper>
            <Box p={2}>
              <Typography gutterBottom>
                Inserire Denominazione o Nome e Cognome.
              </Typography>

              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item xs={12}>
                  <TextField
                    label="Denominazione"
                    name="denominazione"
                    value={values.denominazione}
                    error={errors.denominazione}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={2}>
                  <TextField
                    label="Titolo"
                    name="titolo"
                    value={values.titolo}
                    error={errors.titolo}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                  <TextField
                    label="Nome"
                    name="nome"
                    value={values.nome}
                    error={errors.nome}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6} md={5}>
                  <TextField
                    label="Cognome"
                    name="cognome"
                    value={values.cognome}
                    error={errors.cognome}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>

            <Box p={2}>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item xs={12}>
                  <TextField
                    label="Codice EORI"
                    name="codiceEORI"
                    value={values.codiceEORI}
                    error={errors.codiceEORI}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <TextField
                    label="Paese ID Fiscale IVA"
                    name="idFiscaleIVAPaese"
                    value={values.idFiscaleIVAPaese}
                    error={errors.idFiscaleIVAPaese}
                    onChange={handleChange}
                    fullWidth
                    helperText="Es. IT"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={10}>
                  <TextField
                    label="Codice ID Fiscale IVA"
                    name="idFiscaleIVACodice"
                    value={values.idFiscaleIVACodice}
                    error={errors.idFiscaleIVACodice}
                    onChange={handleChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Codice Fiscale"
                    name="codiceFiscale"
                    value={values.codiceFiscale}
                    error={errors.codiceFiscale}
                    onChange={handleChange}
                    fullWidth
                    required
                    helperText="Se uguale a partita IVA compilare comunque"
                  />
                </Grid>
              </Grid>
            </Box>
            <Box p={2}>
              <Typography gutterBottom>Sede:</Typography>

              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="flex-start"
                spacing={2}
              >
                <Grid item xs={12} sm={9}>
                  <TextField
                    label="Indirizzo"
                    name="indirizzo"
                    value={sede.indirizzo}
                    error={sedeErrors.indirizzo}
                    onChange={handleSedeChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    label="Civico"
                    name="numeroCivico"
                    value={sede.numeroCivico}
                    error={sedeErrors.numeroCivico}
                    onChange={handleSedeChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Cap"
                    name="cap"
                    value={sede.cap}
                    error={sedeErrors.cap}
                    onChange={handleSedeChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Comune"
                    name="comune"
                    value={sede.comune}
                    error={sedeErrors.comune}
                    onChange={handleSedeChange}
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <TextField
                    label="Provincia"
                    name="provincia"
                    value={sede.provincia}
                    error={sedeErrors.provincia}
                    onChange={handleSedeChange}
                    fullWidth
                  />
                </Grid>

                <Grid item>
                  <TextField
                    label="Nazione"
                    name="nazione"
                    value={sede.nazione}
                    error={sedeErrors.nazione}
                    onChange={handleSedeChange}
                    helperText="Es. IT"
                    required
                  />
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Container>
      </Page>
      <SaveFab handleClick={handleSubmit} disabled={isDisabled} />
    </>
  );
};

export default AggiungiAzienda;
