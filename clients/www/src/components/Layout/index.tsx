import React from "react";
import Navbar from "./Navbar";
import { TitleContext } from "~/context/title";
import AziendeDialog from "./AziendeDialog";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const Layout: React.FC<Props> = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Navbar handleDialogOpen={setOpen} />
      <AziendeDialog open={open} handleOpen={setOpen} />
      {children}
    </>
  );
};

export default Layout;
