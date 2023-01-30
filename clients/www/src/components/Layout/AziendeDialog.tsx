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
import { isEmpty } from "lodash";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const AziendeDialog: React.FC<Props> = (props) => {
  const { dettagli: account } = useAppSelector((store) => store.account);
  const { azienda, setAzienda } = useAziendaContext();

  const handleChangeAzienda = (id: string) => {
    setAzienda(id);
    window.localStorage.setItem("azienda", id);
    props.handleOpen(false);
  };

  if (
    account &&
    account!.hasOwnProperty("aziende") &&
    !isEmpty(account!.aziende)
  ) {
    return (
      <Dialog open={props.open} onClose={() => props.handleOpen(false)}>
        <DialogTitle>Cambia Azienda</DialogTitle>
        <DialogContent dividers>
          <List>
            {account!.aziende!.map((business, i) => {
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
