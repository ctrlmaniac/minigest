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
import { TipoDocFisc } from "~/models";
import update from "~/features/tipoDocFisc/update";

interface Props {
  data: TipoDocFisc;
}

const Form: React.FC<Props> = ({ data }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { postSuccess } = useAppSelector((state) => state.tipoDocFisc);

  const [values, setValues] = React.useState({
    codice: data.codice,
    descrizione: data.descrizione,
  });

  const [errors, setErrors] = React.useState({
    codice: false,
    descrizione: false,
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
    dispatch(update(data.id!, values));
    navigate("/app/docfisc/tipo");
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

export default Form;
