import {
  Box,
  Container,
  Paper,
  SpeedDial,
  SpeedDialAction,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { IconPencil, IconSettings, IconTrash } from "@tabler/icons-react";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen } from "~/components";
import get from "~/features/aziende/get";
import remove from "~/features/aziende/remove";
import { useAppDispatch, useAppSelector } from "~/hooks";

const AziendeDettagli: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    dettagli: azienda,
    getting,
    getError,
  } = useAppSelector((state) => state.aziende);

  React.useEffect(() => {
    if (id) {
      dispatch(get(id!));
    }
  }, [id]);

  if (getting) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen message={getError} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3" component="h1">
            Dettagli Azienda
          </Typography>
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
          <Container sx={{ textAlign: "right" }}>
            <SpeedDial ariaLabel="azioni su azienda" icon={<IconSettings />}>
              <SpeedDialAction
                icon={<IconPencil />}
                tooltipTitle="modifica"
                onClick={() => navigate(`/app/aziende/modifica/${id}`)}
              />
              <SpeedDialAction
                icon={<IconTrash />}
                tooltipTitle="elimina"
                onClick={() => dispatch(remove(azienda?.id!))}
              />
            </SpeedDial>
          </Container>
        </Box>
      </>
    );
  }
};

export default AziendeDettagli;
