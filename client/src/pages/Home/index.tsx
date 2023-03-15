import React from "react";
import { Grid, Typography } from "@mui/material";
import { useAppSelector } from "~/hooks";

const Home: React.FC = () => {
  const { principal } = useAppSelector((state) => state.account);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h3" gutterBottom>
            Benvenuto, {principal?.nome}!
          </Typography>
          <Typography>Eccoti una panoramica della tua azienda!</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
