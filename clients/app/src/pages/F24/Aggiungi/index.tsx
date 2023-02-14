import {
  Alert,
  Box,
  Fab,
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
import React from "react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import RepartoErario from "./RepartoErario";
import { IconCirclePlus, IconTrash } from "@tabler/icons-react";
import { F24 } from "~/types";
import { SaveFab } from "components";
import post from "~/features/f24/post";

const Aggiungi: React.FC = () => {
  const dispatch = useAppDispatch();
  const { dettagli: account } = useAppSelector((state) => state.account);

  /**
   * VALORI COMUNI
   */
  const [values, setValues] = React.useState({
    dataScadenza: new Date().toISOString().split("T")[0],
  });

  const [errors, setErrors] = React.useState({
    dataScadenza: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { required, value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (required) {
      setErrors({
        ...errors,
        [name]: value.toString().length < 1,
      });
    }
  };

  /**
   * SEZIONE ERARIO
   */
  const [erario, setErario] = React.useState({
    codiceUfficio: "",
    codiceAtto: "",
  });

  const handleErarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setErario({
      ...erario,
      [name]: value,
    });
  };

  const [erarioReparti, setErarioReparti] = React.useState<any>([]);
  const [erarioDialogOpen, setErarioDialogOpen] = React.useState(false);

  const handleAddErarioReparto = (reparto: any) => {
    setErarioReparti([...erarioReparti, reparto]);
  };

  const handleRemoveErarioReparto = (i: number) => {
    const reparti = [...erarioReparti];
    reparti.splice(i, 1);

    setErarioReparti(reparti);
  };

  /**
   * SUBMIT
   */
  const handleSubmit = () => {
    const payload: F24 = {
      utente: account!,
      ...values,
      sezioneErario: null,
      sezioneInps: [],
      sezioneRegioni: [],
      sezioneTributiLocali: null,
      sezioneInail: [],
      sezioneAltriEnti: [],
    };

    if (erarioReparti.length > 0) {
      payload.sezioneErario = {
        ...erario,
        reparti: erarioReparti,
      };
    }

    dispatch(post(payload));
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Aggiungi F24</Typography>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <TextField
              fullWidth
              label="Data di Scadenza"
              name="dataScadenza"
              value={values.dataScadenza}
              error={errors.dataScadenza}
              onChange={handleChange}
              required
              type="date"
            />
          </Box>
        </Paper>
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
              <Grid item xs={10}>
                <Typography variant="h6">Sezione Erario</Typography>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "right" }}>
                <IconButton
                  color="info"
                  onClick={() => setErarioDialogOpen(true)}
                >
                  <IconCirclePlus />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Codice Ufficio"
                  name="codiceUfficio"
                  value={erario.codiceUfficio}
                  onChange={handleErarioChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Codice Atto"
                  name="codiceAtto"
                  value={erario.codiceAtto}
                  onChange={handleErarioChange}
                />
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(erarioReparti) ? (
                <Alert severity="info">Sezione Erario vuota</Alert>
              ) : (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Codice Tributo</TableCell>
                      <TableCell>Rat./Reg./Prov./Mese rif.</TableCell>
                      <TableCell>Anno rif.</TableCell>
                      <TableCell align="right">Importi a debito</TableCell>
                      <TableCell align="right">Importi a credito</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconTrash />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {erarioReparti.map((reparto: any, i: number) => (
                      <TableRow key={i}>
                        <TableCell>{reparto.codiceTributo}</TableCell>
                        <TableCell>{reparto.riferimento}</TableCell>
                        <TableCell>{reparto.anno}</TableCell>
                        <TableCell align="right">
                          {reparto.importoDebito} €
                        </TableCell>
                        <TableCell align="right">
                          {reparto.importoCredito} €
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            color="error"
                            onClick={() => handleRemoveErarioReparto(i)}
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

      <RepartoErario
        open={erarioDialogOpen}
        onClose={setErarioDialogOpen}
        onSave={handleAddErarioReparto}
      />

      <SaveFab disabled={false} onClick={handleSubmit} />
    </>
  );
};

export default Aggiungi;
