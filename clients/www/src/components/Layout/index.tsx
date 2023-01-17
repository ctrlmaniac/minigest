import React from "react";
import Navbar from "./Navbar";
import { TitleContext } from "~/context/title";
import AziendeDialog from "./AziendeDialog";
import AppDrawer from "./AppDrawer";
import { Box } from "@mui/material";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<Props> = ({ children }) => {
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openDrawer, setOpenDrawer] = React.useState(false);

  return (
    <>
      <AziendeDialog open={openDialog} handleOpen={setOpenDialog} />
      <Navbar
        handleDialogOpen={setOpenDialog}
        handleDrawerOpen={setOpenDrawer}
      />
      <AppDrawer open={openDrawer} handleOpen={setOpenDrawer} />

      <Box mb={6}>{children}</Box>
    </>
  );
};

export default Layout;
