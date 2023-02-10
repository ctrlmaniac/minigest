import { Grid } from "@mui/material";
import React from "react";
import WidgetAziende from "../Aziende/Widget";
import WidgetNegozi from "../Negozi/Widget";
import WidgetChiusure from "../ChiusureFiscali/Widget";
import WidgetScadenzario from "../Scadenzario/Widget";

const Dashboard: React.FC = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="stretch"
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <WidgetNegozi />
        </Grid>
        <Grid item xs={12} sm={6}>
          <WidgetAziende />
        </Grid>
        <Grid item xs={12}>
          <WidgetChiusure />
        </Grid>
        <Grid item xs={12}>
          <WidgetScadenzario />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
