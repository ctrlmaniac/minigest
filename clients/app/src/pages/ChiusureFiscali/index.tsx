import {
  Alert,
  AlertTitle,
  Box,
  IconButton,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  IconBuildingStore,
  IconFile,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { AddFab } from "components";
import list from "~/features/chiusureFiscali/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { useNavigate } from "react-router-dom";
import remove from "~/features/chiusureFiscali/remove";
import { unsetResponse } from "~/features/chiusureFiscali/slice";

const ChiusureFiscali: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selected } = useAppSelector((state) => state.negozi);
  const {
    list: cfs,
    removeError,
    response,
  } = useAppSelector((state) => state.chiusureFiscali);

  React.useEffect(() => {
    if (!isEmpty(selected)) {
      dispatch(list(selected.id!));
    }
  }, [selected]);

  const handleDelete = (id: string) => {
    dispatch(remove(id));

    setTimeout(() => {
      dispatch(unsetResponse());
    }, 1000);
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Chiusure Fiscali</Typography>
      </Box>

      {isEmpty(selected) && (
        <Alert variant="outlined" severity="error">
          <AlertTitle>Devi selezionare un negozio!</AlertTitle>
          Per visualizzare le chiusure fiscali devi prima selezionare un
          negozio. Clicca sull'icona <IconBuildingStore /> in alto a sinistra e
          selezionane uno!
        </Alert>
      )}
      {!isEmpty(selected) && isEmpty(cfs) && (
        <Alert variant="outlined" severity="info">
          Non sono presenti chiusure fiscali! Aggiungine una!
        </Alert>
      )}
      {!isEmpty(selected) && !isEmpty(cfs) && (
        <>
          <Box mb={3}>
            <Alert severity="info" variant="outlined">
              Stai visualizzando le chiusure fiscali del negozio {selected.nome}
            </Alert>
          </Box>

          <Box>
            <Paper>
              <Box p={2}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Data</TableCell>
                      <TableCell>Totale</TableCell>
                      <TableCell>N.D.F</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconButton>
                          <IconFile />
                        </IconButton>
                      </TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconButton>
                          <IconPencil />
                        </IconButton>
                      </TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconButton>
                          <IconTrash />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cfs?.map((cf) => (
                      <TableRow key={cf.id}>
                        <TableCell>{cf.data}</TableCell>
                        <TableCell>€ {cf.totale}</TableCell>
                        <TableCell>{cf.numeroDocFisc}</TableCell>
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconButton
                            color="info"
                            onClick={() => navigate(`dettagli/${cf.id}`)}
                          >
                            <IconFile />
                          </IconButton>
                        </TableCell>
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconButton
                            color="warning"
                            onClick={() => navigate(`modifica/${cf.id}`)}
                          >
                            <IconPencil />
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <IconButton
                            color="error"
                            onClick={() => handleDelete(cf.id!)}
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

          <Snackbar open={!isEmpty(response)}>
            <Alert severity={removeError ? "error" : "success"}>
              {response}
            </Alert>
          </Snackbar>
        </>
      )}

      {!isEmpty(selected) && <AddFab onClick={() => navigate("aggiungi")} />}
    </>
  );
};

export default ChiusureFiscali;
