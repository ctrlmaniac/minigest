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
  IconBook,
  IconBuildingStore,
  IconBuildingWarehouse,
  IconCalendarDue,
  IconFileDescription,
  IconFiles,
  IconLayoutDashboard,
  IconScale,
  IconUpload,
  IconUser,
} from "@tabler/icons-react";
import { useAppSelector } from "~/hooks";

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
      <Box sx={{ width: 250, overflowY: "auto" }}>
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
            onClick={() => handleNavigate("/docfisc/fatture/carica")}
          >
            <ListItemIcon>
              <IconUpload />
            </ListItemIcon>
            <ListItemText primary="Carica Fattura" />
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
          <ListItemButton
            onClick={() => handleNavigate(`/docfisc/registro-corrispettivi`)}
          >
            <ListItemIcon>
              <IconBook />
            </ListItemIcon>
            <ListItemText primary="Registro dei Corrispettivi" />
          </ListItemButton>
        </List>

        <List subheader={<ListSubheader>Fisco</ListSubheader>}>
          <ListItemButton onClick={() => handleNavigate("/fisco/f24")}>
            <ListItemIcon>
              <IconFiles />
            </ListItemIcon>
            <ListItemText primary="F24" />
          </ListItemButton>
        </List>

        <List subheader={<ListSubheader>Utilità</ListSubheader>}>
          <ListItemButton onClick={() => handleNavigate("/scadenzario")}>
            <ListItemIcon>
              <IconCalendarDue />
            </ListItemIcon>
            <ListItemText primary="Scadenzario" />
          </ListItemButton>
          <ListItemButton onClick={() => handleNavigate("/bilancio")}>
            <ListItemIcon>
              <IconScale />
            </ListItemIcon>
            <ListItemText primary="Bilancio" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
