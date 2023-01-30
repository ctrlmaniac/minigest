import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useAppDispatch, useAppSelector } from "~/hooks";
import get from "~/features/account/get";
import { ErrorScreen, LoadingScreen } from "~/components";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const { getting, getError } = useAppSelector((state) => state.account);
  const [openSidebar, setOpenSidebar] = React.useState(false);

  React.useEffect(() => {
    dispatch(get());
  }, []);

  if (getting) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen message={getError} />;
  } else {
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
  }
};

export default App;
