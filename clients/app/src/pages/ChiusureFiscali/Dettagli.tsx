import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DialActions, ErrorScreen, LoadingScreen } from "components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import {
  Alert,
  Box,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import get from "~/features/chiusureFiscali/get";
import remove from "~/features/chiusureFiscali/remove";
import { unsetResponse } from "~/features/chiusureFiscali/slice";

const Dettagli: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { getting, getError, response, dettagli, removeError, removing } =
    useAppSelector((state) => state.chiusureFiscali);

  React.useEffect(() => {
    if (!isEmpty(id)) {
      dispatch(get(id!));
    }
  }, [id]);

  const handleDelete = () => {
    dispatch(remove(id!));

    setTimeout(() => {
      unsetResponse();
      navigate("/docfisc/chiusure-fiscali");
    }, 1000);
  };

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (getError || isEmpty(dettagli)) {
      return (
        <ErrorScreen
          message={response || "Errore caricamento chiusura fiscale"}
        />
      );
    }

    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Dettagli Chiusura Fiscale</Typography>
        </Box>

        <Box mb={3}>
          <Paper>
            <Box p={2}>
              <Typography variant="h6" gutterBottom>
                Riepilogo
              </Typography>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>Totale</TableCell>
                    <TableCell>N.D.F</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell>{dettagli!.data}</TableCell>
                    <TableCell>€ {dettagli!.totale}</TableCell>
                    <TableCell>{dettagli!.numeroDocFisc}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Paper>
        </Box>

        <Box>
          <Paper>
            <Box p={2}>
              <Typography variant="h6" gutterBottom>
                Reparti
              </Typography>

              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Reparto</TableCell>
                    <TableCell>Totale</TableCell>
                    <TableCell>Annulli</TableCell>
                    <TableCell>Resi</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dettagli!.reparti.map((reparto) => (
                    <TableRow key={reparto.id}>
                      <TableCell>%{reparto.aliquota}</TableCell>
                      <TableCell>€ {reparto.totale}</TableCell>
                      <TableCell>€ {reparto.totaleAnnulli}</TableCell>
                      <TableCell>€ {reparto.totaleResi}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Paper>
        </Box>

        <DialActions
          loading={removing}
          handleDelete={() => handleDelete()}
          handleEdit={() =>
            navigate(`/docfisc/chiusure-fiscali/modifica/${dettagli.id!}`)
          }
        />

        <Snackbar open={!isEmpty(response)}>
          <Alert severity={removeError ? "error" : "success"}>{response}</Alert>
        </Snackbar>
      </>
    );
  }
};

export default Dettagli;
