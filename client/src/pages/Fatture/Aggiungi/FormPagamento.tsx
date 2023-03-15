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

const FormPagamento: React.FC<Props> = ({ open, handleClose, onSubmit }) => {
  const [values, setValues] = React.useState({
    data: new Date().toISOString().split("T")[0],
    importo: 0,
  });

  const [errors, setErrors] = React.useState({
    data: false,
    importo: false,
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
            label="Data Pagamento"
            name="data"
            margin="normal"
            value={values.data}
            error={errors.data}
            onChange={handleChange}
            type="date"
          />

          <TextField
            fullWidth
            label="Importo"
            name="importo"
            margin="normal"
            value={values.importo}
            error={errors.importo}
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

export default FormPagamento;
