import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  onClose: Function;
  onSave: Function;
}

const RepartoAltriEnti: React.FC<Props> = ({ open, onClose, onSave }) => {
  const [values, setValues] = React.useState({
    codiceEnte: "",
    codiceSede: "",
    causaleContributo: "",
    codicePosizione: "",
    meseRiferimentoDa: "01",
    annoRiferimentoDa: new Date().getFullYear(),
    meseRiferimentoA: "12",
    annoRiferimentoA: new Date().getFullYear(),
    importoDebito: "",
    importoCredito: 0,
  });

  const [errors, setErrors] = React.useState({
    codiceEnte: true,
    codiceSede: true,
    causaleContributo: true,
    codicePosizione: true,
    meseRiferimentoDa: false,
    annoRiferimentoDa: false,
    meseRiferimentoA: false,
    annoRiferimentoA: false,
    importoDebito: true,
    importoCredito: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { required, name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (required) {
      setErrors({
        ...errors,
        [name]: value.toString().length < 1,
      });
    }
  };

  // Save button
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    setIsDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  const handleClose = () => {
    onClose(false);
    setValues({
      codiceEnte: "",
      codiceSede: "",
      causaleContributo: "",
      codicePosizione: "",
      meseRiferimentoDa: "01",
      annoRiferimentoDa: new Date().getFullYear(),
      meseRiferimentoA: "12",
      annoRiferimentoA: new Date().getFullYear(),
      importoDebito: "",
      importoCredito: 0,
    });
    setErrors({
      codiceEnte: true,
      codiceSede: true,
      causaleContributo: true,
      codicePosizione: true,
      meseRiferimentoDa: false,
      annoRiferimentoDa: false,
      meseRiferimentoA: false,
      annoRiferimentoA: false,
      importoDebito: true,
      importoCredito: false,
    });
  };

  const handleSubmit = () => {
    onSave(values);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogContent>
        <TextField
          fullWidth
          required
          label="Codice Ente"
          name="codiceEnte"
          value={values.codiceEnte}
          error={errors.codiceEnte}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          required
          label="Codice Sede"
          name="codiceSede"
          value={values.codiceSede}
          error={errors.codiceSede}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          required
          label="Causale Contributo"
          name="causaleContributo"
          value={values.causaleContributo}
          error={errors.causaleContributo}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          required
          label="Codice Posizione"
          name="codicePosizione"
          value={values.codicePosizione}
          error={errors.codicePosizione}
          onChange={handleChange}
          margin="normal"
        />

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
          sx={{ mt: 0.5 }}
        >
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              label="Dal mese"
              name="meseRiferimentoDa"
              value={values.meseRiferimentoDa}
              error={errors.meseRiferimentoDa}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              label="Dall'anno"
              name="annoRiferimentoDa"
              value={values.annoRiferimentoDa}
              error={errors.annoRiferimentoDa}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              label="Al mese"
              name="meseRiferimentoA"
              value={values.meseRiferimentoA}
              error={errors.meseRiferimentoA}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              label="All'anno"
              name="annoRiferimentoA"
              value={values.annoRiferimentoA}
              error={errors.annoRiferimentoA}
              onChange={handleChange}
            />
          </Grid>
        </Grid>

        <TextField
          fullWidth
          required
          label="Importo a debito"
          name="importoDebito"
          value={values.importoDebito}
          error={errors.importoDebito}
          onChange={handleChange}
          margin="normal"
          type="number"
          inputProps={{ step: 0.01 }}
        />

        <TextField
          fullWidth
          required
          label="Importo a credito"
          name="importoCredito"
          value={values.importoCredito}
          error={errors.importoCredito}
          onChange={handleChange}
          margin="normal"
          type="number"
          inputProps={{ step: 0.01 }}
        />
      </DialogContent>
      <DialogActions>
        <Button fullWidth disabled={isDisabled} onClick={handleSubmit}>
          salva
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RepartoAltriEnti;
