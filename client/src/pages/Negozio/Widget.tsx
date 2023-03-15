import {
  Alert,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { setSelected } from "~/features/negozio/slice";
import { useAppDispatch, useAppSelector } from "~/hooks";

const WidgetNegozi = () => {
  const dispatch = useAppDispatch();
  const { principal } = useAppSelector((state) => state.account);
  const { selected } = useAppSelector((state) => state.negozio);

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
                  <ListItemButton
                    key={negozio.id}
                    onClick={() => dispatch(setSelected(negozio))}
                    selected={
                      isEmpty(selected) ? false : negozio.id === selected.id
                    }
                  >
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
