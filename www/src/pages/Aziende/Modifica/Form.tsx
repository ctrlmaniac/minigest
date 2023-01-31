import { Box, Paper, TextField, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { SaveFab } from "~/components";
import update from "~/features/aziende/update";
import { useAppDispatch } from "~/hooks";
import { Azienda } from "~/types";

interface Props {
  dettagli: Azienda;
}

const AziendeModificaForm: React.FC<Props> = ({ dettagli }) => {
  const dispatch = useAppDispatch();

  const [values, setValues] = React.useState<Azienda>({ ...dettagli });
  const [errors, setErrors] = React.useState({
    denominazione: isEmpty(dettagli.denominazione),
    codiceFiscale: isEmpty(dettagli.codiceFiscale),
    idFiscaleIVAPaese: isEmpty(dettagli.idFiscaleIVAPaese),
    idFiscaleIVACodice: isEmpty(dettagli.idFiscaleIVACodice),
    sede_indirizzo: isEmpty(dettagli.sede?.indirizzo),
    sede_cap: isEmpty(dettagli.sede?.cap),
    sede_comune: isEmpty(dettagli.sede?.comune),
    sede_nazione: isEmpty(dettagli.sede?.nazione),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, required } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (required) {
      setErrors({
        ...errors,
        [name]: value.length < 1,
      });
    }
  };

  const handleSedeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, required } = e.target;

    setValues({
      ...values,
      sede: {
        ...values.sede!,
        [name]: value,
      },
    });

    if (required) {
      const key = `sede_${name}`;

      setErrors({
        ...errors,
        [key]: value.length < 1,
      });
    }
  };

  // Save button
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    setIsDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  const handleSubmit = () => {
    dispatch(update(dettagli.id!, values));
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Modifica Azienda</Typography>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <TextField
              label="Titolo"
              name="titolo"
              value={values.titolo}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Denominazione, nome o cognome"
              name="denominazione"
              value={values.denominazione}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={errors.denominazione}
            />
          </Box>
        </Paper>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <TextField
              label="Codice EORI"
              name="codiceEORI"
              value={values.codiceEORI}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Codice Fiscale"
              name="codiceFiscale"
              value={values.codiceFiscale}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
              error={errors.codiceFiscale}
            />

            <TextField
              label="ID Fiscale IVA Paese"
              name="idFiscaleIVAPaese"
              value={values.idFiscaleIVAPaese}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={errors.idFiscaleIVAPaese}
              required
            />

            <TextField
              label="ID Fiscale IVA Codice"
              name="idFiscaleIVACodice"
              value={values.idFiscaleIVACodice}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={errors.idFiscaleIVACodice}
              required
            />
          </Box>
        </Paper>
      </Box>

      <Box>
        <Paper>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Sede:
            </Typography>

            <TextField
              label="Indirizzo"
              name="indirizzo"
              value={values.sede?.indirizzo}
              onChange={handleSedeChange}
              fullWidth
              margin="normal"
              error={errors.sede_indirizzo}
              required
            />

            <TextField
              label="Num. Civico"
              name="numeroCivico"
              value={values.sede?.numeroCivico}
              onChange={handleSedeChange}
              fullWidth
              margin="normal"
            />

            <TextField
              label="CAP"
              name="cap"
              value={values.sede?.cap}
              onChange={handleSedeChange}
              fullWidth
              margin="normal"
              required
              error={errors.sede_cap}
            />

            <TextField
              label="Comune"
              name="comune"
              value={values.sede?.comune}
              onChange={handleSedeChange}
              fullWidth
              margin="normal"
              required
              error={errors.sede_comune}
            />

            <TextField
              label="Provincia"
              name="provincia"
              value={values.sede?.provincia}
              onChange={handleSedeChange}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Nazione"
              name="nazione"
              value={values.sede?.nazione}
              onChange={handleSedeChange}
              fullWidth
              margin="normal"
              helperText="Es. IT"
              required
              error={errors.sede_nazione}
            />
          </Box>
        </Paper>
      </Box>

      <SaveFab handleClick={handleSubmit} disabled={isDisabled} />
    </>
  );
};

export default AziendeModificaForm;
