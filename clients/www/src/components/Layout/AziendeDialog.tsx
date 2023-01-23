import React from "react";
import { useAziendaContext } from "~/context/azienda";
import { useAppSelector } from "~/hooks";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItemButton,
} from "@mui/material";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const AziendeDialog: React.FC<Props> = (props) => {
  const { dettagli } = useAppSelector((store) => store.account);
  const { azienda, setAzienda } = useAziendaContext();

  const handleChangeAzienda = (id: string) => {
    setAzienda(id);
    props.handleOpen(false);
  };

  if ("aziende" in dettagli) {
    return (
      <Dialog open={props.open} onClose={() => props.handleOpen(false)}>
        <DialogTitle>Cambia Azienda</DialogTitle>
        <DialogContent dividers>
          <List>
            {dettagli.aziende.map((business, i) => {
              return (
                <ListItemButton
                  selected={business.id === azienda}
                  key={business.id}
                  onClick={() => handleChangeAzienda(business.id!)}
                >
                  {business.denominazione}
                </ListItemButton>
              );
            })}
          </List>
        </DialogContent>
      </Dialog>
    );
  } else {
    return null;
  }
};

export default AziendeDialog;
