import { isEmpty } from "lodash";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DialActions, ErrorScreen, LoadingScreen } from "components";
import get from "~/features/fatture/get";
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
import {
  IconAlertCircle,
  IconCircleCheck,
  IconInfoCircle,
} from "@tabler/icons-react";
import { green, red } from "@mui/material/colors";
import remove from "~/features/fatture/remove";
import { unsetResponse } from "~/features/fatture/slice";

const Dettagli: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { dettagli, getting, getError, response, removing, removeError } =
    useAppSelector((state) => state.fatture);

  React.useEffect(() => {
    if (!isEmpty(id)) {
      dispatch(get(id!));
    }
  }, [id]);

  const handleDelete = () => {
    dispatch(remove(id!));

    setTimeout(() => {
      unsetResponse();

      if (!removeError) {
        navigate(-1);
      }
    }, 1000);
  };

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (getError) {
      return <ErrorScreen message={response || "Fattura non trovata"} />;
    }

    if (isEmpty(dettagli)) {
      return <ErrorScreen message="Fattura non trovata" />;
    } else {
      console.log(dettagli);
      return (
        <>
          <Box mb={3}>
            <Typography variant="h3">Dettagli Fattura</Typography>
          </Box>

          <Box mb={3}>
            <Alert
              variant="outlined"
              severity={dettagli!.evasa ? "success" : "error"}
            >
              {dettagli!.evasa ? "Fattura pagata" : "Fattura da pagare"}
            </Alert>
          </Box>

          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ width: 50 }}>
                        {dettagli!.tipoDocumento.codice}
                      </TableCell>
                      <TableCell>
                        {dettagli!.tipoDocumento.descrizione}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Cedente</TableCell>
                      <TableCell>{dettagli!.cedente.denominazione}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Committente</TableCell>
                      <TableCell>
                        {dettagli!.committente.denominazione}
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Data</TableCell>
                      <TableCell>{dettagli!.data}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Data SDI</TableCell>
                      <TableCell>{dettagli!.dataSDI}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Numero</TableCell>
                      <TableCell>{dettagli!.numero}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>Totale</TableCell>
                      <TableCell>€ {dettagli!.totale}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Box>

          <Box mb={3}>
            {isEmpty(dettagli!.reparti) ? (
              <Alert variant="outlined" severity="error">
                Non ci sono reparti!
              </Alert>
            ) : (
              <Paper>
                <Box p={2}>
                  <Typography variant="h6" gutterBottom>
                    Riepilogo reparti
                  </Typography>

                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Aliquota</TableCell>
                        <TableCell>Imponibile</TableCell>
                        <TableCell>Imposta</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dettagli!.reparti!.map((reparto) => (
                        <TableRow key={reparto.id}>
                          <TableCell>{reparto.aliquota} %</TableCell>
                          <TableCell>{reparto.imponibile} €</TableCell>
                          <TableCell>{reparto.imposta} €</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            )}
          </Box>

          <Box mb={3}>
            {isEmpty(dettagli!.scadenze) ? (
              <Alert variant="outlined" severity="info">
                Non ci sono scadenze!
              </Alert>
            ) : (
              <Paper>
                <Box p={2}>
                  <Typography variant="h6" gutterBottom>
                    Riepilogo scadenze
                  </Typography>

                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Data</TableCell>
                        <TableCell>Importo</TableCell>
                        <TableCell align="center" sx={{ width: 50 }}>
                          <IconInfoCircle />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dettagli!.scadenze!.map((scadenza) => (
                        <TableRow key={scadenza.id}>
                          <TableCell>{scadenza.data}</TableCell>
                          <TableCell>{scadenza.importo} €</TableCell>
                          <TableCell align="center" sx={{ width: 50 }}>
                            {scadenza.pagato ? (
                              <IconCircleCheck color={green[500]} />
                            ) : (
                              <IconAlertCircle color={red[500]} />
                            )}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            )}
          </Box>

          <Box mb={3}>
            {isEmpty(dettagli!.pagamenti) ? (
              <Alert variant="outlined" severity="info">
                Non ci sono pagamenti!
              </Alert>
            ) : (
              <Paper>
                <Box p={2}>
                  <Typography variant="h6" gutterBottom>
                    Riepilogo pagamenti
                  </Typography>

                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Data</TableCell>
                        <TableCell>Importo</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dettagli!.pagamenti!.map((pagamento) => (
                        <TableRow key={pagamento.id}>
                          <TableCell>{pagamento.data}</TableCell>
                          <TableCell>{pagamento.importo} €</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            )}
          </Box>

          <DialActions
            handleEdit={() =>
              navigate(`/docfisc/fatture/modifica/${dettagli!.id!}`)
            }
            handleDelete={handleDelete}
            loading={removing}
          />

          <Snackbar
            open={!isEmpty(response)}
            autoHideDuration={2000}
            onClose={() => dispatch(unsetResponse())}
          >
            <Alert severity={removeError ? "error" : "success"}>
              {response}
            </Alert>
          </Snackbar>
        </>
      );
    }
  }
};

export default Dettagli;
