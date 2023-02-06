import { Box, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { SaveFab } from "components";
import update from "~/features/tipoDocFisc/update";
import { useAppDispatch } from "~/hooks";
import { TipoDocFisc } from "~/types";

interface Props {
  dettagli: TipoDocFisc;
}

const FormModifica: React.FC<Props> = ({ dettagli }) => {
  const dispatch = useAppDispatch();

  const [values, setValues] = React.useState<TipoDocFisc>({
    ...dettagli,
  });

  const [errors, setErrors] = React.useState({
    codice: false,
    descrizione: false,
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

  const handleSubmit = () => {
    dispatch(update(dettagli.id!, values));
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Modifica Negozio</Typography>
      </Box>

      <Box>
        <Paper>
          <Box p={2}>
            <TextField
              label="Codice"
              name="codice"
              value={values.codice}
              error={errors.codice}
              fullWidth
              required
              onChange={handleChange}
              margin="normal"
            />

            <TextField
              label="Descrizione"
              name="descrizione"
              value={values.descrizione}
              error={errors.descrizione}
              fullWidth
              required
              onChange={handleChange}
              margin="normal"
            />
          </Box>
        </Paper>
      </Box>

      <SaveFab disabled={isDisabled} handleClick={handleSubmit} />
    </>
  );
};

export default FormModifica;
