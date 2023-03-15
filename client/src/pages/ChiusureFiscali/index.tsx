import {
  Alert,
  AlertTitle,
  Box,
  Checkbox,
  FormControlLabel,
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
import {
  IconBuildingStore,
  IconFile,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { AddFab } from "~/components";
import list from "~/features/chiusureFiscali/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { useNavigate, useSearchParams } from "react-router-dom";
import remove from "~/features/chiusureFiscali/remove";
import { unsetResponse } from "~/features/chiusureFiscali/slice";

const ChiusureFiscali: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selected } = useAppSelector((state) => state.negozio);
  const {
    list: cfs,
    removeError,
    response,
  } = useAppSelector((state) => state.chiusureFiscali);

  const [values, setValues] = React.useState({
    anno: new Date().getFullYear(),
    mese: new Date().getMonth() + 1,
  });

  const [errors, setErrors] = React.useState({
    anno: false,
    mese: false,
  });

  const [query, setQuery] = useSearchParams({
    anno: values.anno.toString(),
    mese: values.mese.toString(),
  });

  React.useEffect(() => {
    if (!isEmpty(selected)) {
      dispatch(list(`negozio=${selected.id!}&${query.toString()}`));
    }
  }, [selected, query]);

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
    });
  }, [values]);

  const handleDelete = (id: string) => {
    dispatch(remove(id));

    setTimeout(() => {
      dispatch(unsetResponse());
    }, 3000);
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Chiusure Fiscali</Typography>
      </Box>

      {isEmpty(selected) && (
        <Alert variant="outlined" severity="error">
          <AlertTitle>Devi selezionare un negozio!</AlertTitle>
          Per visualizzare le chiusure fiscali devi prima selezionare un
          negozio. Clicca sull'icona <IconBuildingStore /> in alto a sinistra e
          selezionane uno!
        </Alert>
      )}
      {!isEmpty(selected) && (
        <>
          <Box mb={3}>
            <Alert severity="info" variant="outlined">
              Stai visualizzando le chiusure fiscali del negozio {selected.nome}
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

          {isEmpty(cfs) ? (
            <Alert variant="outlined" severity="info">
              Non sono presenti chiusure fiscali! Aggiungine una!
            </Alert>
          ) : (
            <Box>
              <Paper>
                <Box p={2}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Data</TableCell>
                        <TableCell>Totale</TableCell>
                        <TableCell>N.D.F</TableCell>
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconButton>
                            <IconFile />
                          </IconButton>
                        </TableCell>
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconButton>
                            <IconPencil />
                          </IconButton>
                        </TableCell>
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconButton>
                            <IconTrash />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {cfs?.map((cf) => (
                        <TableRow key={cf.id}>
                          <TableCell>{cf.data}</TableCell>
                          <TableCell>€ {cf.totale}</TableCell>
                          <TableCell>{cf.numeroDocFisc}</TableCell>
                          <TableCell sx={{ width: 50 }} align="center">
                            <IconButton
                              color="info"
                              onClick={() => navigate(`dettagli/${cf.id}`)}
                            >
                              <IconFile />
                            </IconButton>
                          </TableCell>
                          <TableCell sx={{ width: 50 }} align="center">
                            <IconButton
                              color="warning"
                              onClick={() => navigate(`modifica/${cf.id}`)}
                            >
                              <IconPencil />
                            </IconButton>
                          </TableCell>
                          <TableCell>
                            <IconButton
                              color="error"
                              onClick={() => handleDelete(cf.id!)}
                            >
                              <IconTrash />
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

          <Snackbar
            open={!isEmpty(response)}
            autoHideDuration={3000}
            onClose={() => dispatch(unsetResponse())}
          >
            <Alert severity={removeError ? "error" : "success"}>
              {response}
            </Alert>
          </Snackbar>
        </>
      )}

      {!isEmpty(selected) && <AddFab onClick={() => navigate("aggiungi")} />}
    </>
  );
};

export default ChiusureFiscali;
