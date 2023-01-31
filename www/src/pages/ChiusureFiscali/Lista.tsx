import React from "react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import list from "~/features/chiusureFiscali/list";
import { AddFab, ErrorScreen, LoadingScreen } from "~/components";
import {
  Alert,
  Box,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IconEdit, IconFile, IconTrash } from "@tabler/icons-react";
import remove from "~/features/chiusureFiscali/remove";
import { isEmpty } from "lodash";

const ChiusureFiscaliLista: React.FC = () => {
  const dispatch = useAppDispatch();
  const { selected: negozio } = useAppSelector((state) => state.negozi);
  const {
    list: cfs,
    listing,
    listError,
  } = useAppSelector((state) => state.chiusureFiscali);

  React.useEffect(() => {
    if (negozio) {
      dispatch(list(negozio.id!));
    }
  }, [negozio]);

  const handleRemoveCF = (id: string) => {
    dispatch(remove(id));
  };

  if (listing) {
    return <LoadingScreen />;
  } else if (listError) {
    return <ErrorScreen message={listError} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Lista Chiusure Fiscali</Typography>
        </Box>

        {isEmpty(cfs) ? (
          <Alert severity="info">Non ci sono chiusure, aggiungine una!</Alert>
        ) : (
          <Box>
            <Paper>
              <Box p={2}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Data</TableCell>
                      <TableCell>Totale</TableCell>
                      <TableCell>N.D.F.</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconFile />
                      </TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconEdit />
                      </TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconTrash />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {cfs?.map((cf) => (
                      <TableRow key={cf.id}>
                        <TableCell>{cf.data}</TableCell>
                        <TableCell>{cf.totale}</TableCell>
                        <TableCell>{cf.numeroDocFisc}</TableCell>
                        <TableCell>
                          <IconButton color="info">
                            <IconFile />
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <IconButton color="warning">
                            <IconEdit />
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          <IconButton
                            color="error"
                            onClick={() => handleRemoveCF(cf.id!)}
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

        <AddFab href="/app/docfisc/chiusure-fiscali/aggiungi" />
      </>
    );
  }
};

export default ChiusureFiscaliLista;
