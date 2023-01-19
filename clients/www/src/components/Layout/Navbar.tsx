import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useTitleContext } from "~/context/title";
import {
  IconBuildingStore,
  IconBuildingWarehouse,
  IconMenu2,
} from "@tabler/icons";

interface Props {
  handleAziendeDialogOpen: Function;
  handleNegoziDialogOpen: Function;
  handleDrawerOpen: Function;
}

const Navbar: React.FC<Props> = (props) => {
  const { title } = useTitleContext();

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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton onClick={() => props.handleNegoziDialogOpen(true)}>
            <IconBuildingStore />
          </IconButton>
          <IconButton onClick={() => props.handleAziendeDialogOpen(true)}>
            <IconBuildingWarehouse />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
