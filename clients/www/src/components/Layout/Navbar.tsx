import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useTitleContext } from "~/context/title";
import { IconBuildingWarehouse, IconMenu2 } from "@tabler/icons";

interface Props {
  handleDialogOpen: Function;
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
          <IconButton onClick={() => props.handleDialogOpen(true)}>
            <IconBuildingWarehouse />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
