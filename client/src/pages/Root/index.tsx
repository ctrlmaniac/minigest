import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { logoTheme } from "~/theme";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { IconLogout, IconMenu2 } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { ErrorScreen, LoadingScreen } from "~/components";
import { isEmpty } from "lodash";
import Init from "../Init";
import getPrincipal from "~/features/account/getPrincipal";
import Sidebar from "./Sidebar";

const Root: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { getting, getError, response, principal } = useAppSelector(
    (state) => state.account
  );
  const [openInit, setOpenInit] = React.useState(false);
  const [openSb, setOpenSb] = React.useState(false);

  React.useEffect(() => {
    dispatch(getPrincipal());
  }, []);

  React.useEffect(() => {
    if (!isEmpty(principal)) {
      if (isEmpty(principal.azienda)) {
        setOpenInit(true);
      } else {
        setOpenInit(false);
      }
    }
  }, [principal]);

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
              <IconButton
                sx={{ marginRight: 2 }}
                onClick={() => setOpenSb(true)}
              >
                <IconMenu2 />
              </IconButton>

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

          <Sidebar open={openSb} handleOpen={setOpenSb} />

          <Box mt={3}>
            <Container>
              <Outlet />
            </Container>
          </Box>

          <Init open={openInit} handleOpen={setOpenInit} />
        </>
      );
    }
  }
};

export default Root;
