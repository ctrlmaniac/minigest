import { Box, Container, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Page, SaveFab } from "~/components";
import update from "~/features/negozi/update";
import { useAppDispatch } from "~/hooks";
import { Negozio } from "~/models";

interface Props {
  negozio: Negozio;
}

const FormModificaNegozio: React.FC<Props> = ({ negozio }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [values, setValues] = React.useState({
    nome: negozio.nome,
  });

  const [errors, setErrors] = React.useState({
    nome: false,
  });

  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    setIsDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setValues({
      nome: value,
    });

    setErrors({
      nome: value.length < 1,
    });
  };

  const handleSubmit = () => {
    const object = {
      azienda: negozio.azienda,
      ...values,
    };

    dispatch(update(negozio.id!, object));
    navigate("/app/negozi");
  };

  return (
    <>
      <Page title="Aggiungi">
        <Container>
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
                helperText="Inserisci che descriva il tuo negozio"
              />
            </Box>
          </Paper>
        </Container>
      </Page>
      <SaveFab handleClick={handleSubmit} disabled={isDisabled} />
    </>
  );
};

export default FormModificaNegozio;
