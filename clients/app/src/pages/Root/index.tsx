import React from "react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { default as getPrincipal } from "~/features/account/get";
import { ErrorScreen, LoadingScreen } from "components";
import { findIndex, isEmpty } from "lodash";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AziendeDialog from "./AziendeDialog";
import NegoziDialog from "./NegoziDialog";
import { Box, Container } from "@mui/material";
import { setSelected as setSelectedAzienda } from "~/features/aziende/slice";
import { setSelected as setSelectedNegozio } from "~/features/negozi/slice";
import { Azienda, Negozio } from "~/types";

const Root: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    getting,
    getError,
    dettagli: account,
  } = useAppSelector((state) => state.account);
  const { selected: selectedAzienda } = useAppSelector(
    (state) => state.aziende
  );

  const [openSidebar, setOpenSidebar] = React.useState(false);
  const [openAziendeDialog, setOpenAziendeDialog] = React.useState(false);
  const [openNegoziDialog, setOpenNegoziDialog] = React.useState(false);

  React.useEffect(() => {
    dispatch(getPrincipal());
  }, []);

  // Seleziona l'azienda
  React.useEffect(() => {
    if (!isEmpty(account)) {
      const { aziende } = account;

      const azienda = window.localStorage.getItem("azienda");

      if (!isEmpty(azienda)) {
        const index = findIndex(aziende, (o: Azienda) => {
          return o.id === azienda;
        });

        if (index > 1) {
          const selectedAzienda = aziende![index];
          dispatch(setSelectedAzienda(selectedAzienda));
        } else {
          window.localStorage.removeItem("azienda");
        }
      } else {
        if (!isEmpty(aziende)) {
          dispatch(setSelectedAzienda(aziende![0]));
          window.localStorage.setItem("azienda", aziende![0].id!);
        }
      }
    }
  }, [account]);

  React.useEffect(() => {
    const negozio = window.localStorage.getItem("negozio");

    if (!isEmpty(selectedAzienda)) {
      if (!isEmpty(negozio)) {
        const index = findIndex(selectedAzienda?.negozi, (o) => {
          return o.id === negozio;
        });

        if (index > 0) {
          const selectedNegozio = selectedAzienda.negozi![index];
          dispatch(setSelectedNegozio(selectedNegozio));
        } else {
          window.localStorage.removeItem("negozio");
        }
      } else {
        if (!isEmpty(selectedAzienda.negozi)) {
          dispatch(setSelectedNegozio(selectedAzienda.negozi![0]));
          window.localStorage.setItem(
            "negozio",
            selectedAzienda.negozi![0].id!
          );
        }
      }
    }
  }, [selectedAzienda]);

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (!isEmpty(getError) || isEmpty(account)) {
      return (
        <ErrorScreen
          message={getError! || "Devi accedere per vedere questa sezione!"}
        />
      );
    } else {
      return (
        <>
          <Navbar
            handleDrawerOpen={setOpenSidebar}
            handleAziendeDialogOpen={setOpenAziendeDialog}
            handleNegoziDialogOpen={setOpenNegoziDialog}
          />
          <Sidebar open={openSidebar} handleOpen={setOpenSidebar} />
          <AziendeDialog
            open={openAziendeDialog}
            handleOpen={setOpenAziendeDialog}
          />
          <NegoziDialog
            open={openNegoziDialog}
            handleOpen={setOpenNegoziDialog}
          />

          <Box mt={12} mb={12}>
            <Container>
              <Outlet />
            </Container>
          </Box>
        </>
      );
    }
  }
};

export default Root;
