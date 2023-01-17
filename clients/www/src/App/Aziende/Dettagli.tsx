import { Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { LoadingScreen, Page } from "~/components";
import { default as getAzienda } from "~/features/aziende/get";
import { useAppSelector } from "~/hooks";

const Dettagli: React.FC = () => {
  let { id } = useParams();
  const state = useAppSelector((state) => state.aziende);

  React.useEffect(() => {
    if (id) {
      getAzienda(id);
    }
  }, [id]);

  if (state.getting) {
    return <LoadingScreen />;
  } else if (state.getError) {
    return (
      <Page title="Errore">
        <Typography>Errore</Typography>
      </Page>
    );
  } else {
    return (
      <Page title="Dettagli Azienda">
        <h1>azienda</h1>
      </Page>
    );
  }
};

export default Dettagli;
