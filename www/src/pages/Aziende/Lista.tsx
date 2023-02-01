import {
  Alert,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableRow,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AddFab, ErrorScreen, LoadingScreen } from "~/components";
import list from "~/features/aziende/list";
import { useAppDispatch, useAppSelector } from "~/hooks";

const AziendeLista: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    list: aziende,
    listing,
    listError,
  } = useAppSelector((state) => state.aziende);

  React.useEffect(() => {
    dispatch(list());
  }, []);

  if (listing) {
    return <LoadingScreen />;
  } else if (listError) {
    return <ErrorScreen message={listError!} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3" component="h1">
            Lista Aziende
          </Typography>

          {isEmpty(aziende) && (
            <Alert severity="warning">Non ci sono aziende!</Alert>
          )}
        </Box>

        <Box>
          <Paper>
            <Box p={2}>
              <List>
                {aziende?.map((azienda) => (
                  <ListItemButton
                    key={azienda.id}
                    onClick={() =>
                      navigate(`/app/aziende/dettagli/${azienda.id}`)
                    }
                  >
                    <ListItemText primary={azienda.denominazione} />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Paper>
        </Box>

        <AddFab href="/app/aziende/aggiungi" />
      </>
    );
  }
};

export default AziendeLista;
