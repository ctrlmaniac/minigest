import {
  Alert,
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { AddFab, ErrorScreen, LoadingScreen } from "~/components";
import listVendita from "~/features/fatture/listVendita";
import { useAppDispatch, useAppSelector } from "~/hooks";

const FattureVenditaLista: React.FC = () => {
  const dispatch = useAppDispatch();

  const { selected: azienda } = useAppSelector((state) => state.aziende);
  const {
    list: fatture,
    listError,
    listing,
  } = useAppSelector((state) => state.fatture);

  React.useEffect(() => {
    if (azienda) {
      dispatch(listVendita(azienda.id!));
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
          <Typography variant="h3">Fatture Vendita</Typography>
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
                      <TableCell>Committente</TableCell>
                      <TableCell>Numero</TableCell>
                      <TableCell>Totale</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {fatture?.map((fattura) => (
                      <TableRow key={fattura.id!}>
                        <TableCell>{fattura.data}</TableCell>
                        <TableCell>
                          {fattura.committente.denominazione}
                        </TableCell>
                        <TableCell>{fattura.numero}</TableCell>
                        <TableCell>€ {fattura.totale}</TableCell>
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

export default FattureVenditaLista;
