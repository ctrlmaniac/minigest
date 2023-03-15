import {
  Alert,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { useAppDispatch, useAppSelector } from "~/hooks";

const WidgetNegozi = () => {
  const dispatch = useAppDispatch();
  const { principal } = useAppSelector((state) => state.account);

  if (principal) {
    if (principal.azienda) {
      if (!isEmpty(principal.azienda.negozi)) {
        return (
          <Paper>
            <Box p={2}>
              <Typography variant="h6" gutterBottom>
                I tuoi negozi
              </Typography>

              <List>
                {principal.azienda!.negozi!.map((negozio) => (
                  <ListItemButton key={negozio.id}>
                    <ListItemText primary={negozio.nome} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Paper>
        );
      }
    }
  }

  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          I tuoi negozi
        </Typography>

        <Alert variant="outlined" severity="info">
          Non hai nessun negozio, aggiungine uno nella sezione negozi!
        </Alert>
      </Box>
    </Paper>
  );
};

export default WidgetNegozi;
