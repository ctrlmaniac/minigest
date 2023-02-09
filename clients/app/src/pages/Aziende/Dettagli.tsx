import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen } from "components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import {
  Alert,
  Box,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import remove from "~/features/aziende/remove";
import get from "~/features/aziende/get";
import { unsetResponses } from "~/features/aziende/slice";
import { DialActions } from "components";

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
    removeResponse,
  } = useAppSelector((state) => state.aziende);

  React.useEffect(() => {
    if (!isEmpty(id)) {
      dispatch(get(id!));
    }
  }, []);

  const handleDelete = () => {
    dispatch(remove(id!));
    setTimeout(() => {
      dispatch(unsetResponses());
      navigate("/aziende");
    }, 2000);
  };

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (!isEmpty(getError) || isEmpty(azienda)) {
      return <ErrorScreen message={getError || "Errore di caricamento"} />;
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
          handleDelete={handleDelete}
          loading={removing}
        />

        <Snackbar open={!isEmpty(removeResponse)} autoHideDuration={500}>
          <Alert severity={removeError ? "error" : "success"}>
            {removeResponse}
          </Alert>
        </Snackbar>
      </>
    );
  }
};

export default AziendaDettagli;
