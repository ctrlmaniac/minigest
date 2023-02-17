import {
  Alert,
  Box,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import { SaveFab } from "components";
import aziendaExists from "~/features/aziende/exists";
import update from "~/features/aziende/update";
import { unsetResponses } from "~/features/aziende/slice";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { Azienda } from "~/types";

interface Props {
  dettagli: Azienda;
}

const Form: React.FC<Props> = ({ dettagli }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { exists, putting, putError, putResponse } = useAppSelector(
    (state) => state.aziende
  );

  /**
   * AZIENDA
   */
  const [azienda, setAzienda] = React.useState({
    denominazione: dettagli.denominazione,
    idFiscaleIVAPaese: dettagli.idFiscaleIVAPaese,
    idFiscaleIVACodice: dettagli.idFiscaleIVACodice,
    codiceFiscale: dettagli.codiceFiscale,
  });

  const [aziendaErrors, setAziendaErrors] = React.useState({
    denominazione: false,
    idFiscaleIVAPaese: false,
    idFiscaleIVACodice: false,
    codiceFiscale: false,
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

    if (name === "idFiscaleIVAPaese") {
      setAziendaErrors({
        ...aziendaErrors,
        idFiscaleIVAPaese: value.toString().length != 2,
      });
    }
  };

  /**
   * SEDE
   */
  const [sede, setSede] = React.useState({
    indirizzo: dettagli.sede?.indirizzo,
    numeroCivico: dettagli.sede?.numeroCivico,
    cap: dettagli.sede?.cap,
    comune: dettagli.sede?.comune,
    provincia: dettagli.sede?.provincia,
    nazione: dettagli.sede?.nazione,
  });

  const [sedeError, setSedeError] = React.useState({
    indirizzo: false,
    numeroCivico: false,
    cap: false,
    comune: false,
    provincia: false,
    nazione: false,
  });

  const handleSedeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, required } = e.target;

    setSede({
      ...sede,
      [name]: value,
    });

    setSedeError({
      ...sedeError,
      [name]: required && value.toString().length < 1,
    });

    if (name === "cap") {
      setSedeError({
        ...sedeError,
        cap: value.toString().length !== 5,
      });
    }

    if (name === "provincia") {
      setSedeError({
        ...sedeError,
        provincia:
          value.toString().length > 0 ? value.toString().length !== 2 : false,
      });
    }

    if (name === "nazione") {
      setSedeError({
        ...sedeError,
        nazione: value.toString().length !== 2,
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
      sede: {
        id: dettagli.sede?.id,
        ...sede,
      },
    };

    dispatch(update(dettagli.id!, payload));

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
                {azienda.idFiscaleIVAPaese !== dettagli.idFiscaleIVAPaese &&
                  azienda.idFiscaleIVACodice !==
                    dettagli.idFiscaleIVACodice && (
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

      <Snackbar open={!isEmpty(putResponse)}>
        <Alert severity={putError ? "error" : "info"}>{putResponse}</Alert>
      </Snackbar>

      <SaveFab
        onClick={handleSubmit}
        disabled={exists || isDisabled}
        loading={putting}
      />
    </>
  );
};

export default Form;
