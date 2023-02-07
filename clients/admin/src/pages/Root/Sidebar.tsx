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
  IconFile,
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
        </List>

        <List subheader={<ListSubheader>Documenti Fiscali</ListSubheader>}>
          <ListItemButton onClick={() => handleNavigate("/docfisc/tipi")}>
            <ListItemIcon>
              <IconFile />
            </ListItemIcon>
            <ListItemText primary="Tipo Doc. Fisc." />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;