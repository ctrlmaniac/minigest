import { Box, Container, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Page, SaveFab } from "~/components";
import post from "~/features/negozi/post";
import { useAppDispatch, useAppSelector } from "~/hooks";

const AggiungiNegozio: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { selected } = useAppSelector((state) => state.aziende);

  const [values, setValues] = React.useState({
    nome: "",
  });

  const [errors, setErrors] = React.useState({
    nome: true,
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
      azienda: selected,
      ...values,
    };

    dispatch(post(object));
    navigate("/app/negozi");
  };

  return (
    <>
      <Page title="Aggiungi">
        <Container>
          <Paper>
            <Box p={2}>
              <Typography gutterBottom>
                Attenzione! Stai aggiungendo un negozio all'azienda:{" "}
                {selected?.denominazione}
              </Typography>
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

export default AggiungiNegozio;
