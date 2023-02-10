import {
  Alert,
  AlertTitle,
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import {
  IconBuildingStore,
  IconFile,
  IconPencil,
  IconTrash,
} from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import last7 from "~/features/chiusureFiscali/last7";
import { useAppDispatch, useAppSelector } from "~/hooks";

const WidgetChiusure: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selected } = useAppSelector((state) => state.negozi);
  const {
    list: chiusure,
    listError,
    response,
  } = useAppSelector((state) => state.chiusureFiscali);

  React.useEffect(() => {
    if (!isEmpty(selected)) {
      dispatch(last7(selected.id!));
    }
  }, [selected]);

  let content = <Typography>caricamento in corso...</Typography>;

  if (isEmpty(selected)) {
    content = (
      <Alert severity="error" variant="outlined">
        <AlertTitle>Devi selezionare un negozio!</AlertTitle>
        Clicca su <IconBuildingStore /> per selezionarne uno!
      </Alert>
    );
  } else if (listError) {
    content = (
      <Alert severity="error" variant="outlined">
        {response || "Errore di caricamento"}
      </Alert>
    );
  } else {
    if (isEmpty(chiusure)) {
      content = (
        <Alert severity="info" variant="outlined">
          Non ci sono chiusure fiscali
        </Alert>
      );
    } else {
      content = (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Data</TableCell>
              <TableCell>Totale</TableCell>
              <TableCell>N.D.F</TableCell>
              <TableCell sx={{ width: 50 }} align="center">
                <IconButton>
                  <IconFile />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {chiusure!.map((cf) => (
              <TableRow key={cf.id}>
                <TableCell>{cf.data}</TableCell>
                <TableCell>€ {cf.totale}</TableCell>
                <TableCell>{cf.numeroDocFisc}</TableCell>
                <TableCell sx={{ width: 50 }} align="center">
                  <IconButton
                    color="info"
                    onClick={() =>
                      navigate(`/docfisc/chiusure-fiscali/dettagli/${cf.id}`)
                    }
                  >
                    <IconFile />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      );
    }
  }

  return (
    <>
      <Paper>
        <Box p={2}>
          <Typography variant="h6" gutterBottom>
            Ultime chiusure fiscali
          </Typography>

          {content}

          <Box mt={2} sx={{ textAlign: "right" }}>
            <Button onClick={() => navigate("/docfisc/chiusure-fiscali")}>
              Vai alla lista
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default WidgetChiusure;
