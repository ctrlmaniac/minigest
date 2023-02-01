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

interface Props {
  tipiDocumento: TipoDocFisc[];
  aziende: Azienda[];
}

interface ValuesState {
  cedente: Azienda | null;
  committente: Azienda | null;
  tipoDocumento: TipoDocFisc | null;
  data: string;
  numero: string;
  totale: number;
  reparti: FatturaReparto[] | [];
}

const Form: React.FC<Props> = ({ tipiDocumento, aziende }) => {
  const dispatch = useAppDispatch();

  const [values, setValues] = React.useState<ValuesState>({
    cedente: null,
    committente: null,
    tipoDocumento: find(tipiDocumento, ["descrizione", "fattura"]) || null,
    data: new Date().toISOString().split("T")[0],
    numero: "",
    totale: 0,
    reparti: [],
  });

  const [errors, setErrors] = React.useState({
    cedente: true,
    committente: true,
    tipoDocumento: false,
    data: true,
    numero: true,
    totale: false,
    reparti: true,
  });

  const [open, setOpen] = React.useState(false);
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

  const handleSubmit = () => {
    const fattura = {
      cedente: values.cedente!,
      committente: values.committente!,
      tipoDocumento: values.tipoDocumento!,
      data: values.data,
      numero: values.numero,
      totale: values.totale,
      reparti: values.reparti!,
    };

    dispatch(post(fattura));
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
                  Reparti
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ textAlign: "right" }}>
                  <Button onClick={() => setOpen(true)}>aggiungi</Button>
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

      <FormReparto
        open={open}
        handleClose={setOpen}
        onSubmit={handleSubmitReparto}
      />

      <SaveFab disabled={isDisabled} handleClick={handleSubmit} />
    </>
  );
};

export default Form;
