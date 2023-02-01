import React from "react";
import { find, isEmpty } from "lodash";
import { Azienda, Fattura, FatturaReparto, TipoDocFisc } from "~/types";
import {
  Alert,
  Autocomplete,
  AutocompleteChangeReason,
  Box,
  Button,
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
import { SaveFab } from "~/components";
import FormReparto from "./FormReparto";
import { IconTrash } from "@tabler/icons-react";
import { useAppDispatch } from "~/hooks";
import post from "~/features/fatture/post";
import update from "~/features/fatture/update";
import FatturaScadenza from "~/types/fatturaScadenza";
import FormScadenza from "./FormScadenza";
import FatturaPagamento from "~/types/fatturaPagamento";
import FormPagamento from "./FormPagamento";

interface Props {
  tipiDocumento: TipoDocFisc[];
  aziende: Azienda[];
  dettagli: Fattura;
}

interface ValuesState {
  cedente: Azienda | null;
  committente: Azienda | null;
  tipoDocumento: TipoDocFisc | null;
  data: string;
  numero: string;
  totale: number;
  reparti: FatturaReparto[] | [];
  scadenze: FatturaScadenza[] | [];
  pagamenti: FatturaPagamento[] | [];
}

const Form: React.FC<Props> = ({ tipiDocumento, aziende, dettagli }) => {
  const dispatch = useAppDispatch();

  const [values, setValues] = React.useState<ValuesState>({
    cedente: dettagli.cedente,
    committente: dettagli.committente,
    tipoDocumento: dettagli.tipoDocumento,
    data: dettagli.data,
    numero: dettagli.numero,
    totale: dettagli.totale,
    reparti: dettagli.reparti,
    scadenze: dettagli.scadenze,
    pagamenti: dettagli.pagamenti!,
  });

  const [errors, setErrors] = React.useState({
    cedente: false,
    committente: false,
    tipoDocumento: false,
    data: false,
    numero: false,
    totale: false,
    reparti: false,
    scadenze: false,
    pagamenti: false,
  });

  const [openFromReparto, setOpenFormReparto] = React.useState(false);
  const [openFromScadenza, setOpenFormScadenza] = React.useState(false);
  const [openFromPagamento, setOpenFormPagamento] = React.useState(false);
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
        [name]: value.toString().length < 1,
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

    setErrors({
      ...errors,
      scadenze: scadenze.length < 1,
    });
  };

  const handleDeleteScadenza = (index: number) => {
    const scadenze = [...values.scadenze];
    scadenze.splice(index, 1);

    setValues({
      ...values,
      scadenze: scadenze,
    });

    setErrors({
      ...errors,
      scadenze: scadenze.length < 1,
    });
  };

  // PAGAMENTI
  const handleSubmitPagamento = (pagamento: FatturaScadenza) => {
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
      numero: values.numero,
      totale: values.totale,
      reparti: values.reparti!,
      scadenze: values.scadenze!,
      pagamenti: values.pagamenti!,
    };

    dispatch(update(dettagli.id!, fattura));
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
                  <Button onClick={() => setOpenFormReparto(true)}>
                    aggiungi
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(values.reparti) ? (
                <Alert severity="error">
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
                  <Button onClick={() => setOpenFormScadenza(true)}>
                    aggiungi
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(values.scadenze) ? (
                <Alert severity="error">
                  Devi aggiungere almeno una scadenza!
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
                  Pagamenti
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ textAlign: "right" }}>
                  <Button onClick={() => setOpenFormPagamento(true)}>
                    aggiungi
                  </Button>
                </Box>
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(values.pagamenti) ? (
                <Alert severity="warning">Nessun pagamento</Alert>
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
                    {values.pagamenti.map((p, i) => (
                      <TableRow key={i}>
                        <TableCell>{p.data}</TableCell>
                        <TableCell>€ {p.importo}</TableCell>
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
        open={openFromReparto}
        handleClose={setOpenFormReparto}
        onSubmit={handleSubmitReparto}
      />

      <FormScadenza
        open={openFromScadenza}
        handleClose={setOpenFormScadenza}
        onSubmit={handleSubmitScadenza}
      />

      <FormPagamento
        open={openFromPagamento}
        handleClose={setOpenFormPagamento}
        onSubmit={handleSubmitPagamento}
      />

      <SaveFab disabled={isDisabled} handleClick={handleSubmit} />
    </>
  );
};

export default Form;
