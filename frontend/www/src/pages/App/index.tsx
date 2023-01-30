import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const App: React.FC = () => {
  const [openSidebar, setOpenSidebar] = React.useState(false);

  return (
    <>
      <Navbar handleDrawerOpen={setOpenSidebar} />
      <Sidebar open={openSidebar} handleOpen={setOpenSidebar} />

      <Box mt={3} mb={12}>
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default App;
