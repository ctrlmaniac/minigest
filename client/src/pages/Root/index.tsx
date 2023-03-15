import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { logoTheme } from "~/theme";
import {
  Alert,
  AppBar,
  Badge,
  Box,
  Button,
  Container,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { IconBuildingStore, IconLogout, IconMenu2 } from "@tabler/icons-react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { ErrorScreen, LoadingScreen } from "~/components";
import { isEmpty } from "lodash";
import Init from "../Init";
import getPrincipal from "~/features/account/getPrincipal";
import Sidebar from "./Sidebar";
import { setSelected } from "~/features/negozio/slice";

const Root: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { gettingPrincipal, getPrincipalError, response, principal } =
    useAppSelector((state) => state.account);
  const { selected: negozioSelected } = useAppSelector(
    (state) => state.negozio
  );
  const [openInit, setOpenInit] = React.useState(false);
  const [openSb, setOpenSb] = React.useState(false);
  const [openNegozi, setOpenNegozi] = React.useState(false);

  React.useEffect(() => {
    dispatch(getPrincipal());
  }, []);

  React.useEffect(() => {
    if (isEmpty(negozioSelected)) {
      if (!isEmpty(principal?.azienda?.negozi)) {
        dispatch(setSelected(principal!.azienda!.negozi![0]));
      }
    }
  }, [principal]);

  React.useEffect(() => {
    if (!isEmpty(principal)) {
      if (isEmpty(principal.azienda)) {
        setOpenInit(true);
      } else {
        setOpenInit(false);
      }
    }
  }, [principal]);

  if (gettingPrincipal) {
    return <LoadingScreen />;
  } else {
    if (getPrincipalError) {
      return <ErrorScreen>{response || "Errore di caricamento"}</ErrorScreen>;
    } else {
      if (isEmpty(principal?.azienda)) {
        return <Init open={openInit} handleOpen={setOpenInit} />;
      }

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

              <IconButton onClick={() => setOpenNegozi(true)}>
                <Badge
                  variant="dot"
                  color="secondary"
                  invisible={!isEmpty(negozioSelected)}
                >
                  <IconBuildingStore />
                </Badge>
              </IconButton>
              <IconButton
                color="error"
                onClick={() => (window.location.href = "/esci")}
              >
                <IconLogout />
              </IconButton>
            </Toolbar>
          </AppBar>

          <Sidebar open={openSb} handleOpen={setOpenSb} />

          <Box mt={3} mb={12}>
            <Container>
              <Outlet />
            </Container>
          </Box>

          <Dialog open={openNegozi} onClose={() => setOpenNegozi(false)}>
            <DialogTitle>Seleziona un negozio</DialogTitle>
            <DialogContent>
              {isEmpty(principal?.azienda?.negozi) ? (
                <Alert variant="outlined" severity="info">
                  Non hai nessun negozio! Aggiungine uno nella sezione negozi!
                </Alert>
              ) : (
                <List>
                  {principal!.azienda!.negozi!.map((negozio) => (
                    <ListItemButton
                      selected={
                        isEmpty(negozioSelected)
                          ? false
                          : negozio.id === negozioSelected.id
                      }
                      key={negozio.id}
                      onClick={() => {
                        dispatch(setSelected(negozio));
                        setOpenNegozi(false);
                      }}
                    >
                      <ListItemText primary={negozio.nome} />
                    </ListItemButton>
                  ))}
                </List>
              )}
            </DialogContent>
          </Dialog>
        </>
      );
    }
  }
};

export default Root;
