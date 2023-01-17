import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { IconHome } from "@tabler/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const AppDrawer: React.FC<Props> = ({ open, handleOpen }) => {
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(`/app${to}`);
    handleOpen(false);
  };

  return (
    <Drawer anchor="left" open={open} onClose={() => handleOpen(false)}>
      <Box sx={{ width: 250 }}>
        <List>
          <ListItemButton onClick={() => handleNavigate("/")}>
            <ListItemIcon>
              <IconHome />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
