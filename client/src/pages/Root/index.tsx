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
import { useAppDispatch, useAppSelector } from "~/hooks";
import { ErrorScreen, LoadingScreen } from "~/components";
import { isEmpty } from "lodash";
import Init from "../Init";
import getPrincipal from "~/features/account/getPrincipal";

const Root: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { getting, getError, response, dettagli } = useAppSelector(
    (state) => state.account
  );
  const [openInit, setOpenInit] = React.useState(false);

  React.useEffect(() => {
    dispatch(getPrincipal());
  }, []);

  React.useEffect(() => {
    if (!isEmpty(dettagli)) {
      if (isEmpty(dettagli.aziende)) {
        setOpenInit(true);
      }
    }
  }, [dettagli]);

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (getError) {
      return <ErrorScreen>{response || "Errore di caricamento"}</ErrorScreen>;
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

          <Init open={openInit} handleOpen={setOpenInit} />
        </>
      );
    }
  }
};

export default Root;
