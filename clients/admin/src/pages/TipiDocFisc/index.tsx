import React from "react";
import { AddFab, ErrorScreen, LoadingScreen } from "components";
import list from "~/features/tipiDocFisc/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
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
  Alert,
  LinearProgress,
} from "@mui/material";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { TipoDocFisc } from "~/types";
import post from "~/features/tipiDocFisc/post";
import { unsetResponse } from "~/features/tipiDocFisc/slice";
import update from "~/features/tipiDocFisc/update";
import remove from "~/features/tipiDocFisc/remove";

const TipiDocFisc: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    list: tdfs,
    listing,
    listError,
    response,
    posting,
    putting,
  } = useAppSelector((state) => state.tipiDocFisc);

  React.useEffect(() => {
    dispatch(list());
  }, []);

  const [values, setValues] = React.useState<TipoDocFisc>({
    id: undefined,
    codice: "",
    descrizione: "",
  });

  const [errors, setErrors] = React.useState({
    codice: true,
    descrizione: true,
  });

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
      [name]: value.toString().length < 1,
    });
  };

  const [open, setOpen] = React.useState(false);

  const handleEdit = (object: TipoDocFisc) => {
    setValues({
      ...values,
      ...object,
    });

    setErrors({
      codice: false,
      descrizione: false,
    });

    setOpen(true);
  };

  const unsetValues = () => {
    setValues({
      id: undefined,
      codice: "",
      descrizione: "",
    });

    setErrors({
      codice: true,
      descrizione: true,
    });
  };

  const handleClose = () => {
    setOpen(false);
    unsetValues();
  };

  const handleSubmit = () => {
    if (isEmpty(values.id)) {
      dispatch(post(values));

      if (!posting) {
        handleClose();
      }
    } else {
      dispatch(update(values.id!, values));

      if (!putting) {
        handleClose();
      }
    }

    setTimeout(() => {
      dispatch(unsetResponse());
    }, 1000);
  };

  const handleDelete = (id: string) => {
    dispatch(remove(id));

    setTimeout(() => {
      dispatch(unsetResponse());
    }, 1000);
  };

  if (listing) {
    return <LoadingScreen />;
  } else {
    if (listError || isEmpty(tdfs)) {
      return <ErrorScreen message={response || "Errore di caricamento"} />;
    }

    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Tipo di Doc. Fisc.</Typography>
        </Box>

        <Box>
          <Paper>
            <Box p={2}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ width: 50 }}>Codice</TableCell>
                    <TableCell>Descrizione</TableCell>
                    <TableCell sx={{ width: 50 }} align="center">
                      <IconPencil />
                    </TableCell>
                    <TableCell sx={{ width: 50 }} align="center">
                      <IconTrash />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tdfs?.map((tdf: TipoDocFisc) => (
                    <TableRow key={tdf.id}>
                      <TableCell>{tdf.codice}</TableCell>
                      <TableCell>{tdf.descrizione}</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconButton
                          color="warning"
                          onClick={() => handleEdit(tdf)}
                        >
                          <IconPencil />
                        </IconButton>
                      </TableCell>
                      <TableCell
                        sx={{ width: 50 }}
                        align="center"
                        onClick={() => handleDelete(tdf.id!)}
                      >
                        <IconButton color="error">
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

        <Dialog open={open} onClose={handleClose}>
          <DialogContent>
            <TextField
              fullWidth
              label="Codice"
              name="codice"
              value={values.codice}
              error={errors.codice}
              margin="normal"
              onChange={handleChange}
            />

            <TextField
              fullWidth
              label="Descrizione"
              name="descrizione"
              value={values.descrizione}
              error={errors.descrizione}
              margin="normal"
              onChange={handleChange}
            />
            {(posting || putting) && <LinearProgress />}
          </DialogContent>
          <DialogActions>
            <Button
              fullWidth
              variant="contained"
              disabled={isDisabled}
              onClick={handleSubmit}
            >
              salva
            </Button>
          </DialogActions>
        </Dialog>

        <AddFab onClick={() => setOpen(true)} />

        <Snackbar open={!isEmpty(response)}>
          <Alert severity="info">{response || "Errore"}</Alert>
        </Snackbar>
      </>
    );
  }
};

export default TipiDocFisc;
