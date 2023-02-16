import { Grid } from "@mui/material";
import React from "react";
import WidgetAziende from "../Aziende/Widget";
import WidgetNegozi from "../Negozi/Widget";
import WidgetChiusure from "../ChiusureFiscali/Widget";
import WidgetScadenzario from "../Scadenzario/Widget";
import { useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import WidgetFatture from "../Fatture/Widget";

const Dashboard: React.FC = () => {
  const { selected } = useAppSelector((state) => state.aziende);

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
        {!isEmpty(selected) && (
          <Grid item xs={12}>
            <WidgetChiusure />
          </Grid>
        )}
        <Grid item xs={12}>
          <WidgetFatture />
        </Grid>
        <Grid item xs={12}>
          <WidgetScadenzario />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
