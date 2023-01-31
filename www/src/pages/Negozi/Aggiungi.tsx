import { Box, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { SaveFab } from "~/components";
import post from "~/features/negozi/post";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { Negozio } from "~/types";

const NegoziAggiungi: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selected: azienda } = useAppSelector((state) => state.aziende);

  const [values, setValues] = React.useState<Negozio>({
    azienda: azienda,
    nome: "",
  });

  const [errors, setErrors] = React.useState({
    nome: true,
  });

  React.useEffect(() => {
    setValues({
      ...values,
      azienda: azienda,
    });
  }, [azienda]);

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
          Aggiungi Negozio
        </Typography>
        <Typography>
          Attenzione! Si sta aggiungendo un negozio all'azienda{" "}
          {azienda?.denominazione}
        </Typography>
      </Box>

      <Box>
        <Paper>
          <Box p={2}>
            <TextField
              label="nome"
              name="nome"
              value={values.nome}
              error={errors.nome}
              fullWidth
              required
              onChange={handleChange}
            />
          </Box>
        </Paper>
      </Box>

      <SaveFab handleClick={handleSubmit} disabled={isDisabled} />
    </>
  );
};

export default NegoziAggiungi;
