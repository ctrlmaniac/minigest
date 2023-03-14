import React from "react";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { default as checkAziendaExistance } from "~/features/azienda/exists";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const Init: React.FC<Props> = ({ open, handleOpen }) => {
  const dispatch = useAppDispatch();
  const { exists: aziendaExists } = useAppSelector((state) => state.azienda);

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
        [name]: value.toString().length < 1,
      });
    }

    if (name === "idFiscaleIVAPaese") {
      setAziendaErrors({
        ...aziendaErrors,
        idFiscaleIVAPaese: value.toString().length !== 2,
      });
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
    const isAziendaOK = aziendaExists
      ? false
      : !Object.values(aziendaErrors).every((value) => value === false);
    const isSedeOK = aziendaExists
      ? false
      : !Object.values(sedeError).every((value) => value === false);

    setIsDisabled(isAziendaOK || isSedeOK);
  }, [aziendaExists, aziendaErrors, sedeError]);

  return (
    <>
      <Dialog open={open} onClose={() => handleOpen(false)} fullScreen>
        <DialogContent>
          <Box mb={3}>
            <Typography variant="h3">Benvenuto!</Typography>
            <Typography gutterBottom>
              Prima di cominciare dobbiamo aggiungere alcune informazioni
              importanti!
            </Typography>
          </Box>

          <Box mb={3}>
            <Typography variant="h6" gutterBottom>
              Aggiungi i dati della tua azienda
            </Typography>

            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}
            >
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  required
                  label="Denominazione"
                  name="denominazione"
                  value={azienda.denominazione}
                  error={aziendaErrors.denominazione}
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

              <Grid item xs={12}>
                {azienda.idFiscaleIVAPaese.toString().length > 0 &&
                  azienda.idFiscaleIVACodice.toString().length > 0 && (
                    <Alert
                      severity={aziendaExists ? "error" : "success"}
                      variant="outlined"
                    >
                      {aziendaExists
                        ? "Azienda già esistente! Contatta il moderatore per essere aggiunto alla tua azienda!"
                        : "Azienda disponibile"}
                    </Alert>
                  )}
              </Grid>
            </Grid>
          </Box>

          {!aziendaExists && (
            <Box mb={3}>
              <Typography variant="h6" gutterBottom>
                Aggiungi la sede della tua azienda!
              </Typography>

              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"
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
          )}
        </DialogContent>
        <DialogActions>
          <Button variant="contained" disabled={isDisabled}>
            Salva
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Init;
