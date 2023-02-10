import {
  Alert,
  AlertTitle,
  Box,
  Button,
  ButtonBase,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  LinearProgress,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import {
  IconBuildingWarehouse,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { AddFab } from "components";
import { updateSelectedNegozio } from "~/features/aziende/slice";
import remove from "~/features/negozi/remove";
import { unsetResponse } from "~/features/negozi/slice";
import update from "~/features/negozi/update";
import { useAppDispatch, useAppSelector } from "~/hooks";
import post from "~/features/negozi/post";
import { Negozio } from "~/types";

const Negozi: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selected: selectedAzienda } = useAppSelector(
    (state) => state.aziende
  );
  const { putting, putError, removeError, posting, response } = useAppSelector(
    (state) => state.negozi
  );

  const [editMode, setEditMode] = React.useState(false);
  const [createMode, setCreateMode] = React.useState(false);
  const [values, setvalues] = React.useState({
    id: undefined,
    nome: "",
  });
  const [error, setError] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvalues({
      ...values,
      nome: e.target.value,
    });

    setError(e.target.value.toString().length < 1);
  };

  const handleDelete = (id: string) => {
    dispatch(remove(id));

    setTimeout(() => {
      dispatch(unsetResponse());
    }, 2000);
  };

  const setEdit = (negozio: any) => {
    setvalues({
      ...negozio,
    });

    setEditMode(true);
  };

  const unsetValues = () => {
    setvalues({
      id: undefined,
      nome: "",
    });

    setError(false);
  };

  const closeDialog = () => {
    setEditMode(false);
    setCreateMode(false);
    unsetValues();
  };

  const updateNegozio = () => {
    dispatch(update(values));
    closeDialog();

    setTimeout(() => {
      dispatch(unsetResponse());
      dispatch(updateSelectedNegozio(values));
    }, 1000);
  };

  const postNegozio = (payload: Negozio) => {
    dispatch(post(payload));
    closeDialog();
  };

  const handleSubmit = () => {
    if (createMode) {
      const payload = {
        azienda: selectedAzienda,
        nome: values.nome,
      };

      postNegozio(payload);
    } else if (editMode) {
      updateNegozio();
    }
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3" gutterBottom>
          Negozi
        </Typography>
      </Box>

      {isEmpty(selectedAzienda) && (
        <Alert variant="outlined" severity="error">
          <AlertTitle>Non hai selezionato nessuna azienda!</AlertTitle>
          Prima di visualizzare la lista dei negozi, seleziona l'azienda a cui
          appartengono. Clicca su <IconBuildingWarehouse /> in alto a destra per
          selezionare l'azienda!
        </Alert>
      )}
      {!isEmpty(selectedAzienda) && isEmpty(selectedAzienda.negozi) && (
        <Alert variant="outlined" severity="info">
          <AlertTitle>Non hai nessun negozio</AlertTitle>
          Aggiungine uno!
        </Alert>
      )}
      {!isEmpty(selectedAzienda) && !isEmpty(selectedAzienda.negozi) && (
        <>
          <Box mb={3}>
            <Alert variant="outlined" severity="info">
              Stai visualizzando i negozi de {selectedAzienda.denominazione}
            </Alert>
          </Box>

          <Paper>
            <Box p={2}>
              <Table>
                <TableBody>
                  {selectedAzienda.negozi?.map((negozio) => (
                    <TableRow key={negozio.id}>
                      <TableCell>{negozio.nome}</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconButton
                          color="warning"
                          onClick={() => setEdit(negozio)}
                        >
                          <IconPencil />
                        </IconButton>
                      </TableCell>
                      <TableCell
                        sx={{ width: 50 }}
                        align="center"
                        onClick={() => handleDelete(negozio.id!)}
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
        </>
      )}

      <Dialog open={editMode} onClose={closeDialog}>
        <DialogContent>
          <TextField
            fullWidth
            label="Nome"
            value={values.nome}
            error={error}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button fullWidth variant="contained" onClick={updateNegozio}>
            salva
          </Button>
        </DialogActions>
        {putting && <LinearProgress />}
      </Dialog>

      <Dialog open={createMode} onClose={closeDialog}>
        <DialogContent>
          <TextField
            fullWidth
            label="Nome"
            value={values.nome}
            error={error}
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button fullWidth variant="contained" onClick={handleSubmit}>
            salva
          </Button>
        </DialogActions>
        {putting && <LinearProgress />}
      </Dialog>

      <Snackbar open={!isEmpty(response)}>
        <Alert severity="info">{response}</Alert>
      </Snackbar>

      {!isEmpty(selectedAzienda) && (
        <AddFab onClick={() => setCreateMode(true)} loading={posting} />
      )}
    </>
  );
};

export default Negozi;
