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

const RepartoErario: React.FC<Props> = ({ open, onClose, onSave }) => {
  const [values, setValues] = React.useState({
    codiceTributo: "",
    riferimento: "",
    anno: new Date().getFullYear(),
    importoDebito: "",
    importoCredito: 0,
  });

  const [errors, setErrors] = React.useState({
    codiceTributo: true,
    riferimento: false,
    anno: false,
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
      codiceTributo: "",
      riferimento: "",
      anno: new Date().getFullYear(),
      importoDebito: "",
      importoCredito: 0,
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
          label="Codice Tributo"
          name="codiceTributo"
          value={values.codiceTributo}
          error={errors.codiceTributo}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          label="Rateazione/regione/prov./mese rif."
          name="riferimento"
          value={values.riferimento}
          error={errors.riferimento}
          onChange={handleChange}
          margin="normal"
        />

        <TextField
          fullWidth
          required
          label="Anno di riferimento"
          name="anno"
          value={values.anno}
          error={errors.anno}
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
          inputProps={{ min: 1970 }}
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
          inputProps={{ min: 1970 }}
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

export default RepartoErario;
