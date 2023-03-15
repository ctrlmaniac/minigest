import React from "react";
import { Grid, Typography } from "@mui/material";
import { useAppSelector } from "~/hooks";
import WidgetNegozi from "../Negozio/Widget";
import WidgetChiusure from "../ChiusureFiscali/Widget";
import WidgetFatture from "../Fatture/Widget";

const Home: React.FC = () => {
  const { principal } = useAppSelector((state) => state.account);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" gutterBottom>
            Benvenuto, {principal?.nome}!
          </Typography>
          <Typography>Eccoti una panoramica della tua azienda!</Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <WidgetNegozi />
        </Grid>

        <Grid item xs={12}>
          <WidgetChiusure />
        </Grid>

        <Grid item xs={12}>
          <WidgetFatture />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
