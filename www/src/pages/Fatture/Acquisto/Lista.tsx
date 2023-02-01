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
import { IconFile } from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AddFab, ErrorScreen, LoadingScreen } from "~/components";
import listAcquisto from "~/features/fatture/listAcquisto";
import { useAppDispatch, useAppSelector } from "~/hooks";

const FattureAcquistoLista: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { selected: azienda } = useAppSelector((state) => state.aziende);
  const {
    list: fatture,
    listError,
    listing,
  } = useAppSelector((state) => state.fatture);

  React.useEffect(() => {
    if (azienda) {
      dispatch(listAcquisto(azienda.id!));
    }
  }, [azienda]);

  if (listing) {
    return <LoadingScreen />;
  } else if (listError) {
    return <ErrorScreen message={listError} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Fatture Acquisto</Typography>
        </Box>

        <Box>
          <Paper>
            <Box p={2}>
              {isEmpty(fatture) ? (
                <Alert severity="info">
                  Non ci sono fatture, aggiunge una!
                </Alert>
              ) : (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Data</TableCell>
                      <TableCell>Cedente</TableCell>
                      <TableCell>Numero</TableCell>
                      <TableCell>Totale</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconFile />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fatture?.map((fattura) => (
                      <TableRow key={fattura.id!}>
                        <TableCell>{fattura.data}</TableCell>
                        <TableCell>{fattura.cedente.denominazione}</TableCell>
                        <TableCell>{fattura.numero}</TableCell>
                        <TableCell>€ {fattura.totale}</TableCell>
                        <TableCell align="center">
                          <IconButton
                            color="info"
                            onClick={() =>
                              navigate(
                                `/app/docfisc/fatture/dettagli/${fattura.id!}`
                              )
                            }
                          >
                            <IconFile />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Box>
          </Paper>
        </Box>

        <AddFab href="/app/docfisc/fatture/aggiungi" />
      </>
    );
  }
};

export default FattureAcquistoLista;
