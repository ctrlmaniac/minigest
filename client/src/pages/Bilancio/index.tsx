import {
  Alert,
  Box,
  Grid,
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
import get from "~/features/bilancio/get";
import { useAppDispatch, useAppSelector } from "~/hooks";

const Bilancio: React.FC = () => {
  const dispatch = useAppDispatch();
  const { bilancio } = useAppSelector((state) => state.bilancio);

  const [values, setValues] = React.useState({
    anno: new Date().getFullYear(),
    mese: new Date().getMonth() + 1,
  });

  const [errors, setErrors] = React.useState({
    anno: false,
    mese: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    const valueAsInt = parseInt(value);

    if (name === "anno") {
      setErrors({
        ...errors,
        anno: valueAsInt < 1970 || valueAsInt > new Date().getFullYear(),
      });
    }

    if (name === "mese") {
      setErrors({
        ...errors,
        mese: valueAsInt < 1 || valueAsInt > 12,
      });
    }
  };

  React.useEffect(() => {
    const query = `anno=${values.anno}&mese=${values.mese}`;

    dispatch(get(query));
  }, [values]);

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Bilancio</Typography>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Anno"
                  name="anno"
                  value={values.anno}
                  error={errors.anno}
                  onChange={handleChange}
                  type="number"
                  inputProps={{
                    step: 1,
                    min: 1970,
                    max: new Date().getFullYear(),
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mese"
                  name="mese"
                  value={values.mese}
                  error={errors.mese}
                  onChange={handleChange}
                  type="number"
                  inputProps={{
                    step: 1,
                    min: 1,
                    max: 12,
                  }}
                  fullWidth
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      {isEmpty(bilancio) ? (
        <Alert severity="info" variant="outlined">
          Non è disponibile il bilancio per il periodo da te selezionato!
        </Alert>
      ) : (
        <>
          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Bilancio
                </Typography>

                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Utile</TableCell>
                      <TableCell align="right">{bilancio.utile} €</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Imposta da Versare</TableCell>
                      <TableCell align="right">
                        {bilancio.impostaDaVersare} €
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Box>

          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Entrate
                </Typography>

                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>Riepilogo</TableCell>
                      {bilancio.entrate.reparti.map(
                        (reparto: any, i: number) => (
                          <TableCell key={i}>
                            IVA {reparto.aliquota} %
                          </TableCell>
                        )
                      )}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow>
                      <TableCell>Totale</TableCell>
                      <TableCell>{bilancio.entrate.totale} €</TableCell>
                      {bilancio.entrate.reparti.map(
                        (reparto: any, i: number) => (
                          <TableCell key={i}>{reparto.totale} €</TableCell>
                        )
                      )}
                    </TableRow>
                    <TableRow>
                      <TableCell>Imponibile</TableCell>
                      <TableCell>{bilancio.entrate.imponibile} €</TableCell>
                      {bilancio.entrate.reparti.map(
                        (reparto: any, i: number) => (
                          <TableCell key={i}>{reparto.imponibile} €</TableCell>
                        )
                      )}
                    </TableRow>
                    <TableRow>
                      <TableCell>Imposta</TableCell>
                      <TableCell>{bilancio.entrate.imposta} €</TableCell>
                      {bilancio.entrate.reparti.map(
                        (reparto: any, i: number) => (
                          <TableCell key={i}>{reparto.imposta} €</TableCell>
                        )
                      )}
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Box>

          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Uscite
                </Typography>

                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell></TableCell>
                      <TableCell>Riepilogo</TableCell>
                      {bilancio.uscite.reparti.map(
                        (reparto: any, i: number) => (
                          <TableCell key={i}>
                            IVA {reparto.aliquota} %
                          </TableCell>
                        )
                      )}
                    </TableRow>
                  </TableHead>

                  <TableBody>
                    <TableRow>
                      <TableCell>Totale</TableCell>
                      <TableCell>{bilancio.uscite.totale} €</TableCell>
                      {bilancio.uscite.reparti.map(
                        (reparto: any, i: number) => (
                          <TableCell key={i}>{reparto.totale} €</TableCell>
                        )
                      )}
                    </TableRow>
                    <TableRow>
                      <TableCell>Imponibile</TableCell>
                      <TableCell>{bilancio.uscite.imponibile} €</TableCell>
                      {bilancio.uscite.reparti.map(
                        (reparto: any, i: number) => (
                          <TableCell key={i}>{reparto.imponibile} €</TableCell>
                        )
                      )}
                    </TableRow>
                    <TableRow>
                      <TableCell>Imposta</TableCell>
                      <TableCell>{bilancio.uscite.imposta} €</TableCell>
                      {bilancio.uscite.reparti.map(
                        (reparto: any, i: number) => (
                          <TableCell key={i}>{reparto.imposta} €</TableCell>
                        )
                      )}
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Box>
        </>
      )}
    </>
  );
};

export default Bilancio;
