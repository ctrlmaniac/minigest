import {
  Alert,
  AlertTitle,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { IconBuildingWarehouse } from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "~/hooks";

const WidgetAziende: React.FC = () => {
  const navigate = useNavigate();
  const { selected } = useAppSelector((state) => state.aziende);
  const { dettagli: account } = useAppSelector((state) => state.account);

  let content = <Typography>Caricamento in corso...</Typography>;

  if (isEmpty(account?.aziende)) {
    content = (
      <Typography>
        Contatta il moderatore per farti aggiungere alla tua azienda!
      </Typography>
    );
  } else {
    content = (
      <>
        {isEmpty(selected) && (
          <Alert severity="info" variant="outlined">
            <AlertTitle>Devi selezionare un'azienda!</AlertTitle>
            Clicca su <IconBuildingWarehouse /> per selezionarne una!
          </Alert>
        )}
        <List>
          {account?.aziende?.map((azienda) => (
            <ListItemButton
              key={azienda.id}
              selected={!isEmpty(selected) && azienda.id === selected.id}
              onClick={() => navigate(`/aziende/dettagli/${azienda.id}`)}
            >
              <ListItemText primary={azienda.denominazione} />
            </ListItemButton>
          ))}
        </List>
      </>
    );
  }

  return (
    <Paper sx={{ height: "100%" }}>
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          Le tue aziende
        </Typography>
        {content}
      </Box>
    </Paper>
  );
};

export default WidgetAziende;
