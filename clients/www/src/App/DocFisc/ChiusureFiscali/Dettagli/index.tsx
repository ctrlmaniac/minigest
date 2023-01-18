import {
  Box,
  Container,
  Paper,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { EditFab, Page } from "~/components";
import get from "~/features/chiusureFiscali/get";
import { useAppDispatch, useAppSelector } from "~/hooks";

const DettagliCF: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    getting,
    getError,
    dettagli: chiusura,
  } = useAppSelector((state) => state.chiusureFiscali);

  React.useEffect(() => {
    dispatch(get(id!));
  }, [id]);

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
                  </Table>
                </Box>
              </Paper>
            </Box>
          ))}
        </Container>
      </Page>
      <EditFab href={`/app/docfisc/chiusure-fiscali/modifica/${id}`} />
    </>
  );
};

export default DettagliCF;
