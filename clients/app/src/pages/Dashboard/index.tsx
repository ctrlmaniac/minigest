import { Grid } from "@mui/material";
import React from "react";
import WidgetAziende from "../Aziende/Widget";
import WidgetNegozi from "../Negozi/Widget";

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
      </Grid>
    </>
  );
};

export default Dashboard;
