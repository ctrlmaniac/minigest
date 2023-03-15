import {
  Alert,
  AlertTitle,
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
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
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { AddFab, ErrorScreen } from "~/components";
import list from "~/features/fatture/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import {
  IconAlertCircle,
  IconBuildingWarehouse,
  IconCircleCheck,
  IconFile,
  IconInfoCircle,
} from "@tabler/icons-react";
import { green, red } from "@mui/material/colors";

const Fatture: React.FC = () => {
  const { mode } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { list: fatture } = useAppSelector((state) => state.fatture);
  const { principal } = useAppSelector((state) => state.account);

  const [values, setValues] = React.useState({
    anno: new Date().getFullYear(),
    mese: new Date().getMonth() + 1,
    sdi: false,
  });

  const [errors, setErrors] = React.useState({
    anno: false,
    mese: false,
  });

  const [query, setQuery] = useSearchParams({
    sdi: values.sdi.toString(),
    anno: values.anno.toString(),
    mese: values.mese.toString(),
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
    setQuery({
      anno: values.anno.toString(),
      mese: values.mese.toString(),
      sdi: values.sdi.toString(),
    });
  }, [values]);

  React.useEffect(() => {
    if (!isEmpty(principal?.azienda)) {
      if (mode === "vendita" || mode === "acquisto") {
        console.log(mode);

        dispatch(list(mode, principal!.azienda.id!, query.toString()));
      }
    }
  }, [mode, principal, query]);

  if (mode !== "acquisto" && mode !== "vendita") {
    return <ErrorScreen>Pagina non trovata</ErrorScreen>;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Fatture {mode}</Typography>
        </Box>

        {isEmpty(principal) ? (
          <Box mb={3}>
            <Alert severity="error" variant="outlined">
              <AlertTitle>Devi aggiungere un'azienda!</AlertTitle>
            </Alert>
          </Box>
        ) : (
          <>
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
                    <Grid item xs={12}>
                      <FormControlLabel
                        value="ordina per data sdi"
                        control={
                          <Checkbox
                            onChange={(
                              e: React.ChangeEvent<HTMLInputElement>
                            ) =>
                              setValues({ ...values, sdi: e.target.checked })
                            }
                          />
                        }
                        label="ordina per data sdi"
                      />
                    </Grid>
                  </Grid>
                </Box>
              </Paper>
            </Box>

            {isEmpty(fatture) ? (
              <Alert severity="info" variant="outlined">
                Non ci sono fatture, aggiungine una!
              </Alert>
            ) : (
              <Box mb={3}>
                <Paper>
                  <Box p={3}>
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Documento</TableCell>
                          <TableCell>Data</TableCell>
                          <TableCell>Data SDI</TableCell>
                          <TableCell>
                            {mode === "vendita" ? "Committente" : "Cedente"}
                          </TableCell>
                          <TableCell>Numero</TableCell>
                          <TableCell sx={{ width: 50 }} align="center">
                            <IconInfoCircle />
                          </TableCell>
                          <TableCell sx={{ width: 50 }} align="center">
                            <IconFile />
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {fatture?.map((fattura) => (
                          <TableRow key={fattura.id}>
                            <TableCell>
                              {fattura.tipoDocumento.codice}
                            </TableCell>
                            <TableCell>{fattura.data}</TableCell>
                            <TableCell>{fattura.dataSDI}</TableCell>
                            <TableCell>
                              {mode === "vendita"
                                ? fattura.committente.denominazione
                                : fattura.cedente.denominazione}
                            </TableCell>
                            <TableCell>{fattura.numero}</TableCell>
                            <TableCell>
                              {fattura.evasa ? (
                                <IconCircleCheck color={green[500]} />
                              ) : (
                                <IconAlertCircle color={red[500]} />
                              )}
                            </TableCell>
                            <TableCell>
                              <IconButton
                                color="info"
                                onClick={() =>
                                  navigate(
                                    `/docfisc/fatture/dettagli/${fattura.id}`
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
                  </Box>
                </Paper>
              </Box>
            )}

            <AddFab onClick={() => navigate("/docfisc/fatture/aggiungi")} />
          </>
        )}
      </>
    );
  }
};

export default Fatture;
