import { isEmpty } from "lodash";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "~/hooks";
import get from "~/features/f24/get";
import { DialActions, ErrorScreen, LoadingScreen } from "components";
import {
  Box,
  Checkbox,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const F24Dettagli: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { dettagli, getting, getError, response } = useAppSelector(
    (state) => state.f24
  );

  React.useEffect(() => {
    if (!isEmpty(id)) {
      dispatch(get(id!));
    }
  }, [id]);

  const handleEdit = () => {
    navigate("/fisco/f24/modifica/" + id);
  };

  const handleDelete = () => {
    // dispatch(remove(id));
  };

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (getError || isEmpty(dettagli)) {
      return <ErrorScreen message={response || "Errore di caricamento"} />;
    } else {
      return (
        <>
          <Box mb={3}>
            <Typography variant="h3">F24</Typography>
          </Box>

          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Data Scadenza</TableCell>
                      <TableCell align="right">Totale</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>{dettagli.dataScadenza}</TableCell>
                      <TableCell align="right">€ {dettagli.totale}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Box>

          {!isEmpty(dettagli.sezioneErario) && (
            <Box mb={3}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h6" gutterBottom>
                    Sezione Erario
                  </Typography>

                  {(!isEmpty(dettagli.sezioneErario.codiceAtto) ||
                    !isEmpty(dettagli.sezioneErario.codiceUfficio)) && (
                    <Table>
                      <TableHead>
                        <TableRow>
                          <TableCell>Codice Ufficio</TableCell>
                          <TableCell>Codice Atto</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            {dettagli.sezioneErario.codiceUfficio}
                          </TableCell>
                          <TableCell>
                            {dettagli.sezioneErario.codiceAtto}
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  )}

                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ width: 150 }}>
                          Codice tributo
                        </TableCell>
                        <TableCell>rat./reg./prov./mese rif.</TableCell>
                        <TableCell>Anno di riferimento</TableCell>
                        <TableCell align="right">Importo a debito</TableCell>
                        <TableCell align="right">Importo a credito</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableFooter>
                      <TableRow>
                        <TableCell colSpan={3}></TableCell>
                        <TableCell align="right">
                          {dettagli.sezioneErario.totaleDebito} €
                        </TableCell>
                        <TableCell align="right">
                          {dettagli.sezioneErario.totaleCredito} €
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Totale</TableCell>
                        <TableCell colSpan={4}>
                          {dettagli.sezioneErario.saldo} €
                        </TableCell>
                      </TableRow>
                    </TableFooter>
                    <TableBody>
                      {dettagli.sezioneErario!.reparti.map((reparto) => (
                        <TableRow key={reparto.id}>
                          <TableCell>{reparto.codiceTributo}</TableCell>
                          <TableCell>{reparto.codiceRiferimento}</TableCell>
                          <TableCell>{reparto.anno}</TableCell>
                          <TableCell align="right">
                            {reparto.importoDebito} €
                          </TableCell>
                          <TableCell align="right">
                            {reparto.importoCredito} €
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            </Box>
          )}

          {dettagli.sezioneInps.length > 0 && (
            <Box mb={3}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h6" gutterBottom>
                    Sezione INPS
                  </Typography>

                  <Table>
                    <TableHead>
                      <TableCell sx={{ width: 80 }}>Codice sede</TableCell>
                      <TableCell sx={{ width: 80 }}>
                        Causale contributo
                      </TableCell>
                      <TableCell>Matricola/codice/filiale azienda</TableCell>
                      <TableCell>Periodo di rif. da</TableCell>
                      <TableCell>Periodo di rif. a</TableCell>
                      <TableCell align="right">Importo a debito</TableCell>
                      <TableCell align="right">Importo a credito</TableCell>
                      <TableCell align="right">Saldo</TableCell>
                    </TableHead>
                    <TableBody>
                      {dettagli.sezioneInps.map((inps) => (
                        <TableRow key={inps.id}>
                          <TableCell>{inps.codiceSede}</TableCell>
                          <TableCell>{inps.causaleContributo}</TableCell>
                          <TableCell>{inps.matricola}</TableCell>
                          <TableCell>
                            {inps.meseRiferimentoDa}-{inps.annoRiferimentoDa}
                          </TableCell>
                          <TableCell>
                            {inps.meseRiferimentoA}-{inps.annoRiferimentoA}
                          </TableCell>
                          <TableCell align="right">
                            {inps.importoDebito} €
                          </TableCell>
                          <TableCell align="right">
                            {inps.importoCredito} €
                          </TableCell>
                          <TableCell align="right">{inps.saldo} €</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            </Box>
          )}

          {dettagli.sezioneRegioni.length > 0 && (
            <Box mb={3}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h6" gutterBottom>
                    Sezione Regioni
                  </Typography>

                  <Table>
                    <TableHead>
                      <TableCell sx={{ width: 80 }}>Codice regione</TableCell>
                      <TableCell>Codice tributo</TableCell>
                      <TableCell>rateazione/mese rif.</TableCell>
                      <TableCell>anno di riferimento</TableCell>
                      <TableCell align="right">Importo a debito</TableCell>
                      <TableCell align="right">Importo a credito</TableCell>
                      <TableCell align="right">Saldo</TableCell>
                    </TableHead>
                    <TableBody>
                      {dettagli.sezioneRegioni.map((regione) => (
                        <TableRow key={regione.id}>
                          <TableCell>{regione.codiceRegione}</TableCell>
                          <TableCell>{regione.codiceTributo}</TableCell>
                          <TableCell>{regione.meseRiferimento}</TableCell>
                          <TableCell>{regione.annoRiferimento}</TableCell>
                          <TableCell align="right">
                            {regione.importoDebito} €
                          </TableCell>
                          <TableCell align="right">
                            {regione.importoCredito} €
                          </TableCell>
                          <TableCell align="right">{regione.saldo} €</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            </Box>
          )}

          {!isEmpty(dettagli.sezioneTributiLocali) && (
            <Box mb={3}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h6" gutterBottom>
                    Sezione IMU e Altri Tributi Locali
                  </Typography>

                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Codice ente</TableCell>
                        <TableCell>Ravv.</TableCell>
                        <TableCell>immob. var.</TableCell>
                        <TableCell>Acc.</TableCell>
                        <TableCell>Saldo</TableCell>
                        <TableCell>N. immb.</TableCell>
                        <TableCell>Codice tributo</TableCell>
                        <TableCell>Rat./Mese</TableCell>
                        <TableCell>Anno</TableCell>
                        <TableCell align="right">Importo a debito</TableCell>
                        <TableCell align="right">Importo a credito</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableFooter>
                      <TableRow>
                        <TableCell>Detrazione</TableCell>
                        <TableCell colSpan={10}>
                          {dettagli.sezioneTributiLocali.detrazione} €
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>Totale</TableCell>
                        <TableCell colSpan={10}>
                          {dettagli.sezioneTributiLocali.saldo} €
                        </TableCell>
                      </TableRow>
                    </TableFooter>
                    <TableBody>
                      {dettagli.sezioneTributiLocali.reparti.map((reparto) => (
                        <TableRow key={reparto.id}>
                          <TableCell>{reparto.codiceEnte}</TableCell>
                          <TableCell>
                            <Checkbox checked={reparto.ravvedimento} />
                          </TableCell>
                          <TableCell>
                            <Checkbox checked={reparto.immobiliVariati} />
                          </TableCell>
                          <TableCell>
                            <Checkbox checked={reparto.acconto} />
                          </TableCell>
                          <TableCell>
                            <Checkbox checked={reparto.saldo} />
                          </TableCell>
                          <TableCell>{reparto.numeroImmobili}</TableCell>
                          <TableCell>{reparto.codiceTributo}</TableCell>
                          <TableCell>{reparto.riferimento}</TableCell>
                          <TableCell>{reparto.anno}</TableCell>
                          <TableCell align="right">
                            {reparto.importoDebito} €
                          </TableCell>
                          <TableCell align="right">
                            {reparto.importoCredito} €
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            </Box>
          )}

          {dettagli.sezioneInail.length > 0 && (
            <Box mb={3}>
              <Paper>
                <Box p={2}>
                  <Typography variant="h6" gutterBottom>
                    Sezione INAIL
                  </Typography>

                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Codice sede</TableCell>
                        <TableCell>Codice ditta</TableCell>
                        <TableCell>C.C</TableCell>
                        <TableCell>num. riferimento</TableCell>
                        <TableCell>Causale</TableCell>
                        <TableCell align="right">Importo a debito</TableCell>
                        <TableCell align="right">Importo a credito</TableCell>
                        <TableCell align="right">Saldo</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dettagli.sezioneInail.map((inail) => (
                        <TableRow key={inail.id}>
                          <TableCell>{inail.codiceSede}</TableCell>
                          <TableCell>{inail.codiceDitta}</TableCell>
                          <TableCell>{inail.cc}</TableCell>
                          <TableCell>{inail.numeroRiferimento}</TableCell>
                          <TableCell>{inail.causale}</TableCell>
                          <TableCell align="right">
                            {inail.importoDebito} €
                          </TableCell>
                          <TableCell align="right">
                            {inail.importoCredito} €
                          </TableCell>
                          <TableCell align="right">{inail.saldo} €</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            </Box>
          )}

          {dettagli.sezioneAltriEnti.length > 0 && (
            <Box mb={3}>
              <Paper>
                <Box p={3}>
                  <Typography variant="h6">
                    Sezione Altri Enti Previdenziali e Assicurativi
                  </Typography>

                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Codice Ente</TableCell>
                        <TableCell>Codice sede</TableCell>
                        <TableCell>Codice posizione</TableCell>
                        <TableCell>Periodo di rif. da</TableCell>
                        <TableCell>Periodo di rif. a</TableCell>
                        <TableCell align="right">Importo a debito</TableCell>
                        <TableCell align="right">Importo a credito</TableCell>
                        <TableCell align="right">Saldo</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {dettagli.sezioneAltriEnti.map((ae) => (
                        <TableRow key={ae.id}>
                          <TableCell>{ae.codiceEnte}</TableCell>
                          <TableCell>{ae.codiceSede}</TableCell>
                          <TableCell>{ae.codicePosizione}</TableCell>
                          <TableCell>
                            {ae.meseRiferimentoDa}-{ae.annoRiferimentoDa}
                          </TableCell>
                          <TableCell>
                            {ae.meseRiferimentoA}-{ae.annoRiferimentoA}
                          </TableCell>
                          <TableCell align="right">
                            {ae.importoDebito} €
                          </TableCell>
                          <TableCell align="right">
                            {ae.importoCredito} €
                          </TableCell>
                          <TableCell align="right">{ae.saldo} €</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              </Paper>
            </Box>
          )}

          <DialActions handleEdit={handleEdit} handleDelete={handleDelete} />
        </>
      );
    }
  }
};

export default F24Dettagli;
