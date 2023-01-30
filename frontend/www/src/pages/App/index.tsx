import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const App: React.FC = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false);

  return (
    <>
      <Navbar handleDrawerOpen={setOpenSidebar} />
      <Sidebar open={openSidebar} handleOpen={setOpenSidebar} />

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
