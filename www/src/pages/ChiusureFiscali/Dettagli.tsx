import React from "react";
import {
  Box,
  Container,
  Paper,
  SpeedDial,
  SpeedDialAction,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { ErrorScreen, LoadingScreen } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { useNavigate, useParams } from "react-router-dom";
import get from "~/features/chiusureFiscali/get";
import { IconPencil, IconSettings, IconTrash } from "@tabler/icons-react";
import remove from "~/features/chiusureFiscali/remove";

const ChiusureFiscaliDettagli: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { dettagli, getting, getError } = useAppSelector(
    (state) => state.chiusureFiscali
  );

  React.useEffect(() => {
    if (id) {
      dispatch(get(id!));
    }
  }, [id]);

  const handleRemove = (id: string) => {
    dispatch(remove(id));
    navigate("/app/docfisc/chiusure-fiscali");
  };

  if (getting) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen message={getError} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Dettagli Chiusura Fiscale</Typography>
        </Box>

        <Box mb={3}>
          <Paper>
            <Box p={2}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ width: 150 }}>Data</TableCell>
                    <TableCell>{dettagli?.data}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: 150 }}>Totale</TableCell>
                    <TableCell>€ {dettagli?.totale}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: 150 }}>Num. D.F.</TableCell>
                    <TableCell>{dettagli?.numeroDocFisc}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Paper>
        </Box>

        {dettagli?.reparti.map((reparto) => (
          <Box key={reparto.id} mb={3}>
            <Paper>
              <Box p={2}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Aliquota</TableCell>
                      <TableCell>Totale</TableCell>
                      <TableCell>Annulli</TableCell>
                      <TableCell>Resi</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>% {reparto.aliquota}</TableCell>
                      <TableCell>€ {reparto.totale}</TableCell>
                      <TableCell>€ {reparto.totaleAnnulli}</TableCell>
                      <TableCell>€ {reparto.totaleResi}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Box>
        ))}

        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <Container sx={{ textAlign: "right" }}>
            <SpeedDial
              ariaLabel="azioni su chiusure fiscali"
              icon={<IconSettings />}
            >
              <SpeedDialAction
                icon={<IconPencil />}
                tooltipTitle="modifica"
                onClick={() => {}}
              />
              <SpeedDialAction
                icon={<IconTrash />}
                tooltipTitle="elimina"
                onClick={() => handleRemove(dettagli?.id!)}
              />
            </SpeedDial>
          </Container>
        </Box>
      </>
    );
  }
};

export default ChiusureFiscaliDettagli;
