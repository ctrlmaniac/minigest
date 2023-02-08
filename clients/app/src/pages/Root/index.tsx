import React from "react";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { default as getPrincipal } from "~/features/account/get";
import { ErrorScreen, LoadingScreen } from "components";
import { find, isEmpty } from "lodash";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AziendeDialog from "./AziendeDialog";
import NegoziDialog from "./NegoziDialog";
import { Box, Container } from "@mui/material";

const Root: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    getting,
    getError,
    dettagli: account,
  } = useAppSelector((state) => state.account);

  const [openSidebar, setOpenSidebar] = React.useState(false);
  const [openAziendeDialog, setOpenAziendeDialog] = React.useState(false);
  const [openNegoziDialog, setOpenNegoziDialog] = React.useState(false);

  React.useEffect(() => {
    dispatch(getPrincipal());
  }, []);

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (!isEmpty(getError)) {
      return <ErrorScreen message={getError!} />;
    }

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

export default Root;
