import React from "react";
import { find, isEmpty } from "lodash";
import { Azienda, FatturaReparto, TipoDocFisc } from "~/types";
import {
  Alert,
  Autocomplete,
  AutocompleteChangeReason,
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
import { SaveFab } from "components";
import FormReparto from "./FormReparto";
import { IconTrash } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import post from "~/features/fatture/post";
import FatturaScadenza from "~/types/fatturaScadenza";
import FormScadenza from "./FormScadenza";
import FatturaPagamento from "~/types/fatturaPagamento";
import FormPagamento from "./FormPagamento";
import { unsetResponse } from "~/features/fatture/slice";
import { useNavigate } from "react-router-dom";

interface Props {
  tipiDocumento: TipoDocFisc[];
  aziende: Azienda[];
}

interface ValuesState {
  cedente: Azienda | null;
  committente: Azienda | null;
  tipoDocumento: TipoDocFisc | null;
  data: string;
  dataSDI: string;
  numero: string;
  totale: number;
  reparti: FatturaReparto[] | [];
  scadenze: FatturaScadenza[] | [];
  pagamenti: FatturaPagamento[] | [];
}

const Form: React.FC<Props> = ({ tipiDocumento, aziende }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { posting, postError, response } = useAppSelector(
    (state) => state.fatture
  );

  const [values, setValues] = React.useState<ValuesState>({
    cedente: null,
    committente: null,
    tipoDocumento: find(tipiDocumento, ["descrizione", "fattura"]) || null,
    data: new Date().toISOString().split("T")[0],
    dataSDI: "",
    numero: "",
    totale: 0,
    reparti: [],
    scadenze: [],
    pagamenti: [],
  });

  const [errors, setErrors] = React.useState({
    cedente: true,
    committente: true,
    tipoDocumento: false,
    data: false,
    dataSDI: false,
    numero: true,
    totale: false,
    reparti: true,
    scadenze: false,
    pagamenti: false,
  });

  const [openFormReparti, setOpenFormReparti] = React.useState(false);
  const [openFormScadenze, setOpenFormScadenze] = React.useState(false);
  const [openFormPagamenti, setOpenFormPagamenti] = React.useState(false);
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    setIsDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  const handleCedenteChange = (
    event: React.SyntheticEvent,
    value: Azienda | null,
    reason: AutocompleteChangeReason
  ) => {
    setValues({
      ...values,
      cedente: value,
    });

    setErrors({
      ...errors,
      cedente: isEmpty(value),
    });
  };

  const handleCommittenteChange = (
    event: React.SyntheticEvent,
    value: Azienda | null,
    reason: AutocompleteChangeReason
  ) => {
    setValues({
      ...values,
      committente: value,
    });

    setErrors({
      ...errors,
      committente: isEmpty(value),
    });
  };

  const handleTipoDocFiscChange = (
    event: React.SyntheticEvent,
    value: TipoDocFisc | null,
    reason: AutocompleteChangeReason
  ) => {
    setValues({
      ...values,
      tipoDocumento: value,
    });

    setErrors({
      ...errors,
      tipoDocumento: isEmpty(value),
    });
  };

  const handleSimpleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name, required } = e.target;

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

  // REPARTI
  const handleSubmitReparto = (reparto: FatturaReparto) => {
    const reparti = [...values.reparti, reparto];

    setValues({
      ...values,
      reparti: reparti,
    });

    setErrors({
      ...errors,
      reparti: reparti.length < 1,
    });
  };

  const handleDeleteReparto = (index: number) => {
    const reparti = [...values.reparti];
    reparti.splice(index, 1);

    setValues({
      ...values,
      reparti: reparti,
    });

    setErrors({
      ...errors,
      reparti: reparti.length < 1,
    });
  };

  // SCADENZE
  const handleSubmitScadenza = (scadenza: FatturaScadenza) => {
    const scadenze = [...values.scadenze, scadenza];

    setValues({
      ...values,
      scadenze: scadenze,
    });
  };

  const handleDeleteScadenza = (index: number) => {
    const scadenze = [...values.scadenze];
    scadenze.splice(index, 1);

    setValues({
      ...values,
      scadenze: scadenze,
    });
  };

  // PAGAMENTI
  const handleSubmitPagamento = (pagamento: FatturaPagamento) => {
    const pagamenti = [...values.pagamenti, pagamento];

    setValues({
      ...values,
      pagamenti: pagamenti,
    });
  };

  const handleDeletePagamento = (index: number) => {
    const pagamenti = [...values.pagamenti];
    pagamenti.splice(index, 1);

    setValues({
      ...values,
      pagamenti: pagamenti,
    });
  };

  const handleSubmit = () => {
    const fattura = {
      cedente: values.cedente!,
      committente: values.committente!,
      tipoDocumento: values.tipoDocumento!,
      data: values.data,
      dataSDI: values.dataSDI,
      numero: values.numero,
      totale: values.totale,
      reparti: values.reparti!,
      scadenze: values.scadenze!,
      pagamenti: values.pagamenti!,
    };

    dispatch(post(fattura));

    setTimeout(() => {
      unsetResponse();

      if (!postError) {
        navigate("/docfisc/fatture");
      }
    }, 1000);
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Aggiungi Fattura</Typography>
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
              <Grid item xs={12}>
                <Autocomplete
                  fullWidth
                  disablePortal
                  options={tipiDocumento}
                  getOptionLabel={(option) => option.descrizione}
                  value={values.tipoDocumento}
                  isOptionEqualToValue={(option, value) =>
                    option.descrizione === value.descrizione
                  }
                  onChange={handleTipoDocFiscChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Tipo Doc. Fisc."
                      name="tipoDocumento"
                      required
                      error={errors.tipoDocumento}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Autocomplete
                  fullWidth
                  disablePortal
                  options={aziende}
                  getOptionLabel={(option) => option.denominazione}
                  value={values.cedente}
                  isOptionEqualToValue={(option, value) =>
                    option.denominazione === value.denominazione
                  }
                  onChange={handleCedenteChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Cedente"
                      name="cedente"
                      required
                      error={errors.cedente}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Autocomplete
                  fullWidth
                  disablePortal
                  options={aziende!}
                  getOptionLabel={(option) => option.denominazione}
                  value={values.committente}
                  isOptionEqualToValue={(option, value) =>
                    option.denominazione === value.denominazione
                  }
                  onChange={handleCommittenteChange}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Committente"
                      name="committente"
                      required
                      error={errors.committente}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Data"
                  name="data"
                  value={values.data}
                  error={errors.data}
                  onChange={handleSimpleChange}
                  type="date"
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Data SDI"
                  name="dataSDI"
                  value={values.dataSDI}
                  error={errors.dataSDI}
                  onChange={handleSimpleChange}
                  type="date"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Numero"
                  name="numero"
                  value={values.numero}
                  error={errors.numero}
                  onChange={handleSimpleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Totale documento"
                  name="totale"
                  value={values.totale}
                  error={errors.totale}
                  onChange={handleSimpleChange}
                  type="number"
                  inputProps={{ step: 0.01 }}
                  required
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      <Box mb={3}>
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
                  <Button onClick={() => setOpenFormReparti(true)}>
                    aggiungi
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(values.reparti) ? (
                <Alert severity="error" variant="outlined">
                  Devi aggiungere almeno un reparto!
                </Alert>
              ) : (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Aliquota</TableCell>
                      <TableCell>Imponibile</TableCell>
                      <TableCell>Imposta</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconTrash />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {values.reparti.map((reparto, i) => (
                      <TableRow key={i}>
                        <TableCell>% {reparto.aliquota}</TableCell>
                        <TableCell>€ {reparto.imponibile}</TableCell>
                        <TableCell>€ {reparto.imposta}</TableCell>
                        <TableCell>
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

      <Box mb={3}>
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
                  Scadenze
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ textAlign: "right" }}>
                  <Button onClick={() => setOpenFormScadenze(true)}>
                    aggiungi
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(values.scadenze) ? (
                <Alert severity="warning" variant="outlined">
                  Questa fattura non ha scadenze! Verrà contata la data del
                  documento come scadenza unica!
                </Alert>
              ) : (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Data</TableCell>
                      <TableCell>Importo</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconTrash />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {values.scadenze.map((scadenza, i) => (
                      <TableRow key={i}>
                        <TableCell>{scadenza.data}</TableCell>
                        <TableCell>€ {scadenza.importo}</TableCell>
                        <TableCell>
                          <IconButton
                            color="error"
                            onClick={() => handleDeleteScadenza(i)}
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
                  Pagamenti
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ textAlign: "right" }}>
                  <Button onClick={() => setOpenFormPagamenti(true)}>
                    aggiungi
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(values.pagamenti) ? (
                <Alert severity="warning" variant="outlined">
                  Questa fattura non ha pagamenti registrati
                </Alert>
              ) : (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Data</TableCell>
                      <TableCell>Importo</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconTrash />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {values.pagamenti.map((pagamento, i) => (
                      <TableRow key={i}>
                        <TableCell>{pagamento.data}</TableCell>
                        <TableCell>€ {pagamento.importo}</TableCell>
                        <TableCell>
                          <IconButton
                            color="error"
                            onClick={() => handleDeletePagamento(i)}
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

      <FormReparto
        open={openFormReparti}
        handleClose={setOpenFormReparti}
        onSubmit={handleSubmitReparto}
      />

      <FormScadenza
        open={openFormScadenze}
        handleClose={setOpenFormScadenze}
        onSubmit={handleSubmitScadenza}
      />

      <FormPagamento
        open={openFormPagamenti}
        handleClose={setOpenFormPagamenti}
        onSubmit={handleSubmitPagamento}
      />

      <SaveFab disabled={isDisabled} onClick={handleSubmit} loading={posting} />

      <Snackbar
        open={!isEmpty(response)}
        autoHideDuration={2000}
        onClose={() => dispatch(unsetResponse())}
      >
        <Alert severity={postError ? "error" : "success"}>{response}</Alert>
      </Snackbar>
    </>
  );
};

export default Form;
