import React from "react";
import { Container, Grid } from "@mui/material";
import { Page } from "~/components";
import WidgetAziende from "../Aziende/Widget";

const Dashboard: React.FC = () => {
  return (
    <Page title="Dashboard">
      <Container>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          <Grid item>
            <WidgetAziende />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
