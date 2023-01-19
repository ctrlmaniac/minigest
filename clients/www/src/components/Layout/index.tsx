import React from "react";
import Navbar from "./Navbar";
import { TitleContext } from "~/context/title";
import AziendeDialog from "./AziendeDialog";
import AppDrawer from "./AppDrawer";
import { Box } from "@mui/material";
import NegoziDialog from "./NegoziDialog";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<Props> = ({ children }) => {
  const [openAziendaDialog, setOpenAziendaDialog] = React.useState(false);
  const [openNegoziDialog, setOpenNegoziDialog] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <>
      <AziendeDialog
        open={openAziendaDialog}
        handleOpen={setOpenAziendaDialog}
      />
      <NegoziDialog open={openNegoziDialog} handleOpen={setOpenNegoziDialog} />
      <Navbar
        handleAziendeDialogOpen={setOpenAziendaDialog}
        handleNegoziDialogOpen={setOpenNegoziDialog}
        handleDrawerOpen={setOpenDrawer}
      />
      <AppDrawer open={openDrawer} handleOpen={setOpenDrawer} />

      <Box mb={12}>{children}</Box>
    </>
  );
};

export default Layout;
