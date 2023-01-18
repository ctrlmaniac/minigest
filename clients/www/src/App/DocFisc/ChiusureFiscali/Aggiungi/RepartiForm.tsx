import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";

interface Props {
  open: boolean;
  handleOpen: Function;
  handleSubmit: Function;
}

const initialValues = {
  aliquota: "22",
  totale: "",
  totaleAnnulli: "0",
  totaleResi: "0",
};

const initialErrors = {
  aliquota: false,
  totale: true,
  totaleAnnulli: false,
  totaleResi: false,
};

const RepartiForm: React.FC<Props> = ({ open, handleOpen, handleSubmit }) => {
  const [values, setValues] = React.useState({
    ...initialValues,
  });

  const [errors, setErrors] = React.useState({
    ...initialErrors,
  });

  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    setIsDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: value.length < 1,
    });
  };

  const submitForm = () => {
    handleOpen(false);
    handleSubmit(values);
    setValues({ ...initialValues });
    setErrors({ ...initialErrors });
  };

  return (
    <Dialog
      fullWidth
      maxWidth="sm"
      open={open}
      onClose={() => handleOpen(false)}
    >
      <DialogTitle>Reparto</DialogTitle>
      <DialogContent>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={2}
        >
          <Grid item xs={12}>
            <TextField
              label="Aliquota"
              name="aliquota"
              value={values.aliquota}
              error={errors.aliquota}
              onChange={handleChange}
              type="number"
              inputProps={{ step: 0.01 }}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Totale"
              name="totale"
              value={values.totale}
              error={errors.totale}
              onChange={handleChange}
              type="number"
              inputProps={{ step: 0.01 }}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Tot. Annulli"
              name="totaleAnnulli"
              value={values.totaleAnnulli}
              error={errors.totaleAnnulli}
              onChange={handleChange}
              type="number"
              inputProps={{ step: 0.01 }}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Tot. Resi"
              name="totaleResi"
              value={values.totaleResi}
              error={errors.totaleResi}
              onChange={handleChange}
              type="number"
              inputProps={{ step: 0.01 }}
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="contained" disabled={isDisabled} onClick={submitForm}>
          Salva
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default RepartiForm;
