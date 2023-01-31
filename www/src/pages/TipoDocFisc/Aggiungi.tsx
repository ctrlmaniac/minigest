import { Box, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { SaveFab } from "~/components";
import post from "~/features/tipoDocFisc/post";
import { useAppDispatch } from "~/hooks";
import { TipoDocFisc } from "~/types";

const TipiDocFiscAggiungi: React.FC = () => {
  const dispatch = useAppDispatch();

  const [values, setValues] = React.useState<TipoDocFisc>({
    codice: "",
    descrizione: "",
  });

  const [errors, setErrors] = React.useState({
    codice: true,
    descrizione: true,
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
    dispatch(post(values));
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3" gutterBottom>
          Aggiungi Tipo di Doc. Fisc.
        </Typography>
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

      <SaveFab handleClick={handleSubmit} disabled={isDisabled} />
    </>
  );
};

export default TipiDocFiscAggiungi;
