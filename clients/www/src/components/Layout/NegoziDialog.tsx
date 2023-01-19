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
import { unseNegozioContext } from "~/context/negozio";

interface Props {
  open: boolean;
  handleOpen: Function;
}

const NegoziDialog: React.FC<Props> = (props) => {
  const { listByAzienda } = useAppSelector((store) => store.negozi);
  const { negozio: selectedNegozio, setNegozio } = unseNegozioContext();

  const handleChange = (id: string) => {
    setNegozio(id);
    props.handleOpen(false);
  };

  if (listByAzienda) {
    return (
      <Dialog open={props.open} onClose={() => props.handleOpen(false)}>
        <DialogTitle>Cambia Negozio</DialogTitle>
        <DialogContent dividers>
          <List>
            {listByAzienda.map((negozio, i) => {
              return (
                <ListItemButton
                  selected={negozio.id === selectedNegozio}
                  key={negozio.id}
                  onClick={() => handleChange(negozio.id!)}
                >
                  {negozio.nome}
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

export default NegoziDialog;
