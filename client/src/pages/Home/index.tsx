import { ThemeProvider, Typography } from "@mui/material";
import React from "react";
import { Splash } from "~/components";
import { logoTheme } from "~/theme";

const Home: React.FC = () => {
  return (
    <>
      <ThemeProvider theme={logoTheme}>
        <Splash>
          <Typography variant="h1" align="center">
            m
          </Typography>
        </Splash>
      </ThemeProvider>
    </>
  );
};

export default Home;
