import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  List,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { SaveFab } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import Reparto from "./Reparto";
import { ChiusuraFiscaleReparto } from "~/types";
import { IconTrash } from "@tabler/icons-react";
import post from "~/features/chiusureFiscali/post";

const ChiusureFiscaliAggiungi: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selected: negozio } = useAppSelector((state) => state.negozi);
  const [open, setOpen] = React.useState(false);

  const [values, setValues] = React.useState({
    data: "",
    totale: 0,
    numeroDocFisc: 0,
  });

  const [reparti, setReparti] = React.useState<ChiusuraFiscaleReparto[]>([]);

  const [errors, setErrors] = React.useState({
    data: true,
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
      negozio: negozio!,
      ...values,
      reparti: [...reparti],
    };

    dispatch(post(chiusuraFiscale));
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Aggiungi Chiusura Fiscale</Typography>
      </Box>

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

      <SaveFab handleClick={handleSubmit} disabled={isDisabled} />
    </>
  );
};

export default ChiusureFiscaliAggiungi;
