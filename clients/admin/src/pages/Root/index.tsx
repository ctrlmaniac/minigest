import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { useAppDispatch } from "~/hooks";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import list from "~/features/accountRole/list";

const Root: React.FC = () => {
  const dispatch = useAppDispatch();
  const [openSidebar, setOpenSidebar] = React.useState(false);

  React.useEffect(() => {
    dispatch(list());
  }, []);

  return (
    <>
      <Navbar handleDrawerOpen={setOpenSidebar} />
      <Sidebar open={openSidebar} handleOpen={setOpenSidebar} />

      <Box mt={12} mb={12}>
        <Container>
          <Outlet />
        </Container>
      </Box>
    </>
  );
};

export default Root;
