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
  handleClose: Function;
  onSubmit: Function;
}

const FormReparto: React.FC<Props> = ({ open, handleClose, onSubmit }) => {
  const [values, setValues] = React.useState({
    aliquota: 22,
    imponibile: 0,
    imposta: 0,
  });

  const [errors, setErrors] = React.useState({
    aliquota: false,
    imponibile: false,
    imposta: false,
  });

  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    setIsDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, required } = e.target;

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

  const handleSubmit = () => {
    handleClose(false);
    onSubmit(values);
  };

  return (
    <>
      <Dialog open={open} onClose={() => handleClose(false)}>
        <DialogContent>
          <TextField
            fullWidth
            label="Aliquota IVA"
            name="aliquota"
            margin="normal"
            value={values.aliquota}
            error={errors.aliquota}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Imponibile"
            name="imponibile"
            margin="normal"
            value={values.imponibile}
            error={errors.imponibile}
            onChange={handleChange}
          />

          <TextField
            fullWidth
            label="Imposta"
            name="imposta"
            margin="normal"
            value={values.imposta}
            error={errors.imposta}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button disabled={isDisabled} onClick={handleSubmit}>
            salva
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default FormReparto;
