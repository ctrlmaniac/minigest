import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen } from "components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import {
  Alert,
  Box,
  CircularProgress,
  Container,
  Paper,
  Snackbar,
  SpeedDial,
  SpeedDialAction,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { IconPencil, IconSettings, IconTrash } from "@tabler/icons-react";
import remove from "~/features/aziende/remove";
import { red } from "@mui/material/colors";
import get from "~/features/aziende/get";
import { unsetResponses } from "~/features/aziende/slice";

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

        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <Container sx={{ textAlign: "right", position: "relative" }}>
            <SpeedDial ariaLabel="azioni su azienda" icon={<IconSettings />}>
              <SpeedDialAction
                icon={<IconPencil />}
                tooltipTitle="modifica"
                onClick={() => navigate(`/aziende/modifica/${id}`)}
              />
              <SpeedDialAction
                icon={<IconTrash />}
                tooltipTitle="elimina"
                onClick={handleDelete}
              />
            </SpeedDial>
            {removing && (
              <CircularProgress
                size={68}
                sx={{
                  color: red[500],
                  position: "absolute",
                  bottom: -6,
                  right: 18,
                  zIndex: 1,
                }}
              />
            )}
          </Container>
        </Box>

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
