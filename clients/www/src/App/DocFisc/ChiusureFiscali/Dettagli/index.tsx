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
import { IconPencil, IconSettings, IconTrash } from "@tabler/icons";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EditFab, ErrorScreen, LoadingScreen, Page } from "~/components";
import get from "~/features/chiusureFiscali/get";
import remove from "~/features/chiusureFiscali/remove";
import { useAppDispatch, useAppSelector } from "~/hooks";

const DettagliCF: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    getting,
    getError,
    dettagli: chiusura,
  } = useAppSelector((state) => state.chiusureFiscali);

  React.useEffect(() => {
    dispatch(get(id!));
  }, [id]);

  const handleDelete = () => {
    dispatch(remove(id!));
    navigate("/app/docfisc/chiusure-fiscali");
  };

  if (getting) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen messaggio="C'è stato un errore" />;
  } else {
    return (
      <>
        <Page title="Dettagli">
          <Container>
            <Typography variant="h3" component="h1" gutterBottom>
              Chiusura Fiscale
            </Typography>

            <Box mb={3}>
              <Paper>
                <Box p={2}>
                  <Typography gutterBottom>Riepilogo</Typography>
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell sx={{ width: 100 }}>Data</TableCell>
                        <TableCell>{chiusura?.data} </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell sx={{ width: 100 }}>Totale</TableCell>
                        <TableCell>€ {chiusura?.totale} </TableCell>
                      </TableRow>

                      <TableRow>
                        <TableCell sx={{ width: 100 }}>N.D.F.</TableCell>
                        <TableCell>{chiusura?.numeroDocFisc} </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            </Box>

            {chiusura?.reparti.map((reparto) => (
              <Box mb={3} key={reparto.id}>
                <Paper>
                  <Box p={2}>
                    <Typography gutterBottom>
                      Reparto {reparto.aliquota} %
                    </Typography>
                    <Table>
                      <TableBody>
                        <TableRow>
                          <TableCell sx={{ width: 100 }}>Totale</TableCell>
                          <TableCell>€ {reparto.totale}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ width: 100 }}>Annulli</TableCell>
                          <TableCell>€ {reparto.totaleAnnulli}</TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell sx={{ width: 100 }}>Resi</TableCell>
                          <TableCell>€ {reparto.totaleResi}</TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Box>
                </Paper>
              </Box>
            ))}
          </Container>
        </Page>
        <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
          <Container sx={{ textAlign: "right" }}>
            <SpeedDial
              ariaLabel="azioni su chiusura fiscale"
              icon={<IconSettings />}
            >
              <SpeedDialAction
                icon={<IconPencil />}
                tooltipTitle="modifica"
                onClick={() =>
                  navigate(`/app/docfisc/chiusure-fiscali/modifica/${id}`)
                }
              />
              <SpeedDialAction
                icon={<IconTrash />}
                tooltipTitle="elimina"
                onClick={handleDelete}
              />
            </SpeedDial>
          </Container>
        </Box>
      </>
    );
  }
};

export default DettagliCF;
