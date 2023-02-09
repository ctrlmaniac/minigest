import {
  Alert,
  AlertTitle,
  Box,
  Button,
  Grid,
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { IconBuildingStore, IconTrash } from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { ChiusuraFiscaleReparto } from "~/types";
import Reparto from "./Reparto";
import { SaveFab } from "components";
import { useNavigate } from "react-router-dom";
import post from "~/features/chiusureFiscali/post";
import { unsetResponse } from "~/features/chiusureFiscali/slice";

const Aggiungi: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { selected } = useAppSelector((state) => state.negozi);
  const { posting, postError, response } = useAppSelector(
    (state) => state.chiusureFiscali
  );

  const [open, setOpen] = React.useState(false);

  const [values, setValues] = React.useState({
    data: new Date().toISOString().split("T")[0],
    totale: 0,
    numeroDocFisc: 0,
  });

  const [reparti, setReparti] = React.useState<ChiusuraFiscaleReparto[]>([]);

  const [errors, setErrors] = React.useState({
    data: false,
    totale: false,
    numeroDocFisc: false,
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
    const valuesHaveErrors = !Object.values(errors).every(
      (value) => value === false
    );

    setIsDisabled(valuesHaveErrors || reparti.length < 1);
  }, [errors, reparti]);

  const handleSubmitReparto = (reparto: ChiusuraFiscaleReparto) => {
    setReparti([...reparti, reparto]);
  };

  const handleDeleteReparto = (index: number) => {
    const listaReparti = [...reparti];

    listaReparti.splice(index, 1);

    setReparti(listaReparti);
  };

  const handleSubmit = () => {
    const chiusuraFiscale = {
      negozio: selected!,
      ...values,
      reparti: [...reparti],
    };

    dispatch(post(chiusuraFiscale));

    if (!postError) {
      setTimeout(() => {
        dispatch(unsetResponse());
        navigate("/docfisc/chiusure-fiscali");
      }, 1000);
    }
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Aggiungi Chiusura Fiscale</Typography>
      </Box>

      {isEmpty(selected) ? (
        <Alert variant="outlined" severity="error" sx={{ marginBottom: 3 }}>
          <AlertTitle>Devi selezionare un negozio!</AlertTitle>
          Per visualizzare le chiusure fiscali devi prima selezionare un
          negozio. Clicca sull'icona <IconBuildingStore /> in alto a sinistra e
          selezionane uno!
        </Alert>
      ) : (
        <Alert variant="outlined" severity="info" sx={{ marginBottom: 3 }}>
          Stai aggiungendo una chiusura fiscale al negozio {selected.nome}
        </Alert>
      )}

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <TextField
              label="Data"
              name="data"
              value={values.data}
              error={errors.data}
              fullWidth
              required
              onChange={handleChange}
              margin="normal"
              type="date"
            />

            <TextField
              label="Totale"
              name="totale"
              value={values.totale}
              error={errors.totale}
              fullWidth
              required
              onChange={handleChange}
              margin="normal"
              type="number"
            />

            <TextField
              label="Num. D.F."
              name="numeroDocFisc"
              value={values.numeroDocFisc}
              error={errors.numeroDocFisc}
              fullWidth
              required
              onChange={handleChange}
              margin="normal"
              type="number"
            />
          </Box>
        </Paper>
      </Box>

      <Box>
        <Paper>
          <Box p={2}>
            <Grid
              container
              direction="row"
              justifyContent="space-around"
              alignItems="center"
            >
              <Grid item xs={6}>
                <Typography variant="h6" gutterBottom>
                  Reparti
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ textAlign: "right" }}>
                  <Button onClick={() => setOpen(true)}>aggiungi</Button>
                </Box>
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(reparti) ? (
                <Alert severity="error">
                  Devi aggiungere almeno un reparto!
                </Alert>
              ) : (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Aliquota</TableCell>
                      <TableCell>Totale</TableCell>
                      <TableCell>Annulli</TableCell>
                      <TableCell>Resi</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconTrash />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {reparti.map((r, i) => (
                      <TableRow key={i}>
                        <TableCell>{r.aliquota} %</TableCell>
                        <TableCell>{r.totale} €</TableCell>
                        <TableCell>{r.totaleAnnulli} €</TableCell>
                        <TableCell>{r.totaleResi} €</TableCell>
                        <TableCell align="center">
                          <IconButton
                            color="error"
                            onClick={() => handleDeleteReparto(i)}
                          >
                            <IconTrash />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>

      <Reparto
        open={open}
        handleClose={setOpen}
        handleSubmit={handleSubmitReparto}
      />

      <SaveFab
        onClick={handleSubmit}
        disabled={isDisabled || isEmpty(selected)}
        loading={posting}
      />

      <Snackbar open={!isEmpty(response)}>
        <Alert severity={postError ? "error" : "success"}>{response}</Alert>
      </Snackbar>
    </>
  );
};

export default Aggiungi;
