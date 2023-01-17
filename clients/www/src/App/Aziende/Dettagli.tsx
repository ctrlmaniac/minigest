import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen, Page } from "~/components";
import get from "~/features/aziende/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";

const Dettagli: React.FC = () => {
  let { id } = useParams();
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.aziende);

  React.useEffect(() => {
    if (id !== undefined) {
      dispatch(get(id));
    }
  }, [id]);

  if (state.getting) {
    return <LoadingScreen />;
  } else if (state.getError) {
    return <ErrorScreen messaggio="Azienda non trovata!" />;
  } else {
    const { dettagli } = state;

    return (
      <Page title="Dettagli Azienda">
        <Container>
          <Box mb={3}>
            {!isEmpty(dettagli!.denominazione) && (
              <Typography variant="h3" component="h2">
                {dettagli!.denominazione}
              </Typography>
            )}
            {isEmpty(dettagli!.denominazione) && (
              <Typography variant="h3" component="h2">
                {dettagli!.nome} {dettagli!.cognome}
              </Typography>
            )}
          </Box>

          <Box>
            {!isEmpty(dettagli!.codiceEORI) && (
              <Typography gutterBottom>
                <strong>Codice EORI: </strong>
                {dettagli!.codiceEORI}
              </Typography>
            )}

            <Typography gutterBottom>
              <strong>ID Fiscale IVA: </strong>
              {dettagli!.idFiscaleIVAPaese}
              {dettagli!.idFiscaleIVACodice}
            </Typography>

            {!isEmpty(dettagli!.codiceFiscale) && (
              <Typography gutterBottom>
                <strong>Codice Fiscale: </strong>
                {dettagli!.codiceFiscale}
              </Typography>
            )}

            {!isEmpty(dettagli!.sede) && (
              <Typography gutterBottom>
                <strong>Sede: </strong>
                {dettagli!.sede.indirizzo}, {dettagli!.sede.numeroCivico},{" "}
                {dettagli!.sede.cap} {dettagli!.sede.comune} (
                {dettagli!.sede.provincia}) - {dettagli!.sede.nazione}
              </Typography>
            )}

            {!isEmpty(dettagli!.stabileOrganizzazione) && (
              <Typography gutterBottom>
                <strong>Sede: </strong>
                {dettagli!.stabileOrganizzazione.indirizzo},{" "}
                {dettagli!.stabileOrganizzazione.numeroCivico},{" "}
                {dettagli!.stabileOrganizzazione.cap}{" "}
                {dettagli!.stabileOrganizzazione.comune} (
                {dettagli!.stabileOrganizzazione.provincia}) -{" "}
                {dettagli!.stabileOrganizzazione.nazione}
              </Typography>
            )}

            <Typography>TODO: Rappresentante fiscale</Typography>
          </Box>
        </Container>
      </Page>
    );
  }
};

export default Dettagli;
