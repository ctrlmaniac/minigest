import React from "react";
import { AddFab } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import {
  Alert,
  Box,
  Grid,
  IconButton,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import list from "~/features/f24/list";
import { isEmpty } from "lodash";
import { IconFile, IconPencil } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

const F24: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { list: f24s, listing } = useAppSelector((state) => state.f24);

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
    const query = `&anno=${values.anno}&mese=${values.mese}`;

    dispatch(list(query));
  }, [values]);

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">F24</Typography>
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
            {listing && <LinearProgress />}
          </Box>
        </Paper>
      </Box>

      {isEmpty(f24s) ? (
        <Alert severity="info" variant="outlined">
          Non ci sono F24 nel periodo da te selezionato
        </Alert>
      ) : (
        <Box>
          <Paper>
            <Box p={2}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Data Scadenza</TableCell>
                    <TableCell>Totale</TableCell>
                    <TableCell sx={{ width: 50 }} align="center">
                      <IconFile />
                    </TableCell>
                    <TableCell sx={{ width: 50 }} align="center">
                      <IconPencil />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {f24s?.map((f24) => (
                    <TableRow key={f24.id}>
                      <TableCell>{f24.dataScadenza}</TableCell>
                      <TableCell>€ {f24.totale}</TableCell>
                      <TableCell align="center">
                        <IconButton
                          color="primary"
                          onClick={() =>
                            navigate(`/fisco/f24/dettagli/${f24.id}`)
                          }
                        >
                          <IconFile />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton
                          color="warning"
                          onClick={() =>
                            navigate(`/fisco/f24/modifica/${f24.id}`)
                          }
                        >
                          <IconPencil />
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

      <AddFab onClick={() => navigate("/fisco/f24/aggiungi")} />
    </>
  );
};

export default F24;
