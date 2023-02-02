import React from "react";
import { isEmpty } from "lodash";
import { Link, useNavigate } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
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
import { IconPencil, IconSettings, IconTrash } from "@tabler/icons-react";
import remove from "~/features/fatture/remove";
import { useAppDispatch } from "~/hooks";
import { Fattura } from "~/types";

interface Props {
  dettagli: Fattura;
}

const FattureDettagli: React.FC<Props> = ({ dettagli }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(remove(dettagli.id!));
    navigate(-1);
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Dettagli Fattura</Typography>
      </Box>

      <Box mb={3}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <Paper>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Cedente
                </Typography>

                <Link to={`/app/aziende/dettagli/${dettagli?.cedente.id!}`}>
                  {dettagli?.cedente.denominazione}
                </Link>
              </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Paper>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Committente
                </Typography>

                <Link to={`/app/aziende/dettagli/${dettagli?.committente.id!}`}>
                  {dettagli?.committente.denominazione}
                </Link>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper>
              <Box p={2}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Data</TableCell>
                      <TableCell>Numero</TableCell>
                      <TableCell>Totale Documento</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{dettagli?.data}</TableCell>
                      <TableCell>{dettagli?.numero}</TableCell>
                      <TableCell>€ {dettagli?.totale}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Typography variant="h6">Reparti</Typography>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Aliquota</TableCell>
                  <TableCell>Imponibile</TableCell>
                  <TableCell>imposta</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dettagli?.reparti.map((reparto) => (
                  <TableRow key={reparto.id}>
                    <TableCell>% {reparto.aliquota}</TableCell>
                    <TableCell>€ {reparto.imponibile}</TableCell>
                    <TableCell>€ {reparto.imposta}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Paper>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Typography variant="h6">Scadenze</Typography>

            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Data</TableCell>
                  <TableCell>Importo</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dettagli?.scadenze.map((scadenza) => (
                  <TableRow key={scadenza.id}>
                    <TableCell>{scadenza.data}</TableCell>
                    <TableCell>€ {scadenza.importo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Paper>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Pagamenti
            </Typography>

            {isEmpty(dettagli.pagamenti) ? (
              <Alert severity="warning">
                Non sono stati registrati pagamenti!
              </Alert>
            ) : (
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Data</TableCell>
                    <TableCell>Importo</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dettagli?.pagamenti!.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell>{p.data}</TableCell>
                      <TableCell>€ {p.importo}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </Box>
        </Paper>
      </Box>

      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <Container sx={{ textAlign: "right" }}>
          <SpeedDial ariaLabel="azioni su fatture" icon={<IconSettings />}>
            <SpeedDialAction
              icon={<IconPencil />}
              tooltipTitle="modifica"
              onClick={() =>
                navigate(`/app/docfisc/fatture/modifica/${dettagli?.id!}`)
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
};

export default FattureDettagli;