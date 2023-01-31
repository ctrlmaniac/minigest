import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAppDispatch, useAppSelector } from "~/hooks";
import get from "~/features/account/get";
import { ErrorScreen, LoadingScreen } from "~/components";
import AziendeDialog from "./AziendeDialog";
import getSelected from "~/features/aziende/getSelected";
import listByAzienda from "~/features/negozi/listByAzienda";
import { default as getSelectedNegozio } from "~/features/negozi/getSelected";
import NegoziDialog from "./NegoziDialog";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [openSidebar, setOpenSidebar] = React.useState(false);
  const [openAziendeDialog, setOpenAziendeDialog] = React.useState(false);
  const [openNegoziDialog, setOpenNegoziDialog] = React.useState(false);

  const {
    getting,
    getError,
    dettagli: account,
  } = useAppSelector((state) => state.account);

  const { selected: selectedAzienda } = useAppSelector(
    (state) => state.aziende
  );

  const { listByAzienda: listNegozi } = useAppSelector((state) => state.negozi);

  React.useEffect(() => {
    dispatch(get());
  }, []);

  React.useEffect(() => {
    if (account?.aziende) {
      dispatch(getSelected(account.aziende[0].id!));
    }
  }, [account]);

  React.useEffect(() => {
    if (selectedAzienda) {
      dispatch(listByAzienda(selectedAzienda.id!));
    }
  }, [selectedAzienda]);

  React.useEffect(() => {
    if (listNegozi) {
      dispatch(getSelectedNegozio(listNegozi[0].id!));
    }
  }, [listNegozi]);

  if (getting) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen message={getError} />;
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
};

export default App;
