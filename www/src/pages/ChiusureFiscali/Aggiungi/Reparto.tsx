import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import { ChiusuraFiscaleReparto } from "~/types";

interface Props {
  open: boolean;
  handleClose: Function;
  handleSubmit: Function;
}

const Reparto: React.FC<Props> = ({ open, handleClose, handleSubmit }) => {
  const [values, setValues] = React.useState<ChiusuraFiscaleReparto>({
    aliquota: 22,
    totale: 0,
    totaleAnnulli: 0,
    totaleResi: 0,
  });

  const [errors, setErrors] = React.useState({
    aliquota: false,
    totale: false,
    totaleAnnulli: false,
    totaleResi: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, required } = e.target;

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

  // Save button
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    setIsDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  const onSubmit = () => {
    handleClose(false);
    handleSubmit(values);
  };

  return (
    <Dialog open={open} onClose={() => handleClose(false)}>
      <DialogContent>
        <TextField
          label="aliquota"
          name="aliquota"
          value={values.aliquota}
          error={errors.aliquota}
          fullWidth
          required
          onChange={handleChange}
          margin="normal"
          type="number"
          inputProps={{ step: 0.01 }}
        />

        <TextField
          label="totale"
          name="totale"
          value={values.totale}
          error={errors.totale}
          fullWidth
          required
          onChange={handleChange}
          margin="normal"
          type="number"
          inputProps={{ step: 0.01 }}
        />

        <TextField
          label="totale annulli"
          name="totaleAnnulli"
          value={values.totaleAnnulli}
          error={errors.totaleAnnulli}
          fullWidth
          required
          onChange={handleChange}
          margin="normal"
          type="number"
          inputProps={{ step: 0.01 }}
        />

        <TextField
          label="totale resi"
          name="totaleResi"
          value={values.totaleResi}
          error={errors.totaleResi}
          fullWidth
          required
          onChange={handleChange}
          margin="normal"
          type="number"
          inputProps={{ step: 0.01 }}
        />
      </DialogContent>
      <DialogActions>
        <Button disabled={isDisabled} onClick={onSubmit}>
          Salva
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Reparto;
