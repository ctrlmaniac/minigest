import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { IconLogout, IconMenu2 } from "@tabler/icons-react";

interface Props {
  handleDrawerOpen: Function;
}

const Navbar: React.FC<Props> = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            onClick={() => props.handleDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <IconMenu2 />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Admin
          </Typography>
          <IconButton
            color="error"
            onClick={() => (window.location.href = "/esci")}
          >
            <IconLogout />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
