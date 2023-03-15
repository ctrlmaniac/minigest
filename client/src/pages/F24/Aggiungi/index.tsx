import {
  Alert,
  Box,
  Checkbox,
  Fab,
  Grid,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import RepartoErario from "./RepartoErario";
import { IconCirclePlus, IconTrash } from "@tabler/icons-react";
import { F24 } from "~/types";
import { SaveFab } from "~/components";
import post from "~/features/f24/post";
import RepartoInps from "./RepartoInps";
import RepartoRegioni from "./RepartoRegioni";
import RepartoLocali from "./RepartoLocali";
import RepartoInail from "./RepartoInail";
import RepartoAltriEnti from "./RepartoAltriEnti";
import { useNavigate } from "react-router-dom";
import { unsetResponse } from "~/features/f24/slice";

const Aggiungi: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { principal: account } = useAppSelector((state) => state.account);
  const { posting, postError, response } = useAppSelector((state) => state.f24);

  /**
   * VALORI COMUNI
   */
  const [values, setValues] = React.useState({
    dataScadenza: new Date().toISOString().split("T")[0],
    dataPagamento: "",
  });

  const [errors, setErrors] = React.useState({
    dataScadenza: false,
    dataPagamento: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { required, value, name } = e.target;

    setValues({
      ...values,
      [name]: value,
    });

    if (required) {
      setErrors({
        ...errors,
        [name]: value.toString().length < 1,
      });
    }
  };

  /**
   * SEZIONE ERARIO
   */
  const [erario, setErario] = React.useState({
    codiceUfficio: "",
    codiceAtto: "",
  });

  const handleErarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setErario({
      ...erario,
      [name]: value,
    });
  };

  const [erarioReparti, setErarioReparti] = React.useState<any>([]);
  const [erarioDialogOpen, setErarioDialogOpen] = React.useState(false);

  const handleAddErarioReparto = (reparto: any) => {
    setErarioReparti([...erarioReparti, reparto]);
  };

  const handleRemoveErarioReparto = (i: number) => {
    const reparti = [...erarioReparti];
    reparti.splice(i, 1);

    setErarioReparti(reparti);
  };

  /**
   * SEZIONE INPS
   */
  const [inpsReparti, setInpsReparti] = React.useState<any>([]);
  const [inpsDialogOpen, setInpsDialogOpen] = React.useState(false);

  const handleAddInps = (reparto: any) => {
    setInpsReparti([...inpsReparti, reparto]);
  };

  const handleRemoveInps = (i: number) => {
    const reparti = [...inpsReparti];
    reparti.splice(i, 1);
    setInpsReparti(reparti);
  };

  /**
   * SEZIONE REGIONI
   */
  const [regioniReparti, setRegioniReparti] = React.useState<any>([]);
  const [regioniDialogOpen, setRegioniDialogOpen] = React.useState(false);

  const handleAddRegioni = (reparto: any) => {
    setRegioniReparti([...regioniReparti, reparto]);
  };

  const handleRemoveRegioni = (i: number) => {
    const reparti = [...regioniReparti];
    reparti.splice(i, 1);
    setRegioniReparti(reparti);
  };

  /**
   * SEZIONE IMU E ALTRI TRIBUTI LOCALI
   */
  const [locali, setLocali] = React.useState({
    detrazione: "",
    identificativoOperazione: "",
  });

  const handleLocaliChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setLocali({
      ...locali,
      [name]: value,
    });
  };

  const [localiReparti, setLocaliReparti] = React.useState<any>([]);
  const [localiDialogOpen, setLocaliDialogOpen] = React.useState(false);

  const handleAddLocaliReparto = (reparto: any) => {
    setLocaliReparti([...localiReparti, reparto]);
  };

  const handleRemoveLocaliReparto = (i: number) => {
    const reparti = [...localiReparti];
    reparti.splice(i, 1);

    setLocaliReparti(reparti);
  };

  /**
   * SEZIONE INAIL
   */
  const [inailReparti, setInailReparti] = React.useState<any>([]);
  const [inailDialogOpen, setInailDialogOpen] = React.useState(false);

  const handleAddInail = (reparto: any) => {
    setInailReparti([...inailReparti, reparto]);
  };

  const handleRemoveInail = (i: number) => {
    const reparti = [...inailReparti];
    reparti.splice(i, 1);
    setInailReparti(reparti);
  };

  /**
   * SEZIONE ALTRI ENTI PREVIDENZIALI E ASSICURATIVI
   */
  const [altriEntiReparti, setAltriEntiReparti] = React.useState<any>([]);
  const [altriEntiDialogOpen, setAltriEntiDialogOpen] = React.useState(false);

  const handleAddAltriEnti = (reparto: any) => {
    setAltriEntiReparti([...altriEntiReparti, reparto]);
  };

  const handleRemoveAltriEnti = (i: number) => {
    const reparti = [...altriEntiReparti];
    reparti.splice(i, 1);
    setAltriEntiReparti(reparti);
  };

  /**
   * SUBMIT
   */
  const [isDisabled, setIsDisabled] = React.useState(true);

  React.useEffect(() => {
    const areValuesOk = !Object.values(errors).every(
      (value) => value === false
    );

    const areRepartiOk =
      altriEntiReparti.length > 0 ||
      erarioReparti.length > 0 ||
      inailReparti.length > 0 ||
      inpsReparti.length > 0 ||
      localiReparti.length > 0 ||
      regioniReparti.lenght > 0;

    setIsDisabled(areValuesOk || !areRepartiOk);
  }, [
    errors,
    altriEntiReparti,
    erarioReparti,
    inailReparti,
    inpsReparti,
    localiReparti,
    regioniReparti,
  ]);

  const handleSubmit = () => {
    const payload: F24 = {
      utente: account!,
      ...values,
      sezioneErario: null,
      sezioneInps: [],
      sezioneRegioni: [],
      sezioneTributiLocali: null,
      sezioneInail: [],
      sezioneAltriEnti: [],
    };

    if (erarioReparti.length > 0) {
      payload.sezioneErario = {
        ...erario,
        reparti: erarioReparti,
      };
    }

    if (inpsReparti.length > 0) {
      payload.sezioneInps = inpsReparti;
    }

    if (regioniReparti.length > 0) {
      payload.sezioneRegioni = regioniReparti;
    }

    if (localiReparti.length > 0) {
      payload.sezioneTributiLocali = {
        ...locali,
        reparti: localiReparti,
      };
    }

    if (inailReparti.length > 0) {
      payload.sezioneInail = inailReparti;
    }

    if (altriEntiReparti.length > 0) {
      payload.sezioneAltriEnti = altriEntiReparti;
    }

    dispatch(post(payload));

    if (!postError) {
      dispatch(unsetResponse());
      navigate("/fisco/f24");
    }
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Aggiungi F24</Typography>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Data di Scadenza"
                  name="dataScadenza"
                  value={values.dataScadenza}
                  error={errors.dataScadenza}
                  onChange={handleChange}
                  required
                  type="date"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Data di Pagamento"
                  name="dataPagamento"
                  value={values.dataPagamento}
                  error={errors.dataPagamento}
                  onChange={handleChange}
                  type="date"
                />
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={10}>
                <Typography variant="h6">Sezione Erario</Typography>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "right" }}>
                <IconButton
                  color="info"
                  onClick={() => setErarioDialogOpen(true)}
                >
                  <IconCirclePlus />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Codice Ufficio"
                  name="codiceUfficio"
                  value={erario.codiceUfficio}
                  onChange={handleErarioChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Codice Atto"
                  name="codiceAtto"
                  value={erario.codiceAtto}
                  onChange={handleErarioChange}
                />
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(erarioReparti) ? (
                <Alert severity="info" variant="outlined">
                  Sezione Erario vuota
                </Alert>
              ) : (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Codice Tributo</TableCell>
                      <TableCell>Rat./Reg./Prov./Mese rif.</TableCell>
                      <TableCell>Anno rif.</TableCell>
                      <TableCell align="right">Importi a debito</TableCell>
                      <TableCell align="right">Importi a credito</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconTrash />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {erarioReparti.map((reparto: any, i: number) => (
                      <TableRow key={i}>
                        <TableCell>{reparto.codiceTributo}</TableCell>
                        <TableCell>{reparto.riferimento}</TableCell>
                        <TableCell>{reparto.anno}</TableCell>
                        <TableCell align="right">
                          {reparto.importoDebito} €
                        </TableCell>
                        <TableCell align="right">
                          {reparto.importoCredito} €
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            color="error"
                            onClick={() => handleRemoveErarioReparto(i)}
                          >
                            <IconTrash />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={10}>
                <Typography variant="h6">Sezione INPS</Typography>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "right" }}>
                <IconButton
                  color="info"
                  onClick={() => setInpsDialogOpen(true)}
                >
                  <IconCirclePlus />
                </IconButton>
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(inpsReparti) ? (
                <Alert severity="info" variant="outlined">
                  Sezione INPS vuota
                </Alert>
              ) : (
                <Box sx={{ overflowX: "auto" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell sx={{ width: 80 }}>Codice sede</TableCell>
                        <TableCell sx={{ width: 80 }}>
                          Causale contributo
                        </TableCell>
                        <TableCell>Matricola/codice/filiale azienda</TableCell>
                        <TableCell>Periodo di rif. da</TableCell>
                        <TableCell>Periodo di rif. a</TableCell>
                        <TableCell align="right">Importo a debito</TableCell>
                        <TableCell align="right">Importo a credito</TableCell>
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconTrash />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {inpsReparti.map((reparto: any, i: number) => (
                        <TableRow key={i}>
                          <TableCell>{reparto.codiceSede}</TableCell>
                          <TableCell>{reparto.causaleContributo}</TableCell>
                          <TableCell>{reparto.matricola}</TableCell>
                          <TableCell>
                            {reparto.meseRiferimentoDa}-
                            {reparto.annoRiferimentoDa}
                          </TableCell>
                          <TableCell>
                            {reparto.meseRiferimentoA}-
                            {reparto.annoRiferimentoA}
                          </TableCell>
                          <TableCell>{reparto.importoDebito}</TableCell>
                          <TableCell>{reparto.importoCredito}</TableCell>
                          <TableCell align="center">
                            <IconButton
                              color="error"
                              onClick={() => handleRemoveInps(i)}
                            >
                              <IconTrash />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={10}>
                <Typography variant="h6">Sezione Regioni</Typography>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "right" }}>
                <IconButton
                  color="info"
                  onClick={() => setRegioniDialogOpen(true)}
                >
                  <IconCirclePlus />
                </IconButton>
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(regioniReparti) ? (
                <Alert severity="info" variant="outlined">
                  Sezione Regioni vuota
                </Alert>
              ) : (
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Codice Regione</TableCell>
                      <TableCell>Codice Tributo</TableCell>
                      <TableCell>Rat./Reg./Prov./Mese rif.</TableCell>
                      <TableCell>Anno rif.</TableCell>
                      <TableCell align="right">Importi a debito</TableCell>
                      <TableCell align="right">Importi a credito</TableCell>
                      <TableCell sx={{ width: 50 }} align="center">
                        <IconTrash />
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {regioniReparti.map((reparto: any, i: number) => (
                      <TableRow key={i}>
                        <TableCell>{reparto.codiceRegione}</TableCell>
                        <TableCell>{reparto.codiceTributo}</TableCell>
                        <TableCell>{reparto.riferimento}</TableCell>
                        <TableCell>{reparto.anno}</TableCell>
                        <TableCell align="right">
                          {reparto.importoDebito} €
                        </TableCell>
                        <TableCell align="right">
                          {reparto.importoCredito} €
                        </TableCell>
                        <TableCell align="center">
                          <IconButton
                            color="error"
                            onClick={() => handleRemoveRegioni(i)}
                          >
                            <IconTrash />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={10}>
                <Typography variant="h6">
                  Sezione IMU e Altri Tributi Locali
                </Typography>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "right" }}>
                <IconButton
                  color="info"
                  onClick={() => setLocaliDialogOpen(true)}
                >
                  <IconCirclePlus />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Identificativo Operazione"
                  name="identificativoOperazione"
                  value={locali.identificativoOperazione}
                  onChange={handleLocaliChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Detrazione"
                  name="detrazione"
                  value={locali.detrazione}
                  onChange={handleLocaliChange}
                  type="number"
                  inputProps={{ step: 0.01 }}
                />
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(localiReparti) ? (
                <Alert severity="info" variant="outlined">
                  Sezione IMU e Altri Tributi Locali vuota
                </Alert>
              ) : (
                <Box sx={{ overflowX: "auto" }}>
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
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconTrash />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {localiReparti.map((reparto: any, i: number) => (
                        <TableRow key={i}>
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
                          <TableCell align="center">
                            <IconButton
                              color="error"
                              onClick={() => handleRemoveLocaliReparto(i)}
                            >
                              <IconTrash />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={10}>
                <Typography variant="h6">Sezione INAIL</Typography>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "right" }}>
                <IconButton
                  color="info"
                  onClick={() => setInailDialogOpen(true)}
                >
                  <IconCirclePlus />
                </IconButton>
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(inailReparti) ? (
                <Alert severity="info" variant="outlined">
                  Sezione INAIL vuota
                </Alert>
              ) : (
                <Box sx={{ overflowX: "auto" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Codice sede</TableCell>
                        <TableCell>Codice Ditta</TableCell>
                        <TableCell>C.C.</TableCell>
                        <TableCell>Numero rif.</TableCell>
                        <TableCell>Causale</TableCell>
                        <TableCell align="right">Importo a debito</TableCell>
                        <TableCell align="right">Importo a credito</TableCell>
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconTrash />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {inailReparti.map((reparto: any, i: number) => (
                        <TableRow key={i}>
                          <TableCell>{reparto.codiceSede}</TableCell>
                          <TableCell>{reparto.codiceDitta}</TableCell>
                          <TableCell>{reparto.cc}</TableCell>
                          <TableCell>{reparto.riferimento}</TableCell>
                          <TableCell>{reparto.causale}</TableCell>
                          <TableCell>{reparto.importoDebito}</TableCell>
                          <TableCell>{reparto.importoCredito}</TableCell>
                          <TableCell align="center">
                            <IconButton
                              color="error"
                              onClick={() => handleRemoveInail(i)}
                            >
                              <IconTrash />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={10}>
                <Typography variant="h6">
                  Sezione Altri Enti Previdenziali e Assicurativi
                </Typography>
              </Grid>
              <Grid item xs={2} sx={{ textAlign: "right" }}>
                <IconButton
                  color="info"
                  onClick={() => setAltriEntiDialogOpen(true)}
                >
                  <IconCirclePlus />
                </IconButton>
              </Grid>
            </Grid>

            <Box mt={2}>
              {isEmpty(altriEntiReparti) ? (
                <Alert severity="info" variant="outlined">
                  Sezione Altri Enti Previdenziali e Assicurativi vuota
                </Alert>
              ) : (
                <Box sx={{ overflowX: "auto" }}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Codice Ente</TableCell>
                        <TableCell>Codice Sede</TableCell>
                        <TableCell>Causale contributo</TableCell>
                        <TableCell>Codice posizione</TableCell>
                        <TableCell>Periodo di rif. da</TableCell>
                        <TableCell>Periodo di rif. a</TableCell>
                        <TableCell align="right">Importo a debito</TableCell>
                        <TableCell align="right">Importo a credito</TableCell>
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconTrash />
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {altriEntiReparti.map((reparto: any, i: number) => (
                        <TableRow key={i}>
                          <TableCell>{reparto.codiceEnte}</TableCell>
                          <TableCell>{reparto.codiceSede}</TableCell>
                          <TableCell>{reparto.causaleContributo}</TableCell>
                          <TableCell>{reparto.codicePosizione}</TableCell>
                          <TableCell>
                            {reparto.meseRiferimentoDa}-
                            {reparto.annoRiferimentoDa}
                          </TableCell>
                          <TableCell>
                            {reparto.meseRiferimentoA}-
                            {reparto.annoRiferimentoA}
                          </TableCell>
                          <TableCell>{reparto.importoDebito}</TableCell>
                          <TableCell>{reparto.importoCredito}</TableCell>
                          <TableCell align="center">
                            <IconButton
                              color="error"
                              onClick={() => handleRemoveAltriEnti(i)}
                            >
                              <IconTrash />
                            </IconButton>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Box>
              )}
            </Box>
          </Box>
        </Paper>
      </Box>

      <RepartoErario
        open={erarioDialogOpen}
        onClose={setErarioDialogOpen}
        onSave={handleAddErarioReparto}
      />
      <RepartoInps
        open={inpsDialogOpen}
        onClose={setInpsDialogOpen}
        onSave={handleAddInps}
      />
      <RepartoRegioni
        open={regioniDialogOpen}
        onClose={setRegioniDialogOpen}
        onSave={handleAddRegioni}
      />
      <RepartoLocali
        open={localiDialogOpen}
        onClose={setLocaliDialogOpen}
        onSave={handleAddLocaliReparto}
      />
      <RepartoInail
        open={inailDialogOpen}
        onClose={setInailDialogOpen}
        onSave={handleAddInail}
      />
      <RepartoAltriEnti
        open={altriEntiDialogOpen}
        onClose={setAltriEntiDialogOpen}
        onSave={handleAddAltriEnti}
      />

      <SaveFab disabled={isDisabled} onClick={handleSubmit} />
    </>
  );
};

export default Aggiungi;
