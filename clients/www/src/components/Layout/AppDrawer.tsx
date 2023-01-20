import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import {
  IconBuildingWarehouse,
  IconFileBarcode,
  IconFileCertificate,
  IconLayoutDashboard,
} from "@tabler/icons";

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
              <IconLayoutDashboard />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </List>
        <Divider />

        <List subheader={<ListSubheader>Soggetti Fiscali</ListSubheader>}>
          <ListItemButton onClick={() => handleNavigate("/aziende")}>
            <ListItemIcon>
              <IconBuildingWarehouse />
            </ListItemIcon>
            <ListItemText primary="Aziende" />
          </ListItemButton>
        </List>

        <List subheader={<ListSubheader>Documenti Fiscali</ListSubheader>}>
          <ListItemButton onClick={() => handleNavigate("/docfisc/tipo")}>
            <ListItemIcon>
              <IconFileBarcode />
            </ListItemIcon>
            <ListItemText primary="Tipi di Doc. Fisc." />
          </ListItemButton>
          <ListItemButton
            onClick={() => handleNavigate("/docfisc/chiusure-fiscali")}
          >
            <ListItemIcon>
              <IconFileCertificate />
            </ListItemIcon>
            <ListItemText primary="Chiusure Fiscali" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default AppDrawer;
