import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { useTitleContext } from "~/context/title";
import { IconBuildingStore } from "@tabler/icons";

interface Props {
  handleDialogOpen: Function;
}

const Navbar: React.FC<Props> = (props) => {
  const { title } = useTitleContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          <IconButton onClick={() => props.handleDialogOpen(true)}>
            <IconBuildingStore />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
