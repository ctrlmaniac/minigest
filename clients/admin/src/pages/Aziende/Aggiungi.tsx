import {
  Alert,
  Box,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { SaveFab } from "components";
import aziendaExists from "~/features/aziende/exists";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import post from "~/features/aziende/post";
import { unsetResponses } from "~/features/aziende/slice";
import { useNavigate } from "react-router-dom";

const AziendaAggiungi: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { exists, posting, postError, postResponse } = useAppSelector(
    (state) => state.aziende
  );

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
      aziendaExists(azienda.idFiscaleIVAPaese, azienda.idFiscaleIVACodice)
    );
  }, [azienda]);

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
   * CHECK
   * Controlla che il form sia completo
   */
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    const isAziendaOK = !Object.values(aziendaErrors).every(
      (value) => value === false
    );
    const isSedeOK = !Object.values(sedeError).every(
      (value) => value === false
    );

    setIsDisabled(isAziendaOK || isSedeOK);
  }, [aziendaErrors, sedeError]);

  /**
   * SUBMIT
   */
  const handleSubmit = () => {
    const payload = {
      ...azienda,
      sede: sede,
    };

    dispatch(post(payload));

    setTimeout(() => {
      dispatch(unsetResponses());
      navigate("/aziende");
    }, 1000);
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Aggiungi Azienda</Typography>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
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
                    <Alert severity={exists ? "error" : "success"}>
                      {exists
                        ? "Azienda già esistente!"
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

      <Snackbar open={!isEmpty(postResponse)}>
        <Alert severity={postError ? "error" : "info"}>{postResponse}</Alert>
      </Snackbar>

      <SaveFab
        onClick={handleSubmit}
        disabled={exists || isDisabled}
        loading={posting}
      />
    </>
  );
};

export default AziendaAggiungi;
