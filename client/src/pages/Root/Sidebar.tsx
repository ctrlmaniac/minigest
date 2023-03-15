import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "~/hooks";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const Sidebar: React.FC<Props> = ({ open, handleOpen }) => {
  const navigate = useNavigate();
  const { principal } = useAppSelector((state) => state.account);

  const to = (to: string) => {
    handleOpen(false);
    navigate(to);
  };

  return (
    <Drawer open={open} onClose={() => handleOpen(false)}>
      <Box sx={{ width: "250px", overflowY: "auto" }}>
        <List>
          <ListItemButton onClick={() => to("/")}>
            <ListItemText primary="Home" />
          </ListItemButton>
          <ListItemButton onClick={() => to(`/account`)}>
            <ListItemText primary="Account" />
          </ListItemButton>
          <ListItemButton onClick={() => to(`/aziende`)}>
            <ListItemText primary="Aziende" />
          </ListItemButton>
          <ListItemButton onClick={() => to(`/negozi`)}>
            <ListItemText primary="Negozi" />
          </ListItemButton>
        </List>

        <List subheader={<ListSubheader>Documenti Fiscali</ListSubheader>}>
          <ListItemButton onClick={() => to(`/docfisc/chiusure-fiscali`)}>
            <ListItemText primary="Chiusure Fiscali" />
          </ListItemButton>
          <ListItemButton onClick={() => to(`/docfisc/fatture`)}>
            <ListItemText primary="Fatture" />
          </ListItemButton>
          <ListItemButton onClick={() => to(`/docfisc/fatture/acquisto`)}>
            <ListItemText primary="Fatture Acquisto" />
          </ListItemButton>
          <ListItemButton onClick={() => to(`/docfisc/fatture/vendita`)}>
            <ListItemText primary="Fatture Vendita" />
          </ListItemButton>
        </List>

        <List subheader={<ListSubheader>Fisco</ListSubheader>}>
          <ListItemButton onClick={() => to(`/fisco/f24`)}>
            <ListItemText primary="F24" />
          </ListItemButton>
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
