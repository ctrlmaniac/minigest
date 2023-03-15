import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React from "react";

interface Props {
  open: boolean;
  onClose: Function;
  onSave: Function;
}

const RepartoLocali: React.FC<Props> = ({ open, onClose, onSave }) => {
  const [values, setValues] = React.useState({
    codiceEnte: "",
    ravvedimento: false,
    immobiliVariati: false,
    acconto: false,
    saldo: false,
    numeroImmobili: "",
    codiceTributo: "",
    riferimento: "",
    anno: new Date().getFullYear(),
    importoDebito: "",
    importoCredito: 0,
  });

  const [errors, setErrors] = React.useState({
    codiceEnte: true,
    ravvedimento: false,
    immobiliVariati: false,
    acconto: false,
    saldo: false,
    numeroImmobili: false,
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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    setValues({
      ...values,
      [name]: checked,
    });
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
      ravvedimento: false,
      immobiliVariati: false,
      acconto: false,
      saldo: false,
      numeroImmobili: "",
      codiceTributo: "",
      riferimento: "",
      anno: new Date().getFullYear(),
      importoDebito: "",
      importoCredito: 0,
    });
    setErrors({
      codiceEnte: true,
      ravvedimento: false,
      immobiliVariati: false,
      acconto: false,
      saldo: false,
      numeroImmobili: false,
      codiceTributo: true,
      riferimento: false,
      anno: false,
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

        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox name="ravvedimento" onChange={handleCheckboxChange} />
            }
            label="Ravv."
          />

          <FormControlLabel
            control={
              <Checkbox
                name="immobiliVariati"
                onChange={handleCheckboxChange}
              />
            }
            label="Immob. Variati"
          />

          <FormControlLabel
            control={
              <Checkbox name="acconto" onChange={handleCheckboxChange} />
            }
            label="Acc."
          />

          <FormControlLabel
            control={<Checkbox name="saldo" onChange={handleCheckboxChange} />}
            label="Saldo"
          />
        </FormGroup>

        <TextField
          fullWidth
          label="Numero Immobili"
          name="numeroImmobili"
          value={values.numeroImmobili}
          error={errors.numeroImmobili}
          onChange={handleChange}
          margin="normal"
          type="number"
          inputProps={{ step: 1 }}
        />

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
          label="Rateazione/mese rif."
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
          type="number"
          inputProps={{ step: 1 }}
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

export default RepartoLocali;
