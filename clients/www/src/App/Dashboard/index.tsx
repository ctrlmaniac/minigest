import React from "react";
import { Container, Grid } from "@mui/material";
import { Page } from "~/components";
import WidgetAziende from "../Aziende/Widget";
import WidgetChiusureFiscali from "../DocFisc/ChiusureFiscali/Widget";

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
          <Grid item xs={12} sm={4}>
            <WidgetAziende />
          </Grid>

          <Grid item xs={12} sm={8}>
            <WidgetChiusureFiscali />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
