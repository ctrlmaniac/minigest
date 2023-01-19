import React from "react";
import { Container, Grid } from "@mui/material";
import { Page } from "~/components";
import WidgetAziende from "../Aziende/Widget";
import WidgetChiusureFiscali from "../DocFisc/ChiusureFiscali/Widget";
import WidgetNegozi from "../Negozi/Widget";

const Dashboard: React.FC = () => {
  return (
    <Page title="Dashboard">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={2}
        >
          <Grid item xs={12} sm={6}>
            <WidgetAziende />
          </Grid>

          <Grid item xs={12} sm={6}>
            <WidgetNegozi />
          </Grid>

          <Grid item xs={12}>
            <WidgetChiusureFiscali />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
