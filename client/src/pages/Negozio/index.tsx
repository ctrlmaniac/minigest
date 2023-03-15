import {
  Box,
  Typography,
  Alert,
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  Button,
  Paper,
  List,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Snackbar,
  IconButton,
} from "@mui/material";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { AddFab } from "~/components";
import list from "~/features/negozio/list";
import post from "~/features/negozio/post";
import remove from "~/features/negozio/remove";
import { unsetResponse } from "~/features/negozio/slice";
import update from "~/features/negozio/update";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { Azienda, Negozio } from "~/types";

interface Values {
  azienda: Azienda;
  id: string | undefined;
  nome: string;
}

const NegozioLista: React.FC = () => {
  const dispatch = useAppDispatch();
  const { principal } = useAppSelector((state) => state.account);
  const {
    list: negozi,
    response,
    posting,
  } = useAppSelector((state) => state.negozio);

  React.useEffect(() => {
    if (principal?.azienda) {
      dispatch(list(principal!.azienda.id!));
    }
  }, []);

  /**
   * FORM
   */
  const [openForm, setOpenForm] = React.useState(false);
  const [values, setValues] = React.useState<Values>({
    azienda: principal?.azienda!,
    id: undefined,
    nome: "",
  });

  /**
   * SUBMIT
   */
  const handleSubmit = () => {
    setOpenForm(false);

    if (!values.id) {
      dispatch(post(values));
    } else {
      dispatch(update(values));
    }

    setValues({
      ...values,
      id: undefined,
      nome: "",
    });
  };

  const handleEdit = (negozio: Negozio) => {
    setValues({
      ...values,
      id: negozio.id!,
      nome: negozio.nome!,
    });

    setOpenForm(true);
  };

  const [delThis, setDelThis] = React.useState("");
  const handleDelete = () => {
    if (!isEmpty(delThis)) {
      dispatch(remove(delThis));
      setDelThis("");
    }
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Negozi</Typography>
      </Box>

      {isEmpty(negozi) ? (
        <Alert variant="outlined" severity="info">
          Non hai nessun negozio! Aggiungine uno!
        </Alert>
      ) : (
        <Box>
          <Paper>
            <Box p={2}>
              <Table>
                <TableBody>
                  {negozi?.map((negozio) => (
                    <TableRow key={negozio.id}>
                      <TableCell>{negozio.nome}</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconButton
                          color="warning"
                          onClick={() => handleEdit(negozio)}
                        >
                          <IconEdit />
                        </IconButton>
                      </TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconButton
                          color="error"
                          onClick={() => setDelThis(negozio.id!)}
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

      <Dialog
        open={openForm}
        onClose={() => {
          setOpenForm(false);
          setValues({ ...values, id: undefined, nome: "" });
        }}
      >
        <DialogTitle>Aggiungi negozio</DialogTitle>
        <DialogContent>
          <TextField
            fullWidth
            required
            label="Nome"
            name="nome"
            value={values.nome}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValues({ ...values, nome: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" fullWidth onClick={handleSubmit}>
            salva
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={!isEmpty(delThis)} onClose={() => setDelThis("")}>
        <DialogTitle>
          Sei sicuro di voler cancellare questo negozio?
        </DialogTitle>
        <DialogContent>
          Cancellando questo negozio eliminerai anche tutte le chiusure fiscali
          ad esso associate!
        </DialogContent>
        <DialogActions>
          <Button color="error" variant="text" onClick={handleDelete}>
            Elimina
          </Button>
          <Button variant="contained" onClick={() => setDelThis("")}>
            Annulla
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={!isEmpty(response)}
        autoHideDuration={3000}
        onClose={() => dispatch(unsetResponse())}
      >
        <Alert severity="info">{response}</Alert>
      </Snackbar>

      <AddFab onClick={() => setOpenForm(true)} />
    </>
  );
};

export default NegozioLista;
