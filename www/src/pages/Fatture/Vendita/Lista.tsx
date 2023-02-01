import {
  Alert,
  Box,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { IconFile } from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AddFab, ErrorScreen, LoadingScreen } from "~/components";
import listVendita from "~/features/fatture/listVendita";
import { useAppDispatch, useAppSelector } from "~/hooks";

const FattureVenditaLista: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { selected: azienda } = useAppSelector((state) => state.aziende);
  const {
    list: fatture,
    listError,
    listing,
  } = useAppSelector((state) => state.fatture);

  const [values, setValues] = React.useState({
    anno: new Date().getFullYear(),
    mese: new Date().getMonth() + 1,
    order: "data",
  });

  const [errors, setErrors] = React.useState({
    anno: false,
    mese: false,
  });

  let [searchParams, setSearchParams] = useSearchParams({
    anno: values.anno.toString(),
    mese: values.mese.toString(),
    order: "data",
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

  const handleOrderChange = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;

    setValues({
      ...values,
      order: value,
    });
  };

  React.useEffect(() => {
    setSearchParams({
      anno: values.anno.toString(),
      mese: values.mese.toString(),
      order: values.order,
    });
  }, [azienda, values]);

  React.useEffect(() => {
    if (azienda) {
      dispatch(listVendita(azienda.id!, searchParams.toString()));
    }
  }, [azienda, searchParams]);

  if (listing) {
    return <LoadingScreen />;
  } else if (listError) {
    return <ErrorScreen message={listError} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Fatture Vendita</Typography>
        </Box>

        <Box mb={3}>
          <Paper>
            <Box p={2}>
              <Grid
                container
                direction="row"
                justifyContent="space-around"
                alignItems="center"
                spacing={2}
              >
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Anno"
                    name="anno"
                    value={values.anno}
                    error={errors.anno}
                    onChange={handleChange}
                    inputProps={{ max: new Date().getFullYear() }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    type="number"
                    label="Mese"
                    name="mese"
                    value={values.mese}
                    error={errors.mese}
                    onChange={handleChange}
                    inputProps={{ min: 1, max: 12 }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel>Ordina per data/data SDI</InputLabel>
                    <Select
                      value={values.order}
                      label="Ordina per data/data SDI"
                      name="order"
                      onChange={handleOrderChange}
                    >
                      <MenuItem value="data">Data fattura</MenuItem>
                      <MenuItem value="sdi">Data SDI</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Box>

        <Box>
          <Paper>
            <Box p={2}>
              {isEmpty(fatture) ? (
                <Alert severity="info">
                  Non ci sono fatture, aggiunge una!
                </Alert>
              ) : (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Tipo</TableCell>
                      <TableCell>Data</TableCell>
                      <TableCell>Data SDI</TableCell>
                      <TableCell>Committente</TableCell>
                      <TableCell>Numero</TableCell>
                      <TableCell>Totale</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconFile />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fatture?.map((fattura) => (
                      <TableRow key={fattura.id!}>
                        <TableCell>{fattura.tipoDocumento.codice}</TableCell>
                        <TableCell>{fattura.data}</TableCell>
                        <TableCell>{fattura.dataSDI}</TableCell>
                        <TableCell>
                          {fattura.committente.denominazione}
                        </TableCell>
                        <TableCell>{fattura.numero}</TableCell>
                        <TableCell>€ {fattura.totale}</TableCell>
                        <TableCell align="center">
                          <IconButton
                            color="info"
                            onClick={() =>
                              navigate(
                                `/app/docfisc/fatture/dettagli/${fattura.id!}`
                              )
                            }
                          >
                            <IconFile />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Box>
          </Paper>
        </Box>

        <AddFab href="/app/docfisc/fatture/aggiungi" />
      </>
    );
  }
};

export default FattureVenditaLista;
