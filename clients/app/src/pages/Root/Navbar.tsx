import React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import {
  IconBuildingStore,
  IconBuildingWarehouse,
  IconLogout,
  IconMenu2,
} from "@tabler/icons-react";
import { useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import Badge from "@mui/material/Badge/Badge";

interface Props {
  handleDrawerOpen: Function;
  handleAziendeDialogOpen: Function;
  handleNegoziDialogOpen: Function;
}

const Navbar: React.FC<Props> = (props) => {
  const { selected: aziendaSelected } = useAppSelector(
    (state) => state.aziende
  );
  const { selected: negozioSelected } = useAppSelector((state) => state.negozi);

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
            minigest
          </Typography>
          <IconButton onClick={() => props.handleNegoziDialogOpen(true)}>
            <Badge
              variant="dot"
              color="secondary"
              invisible={!isEmpty(negozioSelected)}
            >
              <IconBuildingStore />
            </Badge>
          </IconButton>
          <IconButton onClick={() => props.handleAziendeDialogOpen(true)}>
            <Badge
              variant="dot"
              color="secondary"
              invisible={!isEmpty(aziendaSelected)}
            >
              <IconBuildingWarehouse />
            </Badge>
          </IconButton>
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
