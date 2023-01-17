import React from "react";
import { Container, Typography } from "@mui/material";
import { isEmpty } from "lodash";
import { useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen, Page } from "~/components";
import get from "~/features/aziende/get";
import { useAppDispatch, useAppSelector } from "~/hooks";

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
          <Typography variant="h3" component="h2">
            {dettagli!.denominazione}
          </Typography>
        </Container>
      </Page>
    );
  }
};

export default Dettagli;
