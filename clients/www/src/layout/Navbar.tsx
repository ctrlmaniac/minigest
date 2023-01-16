import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useTitleContext } from "~/context/title";

const Navbar: React.FC = () => {
  const { title } = useTitleContext();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="p">
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
