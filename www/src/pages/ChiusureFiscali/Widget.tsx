import {
  Alert,
  Box,
  Button,
  IconButton,
  Paper,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { IconFile } from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import getLatest5 from "~/features/chiusureFiscali/getLatest5";
import { useAppDispatch, useAppSelector } from "~/hooks";

const ChiusureFiscaliWidget = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { selected: negozio } = useAppSelector((state) => state.negozi);
  const { list, listError, listing } = useAppSelector(
    (state) => state.chiusureFiscali
  );

  React.useEffect(() => {
    if (negozio) {
      dispatch(getLatest5(negozio.id!));
    }
  }, [negozio]);

  let content = <Typography>Caricamento in corso...</Typography>;

  if (listError) {
    content = <Alert severity="error">{listError}</Alert>;
  }

  if (isEmpty(list)) {
    content = (
      <Alert severity="info">Non ci sono chiusure, aggiungine una!</Alert>
    );
  } else {
    content = (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Totale</TableCell>
            <TableCell>N.D.F.</TableCell>
            <TableCell sx={{ width: 50 }} align="center">
              <IconFile />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {list?.map((cf) => (
            <TableRow key={cf.id}>
              <TableCell>{cf.data}</TableCell>
              <TableCell>€ {cf.totale}</TableCell>
              <TableCell>{cf.numeroDocFisc}</TableCell>
              <TableCell>
                <IconButton
                  color="info"
                  onClick={() =>
                    navigate(`/app/docfisc/chiusure-fiscali/dettagli/${cf.id!}`)
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

  return (
    <>
      <Paper>
        <Box p={2}>
          <Typography variant="h6" gutterBottom>
            Ultime Chiusure Fiscali
          </Typography>

          {content}

          <Box mt={2} sx={{ textAlign: "right" }}>
            <Button onClick={() => navigate("/app/docfisc/chiusure-fiscali")}>
              vai alla lista
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default ChiusureFiscaliWidget;
