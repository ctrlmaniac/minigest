import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen, DialActions } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import remove from "~/features/azienda/remove";
import get from "~/features/azienda/get";
import { unsetResponse } from "~/features/azienda/slice";

const AziendaDettagli = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const {
    dettagli: azienda,
    getting,
    getError,
    removing,
    removeError,
    response,
  } = useAppSelector((state) => state.azienda);

  React.useEffect(() => {
    if (!isEmpty(id)) {
      dispatch(get(id!));
    }
  }, []);

  /**
   * DELETE
   */
  const [reqDel, setReqDel] = React.useState(false);

  const handleDelete = () => {
    setReqDel(false);
    dispatch(remove(id!));

    if (!removeError) {
      setTimeout(() => {
        navigate("/aziende");
      }, 3000);
    }
  };

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (!isEmpty(getError) || isEmpty(azienda)) {
      return <ErrorScreen>{response || "Errore di caricamento"}</ErrorScreen>;
    }

    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Dettagli Azienda</Typography>
        </Box>

        <Box mb={3}>
          <Paper>
            <Box p={2}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Titolo</TableCell>
                    <TableCell>{azienda?.titolo || "non fornito"}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: 150 }}>Denominazione</TableCell>
                    <TableCell>{azienda?.denominazione}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Paper>
        </Box>

        <Box mb={3}>
          <Paper>
            <Box p={2}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ width: 150 }}>Codice EORI</TableCell>
                    <TableCell>
                      {azienda?.codiceEORI || "non fornito"}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Codice Fiscale</TableCell>
                    <TableCell>{azienda?.codiceFiscale}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Partita IVA</TableCell>
                    <TableCell>
                      {azienda?.idFiscaleIVAPaese +
                        " " +
                        azienda?.idFiscaleIVACodice}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Paper>
        </Box>

        <Box>
          <Paper>
            <Box p={2}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ width: 150 }}>Sede</TableCell>
                    <TableCell>
                      {azienda?.sede?.indirizzo}, {azienda?.sede?.numeroCivico},{" "}
                      {azienda?.sede?.cap} {azienda?.sede?.comune} (
                      {azienda?.sede?.provincia}) - {azienda?.sede?.nazione}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Paper>
        </Box>

        <DialActions
          handleEdit={() => navigate(`/aziende/modifica/${id}`)}
          handleDelete={() => setReqDel(true)}
          loading={removing}
        />

        <Snackbar
          open={!isEmpty(response)}
          autoHideDuration={3000}
          onClose={() => dispatch(unsetResponse())}
        >
          <Alert severity="info">{response}</Alert>
        </Snackbar>

        <Dialog open={reqDel} onClose={() => setReqDel(true)}>
          <DialogTitle>
            Sei sicuro di voler cancellare questa azienda?
          </DialogTitle>
          <DialogContent>
            Cancellando questa azienda eliminerai anche tutti i corrispettivi,
            negozi, f24 e fatture
          </DialogContent>
          <DialogActions>
            <Button color="error" variant="text" onClick={handleDelete}>
              Elimina
            </Button>
            <Button variant="contained">Annulla</Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
};

export default AziendaDettagli;
