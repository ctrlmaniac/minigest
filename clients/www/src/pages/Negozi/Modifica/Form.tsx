import { Box, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { SaveFab } from "~/components";
import update from "~/features/negozi/update";
import { useAppDispatch } from "~/hooks";
import { Negozio } from "~/types";

interface Props {
  dettagli: Negozio;
}

const NegoziFormModifica: React.FC<Props> = ({ dettagli }) => {
  const dispatch = useAppDispatch();

  const [values, setValues] = React.useState<Negozio>({
    ...dettagli,
  });

  const [errors, setErrors] = React.useState({
    nome: false,
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
              label="Nome"
              name="nome"
              value={values.nome}
              error={errors.nome}
              required
              fullWidth
              onChange={handleChange}
            />
          </Box>
        </Paper>
      </Box>

      <SaveFab disabled={isDisabled} handleClick={handleSubmit} />
    </>
  );
};

export default NegoziFormModifica;
