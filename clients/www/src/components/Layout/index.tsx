import React from "react";
import Navbar from "./Navbar";
import { TitleContext } from "~/context/title";
import AziendeDialog from "./AziendeDialog";
import AppDrawer from "./AppDrawer";

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
      {children}
    </>
  );
};

export default Layout;
