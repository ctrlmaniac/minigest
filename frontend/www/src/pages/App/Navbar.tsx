import React from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { IconMenu2 } from "@tabler/icons-react";

interface Props {
  handleDrawerOpen: Function;
}

const Navbar: React.FC<Props> = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            onClick={() => props.handleDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <IconMenu2 />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
