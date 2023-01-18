import {
  Box,
  Container,
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
import { IconPlus, IconTrash } from "@tabler/icons";
import { isEmpty } from "lodash";
import React from "react";
import { Page, SaveFab } from "~/components";
import { ChiusuraFiscale, ChiusuraFiscaleReparto } from "~/models";
import RepartiForm from "./RepartiForm";
import { useAppDispatch } from "~/hooks";
import remove from "~/features/chiusureFiscaliReparti/remove";
import update from "~/features/chiusureFiscali/update";

interface Props {
  chiusura: ChiusuraFiscale;
}

const FormMofidicaCF: React.FC<Props> = ({ chiusura }) => {
  const dispatch = useAppDispatch();

  const [values, setValues] = React.useState({
    id: chiusura.id,
    data: chiusura.data,
    totale: chiusura.totale,
    numeroDocFisc: chiusura.numeroDocFisc,
    reparti: chiusura.reparti,
  });

  const [errors, setErrors] = React.useState({
    data: false,
    totale: false,
    numeroDocFisc: false,
    reparti: false,
  });

  // Reparti
  const [openDialog, setOpenDialog] = React.useState(false);

  // Save button
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    setIsDisabled(!Object.values(errors).every((value) => value === false));
  }, [errors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: value.length < 1,
    });
  };

  const handleSubmitReparto = (reparto: ChiusuraFiscaleReparto) => {
    const reparti = [...values.reparti, reparto];
    setValues({
      ...values,
      reparti: reparti,
    });

    setErrors({
      ...errors,
      reparti: reparti.length === 0,
    });
  };

  const handleRemoveReparto = (i: number) => {
    const reparti = [...values.reparti];

    reparti.splice(i, 1);

    setValues({
      ...values,
      reparti: reparti,
    });

    setErrors({
      ...errors,
      reparti: reparti.length === 0,
    });
  };

  const handleSubmit = () => {
    dispatch(update(chiusura.id!, values));
  };

  return (
    <>
      <Page title="Modifica">
        <Container>
          <Typography variant="h3" component="h1" gutterBottom>
            Chiusura Fiscale
          </Typography>

          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing={2}
                >
                  <Grid item xs={12}>
                    <TextField
                      label="Data"
                      type="date"
                      name="data"
                      value={values.data}
                      onChange={handleChange}
                      required
                      error={errors.data}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Totale"
                      type="number"
                      name="totale"
                      value={values.totale}
                      inputProps={{ step: 0.01 }}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={errors.totale}
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                      label="Totale Documenti Fiscali"
                      type="number"
                      name="numeroDocFisc"
                      inputProps={{ step: 1, min: 0 }}
                      value={values.numeroDocFisc}
                      onChange={handleChange}
                      fullWidth
                      required
                      error={errors.numeroDocFisc}
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
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item xs={9}>
                    <Typography variant="h6">Reparti IVA</Typography>
                  </Grid>
                  <Grid item xs={3}>
                    <Box sx={{ textAlign: "right" }}>
                      <IconButton
                        color="primary"
                        onClick={() => setOpenDialog(true)}
                      >
                        <IconPlus />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
                {!isEmpty(values.reparti) && (
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Aliquota</TableCell>
                        <TableCell>Totale</TableCell>
                        <TableCell>Tot. Annulli</TableCell>
                        <TableCell>Tot. Resi</TableCell>
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconTrash />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {values.reparti.map((reparto, i) => {
                        return (
                          <TableRow key={i}>
                            <TableCell>{reparto.aliquota} %</TableCell>
                            <TableCell>{reparto.totale} €</TableCell>
                            <TableCell>{reparto.totaleAnnulli} €</TableCell>
                            <TableCell>{reparto.totaleResi} €</TableCell>
                            <TableCell align="center">
                              <IconButton
                                color="error"
                                onClick={() => handleRemoveReparto(i)}
                              >
                                <IconTrash />
                              </IconButton>
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                )}
              </Box>
            </Paper>
          </Box>
        </Container>
      </Page>
      <RepartiForm
        open={openDialog}
        handleOpen={setOpenDialog}
        handleSubmit={handleSubmitReparto}
      />
      <SaveFab disabled={isDisabled} handleClick={handleSubmit} />
    </>
  );
};

export default FormMofidicaCF;