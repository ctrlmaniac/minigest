import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { logoTheme } from "~/theme";
import {
  AppBar,
  Button,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { IconLogout } from "@tabler/icons-react";
import { useAppSelector } from "~/hooks";
import { ErrorScreen, LoadingScreen } from "~/components";

const Root: React.FC = () => {
  const navigate = useNavigate();
  const { getting, getError, response } = useAppSelector(
    (state) => state.account
  );

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (getError) {
      return <ErrorScreen message={response || "Errore di caricamento!"} />;
    } else {
      return (
        <>
          <AppBar position="sticky">
            <Toolbar>
              <ThemeProvider theme={logoTheme}>
                <Typography
                  variant="h4"
                  sx={{ flexGrow: 1, cursor: "pointer" }}
                  onClick={() => navigate("/")}
                >
                  minigest
                </Typography>
              </ThemeProvider>

              <IconButton
                color="error"
                onClick={() => (window.location.href = "/esci")}
              >
                <IconLogout />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Outlet />
        </>
      );
    }
  }
};

export default Root;
