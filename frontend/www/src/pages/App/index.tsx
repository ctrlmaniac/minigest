import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { Container } from "@mui/material";

const App: React.FC = () => {
  return (
    <>
      <Navbar handleDrawerOpen={() => {}} />

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default App;
