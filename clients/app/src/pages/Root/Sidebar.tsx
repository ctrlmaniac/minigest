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
          <ListItemButton onClick={() => handleNavigate("/negozi")}>
            <ListItemIcon>
              <IconBuildingStore />
            </ListItemIcon>
            <ListItemText primary="Negozi" />
          </ListItemButton>
        </List>

        <List subheader={<ListSubheader>Documenti Fiscali</ListSubheader>}>
          <ListItemButton
            onClick={() => handleNavigate("/docfisc/chiusure-fiscali")}
          >
            <ListItemIcon>
              <IconFiles />
            </ListItemIcon>
            <ListItemText primary="Chiusure Fiscali" />
          </ListItemButton>
          <ListItemButton
            onClick={() =>
              handleNavigate(
                `/docfisc/fatture/vendita?anno=${anno}&mese=${mese}&sdi=false`
              )
            }
          >
            <ListItemIcon>
              <IconFileDescription />
            </ListItemIcon>
            <ListItemText primary="Fatture Vendita" />
          </ListItemButton>
          <ListItemButton
            onClick={() =>
              handleNavigate(
                `/docfisc/fatture/acquisto?anno=${anno}&mese=${mese}&sdi=false`
              )
            }
          >
            <ListItemIcon>
              <IconFileDescription />
            </ListItemIcon>
            <ListItemText primary="Fatture Acquisto" />
          </ListItemButton>
        </List>

        <List subheader={<ListSubheader>Utilità</ListSubheader>}>
          <ListItemButton onClick={() => handleNavigate("/scadenzario")}>
            <ListItemIcon>
              <IconCalendarDue />
            </ListItemIcon>
            <ListItemText primary="Scadenzario" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
