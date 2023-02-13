import {
  Alert,
  AlertTitle,
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
import { IconBuildingStore } from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { useSearchParams } from "react-router-dom";
import get from "~/features/registroCorrispettivi/get";
import { useAppDispatch, useAppSelector } from "~/hooks";

const RegistroCorrispettivi: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selected } = useAppSelector((state) => state.negozi);
  const { registro } = useAppSelector((state) => state.registroCorrispettivi);

  const [values, setValues] = React.useState({
    negozio: selected ? selected.id : "",
    anno: new Date().getFullYear(),
    mese: new Date().getMonth() + 1,
  });

  const [errors, setErrors] = React.useState({
    anno: false,
    mese: false,
  });

  React.useEffect(() => {
    if (!isEmpty(selected)) {
      setValues({
        ...values,
        negozio: selected!.id!,
      });
    }
  }, [selected]);

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
    const query = `negozio=${values.negozio}&anno=${values.anno}&mese=${values.mese}`;

    dispatch(get(query));
  }, [values]);

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Registro dei Corrispettivi</Typography>
      </Box>

      {isEmpty(selected) ? (
        <Alert variant="outlined" severity="error">
          <AlertTitle>Devi selezionare un negozio!</AlertTitle>
          Per visualizzare le chiusure fiscali devi prima selezionare un
          negozio. Clicca sull'icona <IconBuildingStore /> in alto a sinistra e
          selezionane uno!
        </Alert>
      ) : (
        <>
          <Box mb={3}>
            <Alert severity="info" variant="outlined">
              Stai visualizzando il registro dei corrispettivi del negozio{" "}
              {selected.nome}
            </Alert>
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

          {isEmpty(registro) ? (
            <Alert variant="outlined" severity="info">
              Non sono presenti chiusure fiscali quindi non c'è nemmeno un
              registro dei corrispettivi!
            </Alert>
          ) : (
            <>
              <Box>
                <Paper>
                  <Box p={2} sx={{ overflowX: "auto" }}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell
                            colSpan={3}
                            sx={{ borderLeft: 1, borderRight: 1 }}
                          >
                            Riepilogo
                          </TableCell>
                          {registro!.aliquoteIVA.map((aliquota: number, i) => (
                            <TableCell key={i} sx={{ borderRight: 1 }}>
                              {aliquota} %
                            </TableCell>
                          ))}
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ borderLeft: 1 }}>Data</TableCell>
                          <TableCell>Totale</TableCell>
                          <TableCell sx={{ borderRight: 1 }}>N.D.F.</TableCell>
                          {registro!.aliquoteIVA.map((aliquota, i) => (
                            <TableCell key={i} sx={{ borderRight: 1 }}>
                              Totale
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {registro.corrispettivi.map((corrispettivo, i) => {
                          const aliquote = Object.keys(corrispettivo.reparti);

                          return (
                            <TableRow key={i}>
                              <TableCell sx={{ borderLeft: 1 }}>
                                {corrispettivo.data}
                              </TableCell>
                              <TableCell>€ {corrispettivo.totale}</TableCell>
                              <TableCell sx={{ borderRight: 1 }}>
                                {corrispettivo.numeroDocFisc || 0}
                              </TableCell>
                              {aliquote.map((aliquota, j) => {
                                const reparto = corrispettivo.reparti[aliquota];

                                return (
                                  <TableCell key={j} sx={{ borderRight: 1 }}>
                                    € {reparto.totale}
                                  </TableCell>
                                );
                              })}
                            </TableRow>
                          );
                        })}
                      </TableBody>
                    </Table>
                  </Box>
                </Paper>
              </Box>
            </>
          )}
        </>
      )}
    </>
  );
};

export default RegistroCorrispettivi;
