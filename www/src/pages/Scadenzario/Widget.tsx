import {
  Alert,
  Box,
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { IconFile } from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import list from "~/features/scadenzario/list";
import { useAppDispatch, useAppSelector } from "~/hooks";

const ScadenzarioWidget: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { listError, list: scadenzario } = useAppSelector(
    (state) => state.scadenzario
  );

  React.useEffect(() => {
    dispatch(list());
  }, []);

  let content = <Typography>caricamento...</Typography>;

  if (listError) {
    content = <Alert severity="error">{listError}</Alert>;
  }

  if (isEmpty(scadenzario)) {
    content = <Alert severity="info">Non ci sono scadenze da pagare!</Alert>;
  } else {
    content = (
      <Table>
        <TableBody>
          {scadenzario?.map((scad) => {
            return (
              <TableRow key={scad.id}>
                <TableCell sx={{ width: 50 }} align="center">
                  <IconButton
                    color="info"
                    onClick={() =>
                      navigate(
                        `/app/docfisc/fatture/dettagli/${scad.fattura?.id!}`
                      )
                    }
                  >
                    <IconFile />
                  </IconButton>
                </TableCell>
                <TableCell>{scad.data}</TableCell>
                <TableCell align="right">{scad.importo} €</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    );
  }

  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          Scadenze da pagare
        </Typography>

        {content}

        <Box mt={2} sx={{ textAlign: "right" }}>
          <Button onClick={() => navigate("/app/scadenzario")}>
            vai alla lista
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default ScadenzarioWidget;
