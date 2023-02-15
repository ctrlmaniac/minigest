import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  onClose: Function;
  onSave: Function;
}

const RepartoInail: React.FC<Props> = ({ open, onClose, onSave }) => {
  const [values, setValues] = React.useState({
    codiceSede: "",
    codiceDitta: "",
    cc: "",
    riferimento: "",
    causale: "",
    importoDebito: "",
    importoCredito: 0,
  });

  const [errors, setErrors] = React.useState({
    codiceSede: true,
    codiceDitta: true,
    cc: true,
    riferimento: false,
    causale: true,
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
      codiceSede: "",
      codiceDitta: "",
      cc: "",
      riferimento: "",
      causale: "",
      importoDebito: "",
      importoCredito: 0,
    });
    setErrors({
      codiceSede: true,
      codiceDitta: true,
      cc: true,
      riferimento: false,
      causale: true,
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
          label="Codice Ditta"
          name="codiceDitta"
          value={values.codiceDitta}
          error={errors.codiceDitta}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          required
          label="C.C."
          name="cc"
          value={values.cc}
          error={errors.cc}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Numero di riferimento"
          name="riferimento"
          value={values.riferimento}
          error={errors.riferimento}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          required
          label="Causale"
          name="causale"
          value={values.causale}
          error={errors.causale}
          onChange={handleChange}
          margin="normal"
        />

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

export default RepartoInail;
