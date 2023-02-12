import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  IconBuildingStore,
  IconBuildingWarehouse,
  IconCalendarDue,
  IconFileDescription,
  IconFiles,
  IconLayoutDashboard,
  IconUser,
} from "@tabler/icons-react";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const Sidebar: React.FC<Props> = ({ open, handleOpen }) => {
  const navigate = useNavigate();

  const handleNavigate = (to: string) => {
    navigate(`${to}`);
    handleOpen(false);
  };

  const anno = new Date().getFullYear();
  const mese = new Date().getMonth() + 1;

  return (
    <Drawer anchor="left" open={open} onClose={() => handleOpen(false)}>
      <Box sx={{ width: 250 }}>
        <List>
          <ListItemButton onClick={() => handleNavigate("/")}>
            <ListItemIcon>
              <IconLayoutDashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigate("/account")}>
            <ListItemIcon>
              <IconUser />
            </ListItemIcon>
            <ListItemText primary="Account" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigate("/aziende")}>
            <ListItemIcon>
              <IconBuildingWarehouse />
            </ListItemIcon>
            <ListItemText primary="Aziende" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigate("/docfisc/tipo")}>
            <ListItemIcon>
              <IconFiles />
            </ListItemIcon>
            <ListItemText primary="Tipo Doc. Fisc." />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
