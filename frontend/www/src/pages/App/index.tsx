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

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const [openSidebar, setOpenSidebar] = React.useState(false);
  const [openAziendeDialog, setOpenAziendeDialog] = React.useState(false);

  const {
    getting,
    getError,
    dettagli: account,
  } = useAppSelector((state) => state.account);

  React.useEffect(() => {
    dispatch(get());
  }, []);

  React.useEffect(() => {
    if (window.localStorage.getItem("azienda")) {
      dispatch(getSelected(window.localStorage.getItem("azienda")!));
    }
  }, [account]);

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
        />
        <Sidebar open={openSidebar} handleOpen={setOpenSidebar} />
        <AziendeDialog
          open={openAziendeDialog}
          handleOpen={setOpenAziendeDialog}
        />

        <Box mt={3} mb={12}>
          <Container>
            <Outlet />
          </Container>
        </Box>
      </>
    );
  }
};

export default App;
