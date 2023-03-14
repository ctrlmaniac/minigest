import { Box, Drawer, List, ListItemButton, ListItemText } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const Sidebar: React.FC<Props> = ({ open, handleOpen }) => {
  const navigate = useNavigate();

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
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
