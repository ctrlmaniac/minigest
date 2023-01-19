import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Page, SaveFab } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import post from "~/features/tipoDocFisc/post";
import { useNavigate } from "react-router-dom";

const AggiungiTipo: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { postSuccess } = useAppSelector((state) => state.tipoDocFisc);

  const [values, setValues] = React.useState({
    codice: "",
    descrizione: "",
  });

  const [errors, setErrors] = React.useState({
    codice: true,
    descrizione: true,
  });

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

  // Save button
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    setIsDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  const handleSubmit = () => {
    dispatch(post(values));

    if (postSuccess !== null) {
      navigate("/app/docfisc/tipo");
    }
  };

  return (
    <>
      <Page title="Aggiungi">
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            Tipi Documenti Fiscali
          </Typography>

          <Box>
            <Paper>
              <Box p={2}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Grid item xs={4}>
                    <TextField
                      label="codice"
                      name="codice"
                      fullWidth
                      value={values.codice}
                      error={errors.codice}
                      onChange={handleChange}
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      label="descrizione"
                      name="descrizione"
                      fullWidth
                      value={values.descrizione}
                      error={errors.descrizione}
                      onChange={handleChange}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Box>
        </Container>
      </Page>
      <SaveFab disabled={isDisabled} handleClick={handleSubmit} />
    </>
  );
};

export default AggiungiTipo;
