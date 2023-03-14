import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { logoTheme } from "~/theme";
import {
  AppBar,
  Button,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";

const Root: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <ThemeProvider theme={logoTheme}>
            <Typography
              variant="h4"
              sx={{ flexGrow: 1, cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              minigest
            </Typography>
          </ThemeProvider>
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Root;
