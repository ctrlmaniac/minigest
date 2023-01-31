import {
  Dialog,
  DialogContent,
  DialogTitle,
  List,
  ListItemButton,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import getSelected from "~/features/aziende/getSelected";
import { useAppDispatch, useAppSelector } from "~/hooks";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const AziendeDialog: React.FC<Props> = ({ open, handleOpen }) => {
  const dispatch = useAppDispatch();
  const { dettagli: account } = useAppSelector((state) => state.account);
  const { selected } = useAppSelector((state) => state.aziende);

  const handleChangeAzienda = (id: string) => {
    window.localStorage.setItem("azienda", id);
    dispatch(getSelected(id));
    handleOpen(false);
  };

  let content = <Typography>Caricamento in corso...</Typography>;

  if (isEmpty(account?.aziende)) {
    content = <Typography>Devi aggiungere un'azienda!</Typography>;
  } else {
    content = (
      <List>
        {account?.aziende?.map((azienda) => (
          <ListItemButton
            key={azienda.id}
            selected={azienda.id === selected?.id}
            onClick={() => handleChangeAzienda(azienda.id!)}
          >
            {azienda.denominazione}
          </ListItemButton>
        ))}
      </List>
    );
  }

  return (
    <Dialog open={open} onClose={() => handleOpen(false)}>
      <DialogTitle>Seleziona Azienda</DialogTitle>
      <DialogContent>{content}</DialogContent>
    </Dialog>
  );
};

export default AziendeDialog;
