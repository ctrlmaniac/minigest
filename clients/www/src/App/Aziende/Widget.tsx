import React from "react";
import { Box, List, ListItemButton, Paper, Typography } from "@mui/material";
import { useAziendaContext } from "~/context/azienda";
import { useAppSelector } from "~/hooks";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";

const WidgetAziende: React.FC = () => {
  const { dettagli: account } = useAppSelector((store) => store.account);
  const { azienda } = useAziendaContext();
  const navigate = useNavigate();

  if (
    account &&
    account.hasOwnProperty("aziende") &&
    !isEmpty(account.aziende)
  ) {
    return (
      <Paper sx={{ height: "100%" }}>
        <Box p={2}>
          <Typography variant="h6" gutterBottom>
            Le tue Aziende
          </Typography>

          <List>
            {account!.aziende!.map((business, i) => {
              return (
                <ListItemButton
                  selected={business.id === azienda}
                  key={business.id}
                  onClick={() =>
                    navigate(`/app/aziende/dettagli/${business.id}`)
                  }
                >
                  {business.denominazione}
                </ListItemButton>
              );
            })}
          </List>
        </Box>
      </Paper>
    );
  } else {
    return null;
  }
};

export default WidgetAziende;
