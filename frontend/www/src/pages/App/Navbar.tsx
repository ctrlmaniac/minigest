import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { IconBuildingWarehouse, IconMenu2 } from "@tabler/icons-react";

interface Props {
  handleDrawerOpen: Function;
  handleAziendeDialogOpen: Function;
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
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            minigest
          </Typography>
          <IconButton onClick={() => props.handleAziendeDialogOpen(true)}>
            <IconBuildingWarehouse />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
