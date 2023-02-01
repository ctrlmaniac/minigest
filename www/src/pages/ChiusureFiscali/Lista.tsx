import React from "react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import list from "~/features/chiusureFiscali/list";
import { AddFab, ErrorScreen, LoadingScreen } from "~/components";
import {
  Alert,
  Box,
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
import { IconEdit, IconFile, IconTrash } from "@tabler/icons-react";
import remove from "~/features/chiusureFiscali/remove";
import { isEmpty } from "lodash";
import { useSearchParams } from "react-router-dom";
import listByDate from "~/features/chiusureFiscali/listByDate";

const ChiusureFiscaliLista: React.FC = () => {
  const dispatch = useAppDispatch();

  const { selected: negozio } = useAppSelector((state) => state.negozi);
  const {
    list: cfs,
    listing,
    listError,
  } = useAppSelector((state) => state.chiusureFiscali);

  const handleRemoveCF = (id: string) => {
    dispatch(remove(id));
  };

  const [values, setValues] = React.useState({
    anno: new Date().getFullYear(),
    mese: new Date().getMonth() + 1,
  });

  const [errors, setErrors] = React.useState({
    anno: false,
    mese: false,
  });

  let [searchParams, setSearchParams] = useSearchParams({
    negozio: negozio?.id!,
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
    setSearchParams({
      negozio: negozio?.id!,
      anno: values.anno.toString(),
      mese: values.mese.toString(),
    });
  }, [negozio, values]);

  React.useEffect(() => {
    dispatch(listByDate(searchParams.toString()));
  }, [searchParams]);

  if (listing) {
    return <LoadingScreen />;
  } else if (listError) {
    return <ErrorScreen message={listError} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3" gutterBottom>
            Lista Chiusure Fiscali
          </Typography>
          <Typography>
            Stai visualizzando le chiusure fiscali del negozio: {negozio?.nome}
          </Typography>
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
              </Grid>
            </Box>
          </Paper>
        </Box>

        {isEmpty(cfs) ? (
          <Alert severity="info">Non ci sono chiusure, aggiungine una!</Alert>
        ) : (
          <Box>
            <Paper>
              <Box p={2}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Data</TableCell>
                      <TableCell>Totale</TableCell>
                      <TableCell>N.D.F.</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconFile />
                      </TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconEdit />
                      </TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconTrash />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cfs?.map((cf) => (
                      <TableRow key={cf.id}>
                        <TableCell>{cf.data}</TableCell>
                        <TableCell>{cf.totale}</TableCell>
                        <TableCell>{cf.numeroDocFisc}</TableCell>
                        <TableCell>
                          <IconButton color="info">
                            <IconFile />
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <IconButton color="warning">
                            <IconEdit />
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <IconButton
                            color="error"
                            onClick={() => handleRemoveCF(cf.id!)}
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

        <AddFab href="/app/docfisc/chiusure-fiscali/aggiungi" />
      </>
    );
  }
};

export default ChiusureFiscaliLista;
