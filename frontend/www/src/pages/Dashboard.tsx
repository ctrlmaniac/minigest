import React from "react";
import { Grid } from "@mui/material";
import AziendeWidget from "./Aziende/Widget";

const Dashboard: React.FC = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12} sm={6}>
          <AziendeWidget />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
