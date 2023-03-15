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

const WidgetScadenzario = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    listError,
    list: scadenze,
    response,
  } = useAppSelector((state) => state.scadenzario);

  React.useEffect(() => {
    dispatch(list());
  }, []);

  let content = <Typography>caricamento in corso...</Typography>;

  if (listError) {
    content = (
      <Alert severity="error" variant="outlined">
        {response || "Errore di caricamento"}
      </Alert>
    );
  } else {
    if (isEmpty(scadenze)) {
      content = (
        <Alert severity="success" variant="outlined">
          Non hai scadenze!
        </Alert>
      );
    } else {
      content = (
        <Table>
          <TableBody>
            {scadenze!.map((scadenza) => (
              <TableRow key={scadenza.id}>
                <TableCell sx={{ width: 50 }} align="center">
                  <IconButton
                    color="primary"
                    onClick={() =>
                      navigate(
                        `/${scadenza.tipo === "fattura" ? "docfisc/" : ""}${
                          scadenza.tipo
                        }/dettagli/${scadenza.id}`
                      )
                    }
                  >
                    <IconFile />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ width: 100 }}>{scadenza.tipo}</TableCell>
                <TableCell>{scadenza.dataScadenza}</TableCell>
                <TableCell align="right">€ {scadenza.totale}</TableCell>
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
            Scadenzario
          </Typography>

          {content}

          <Box mt={2} sx={{ textAlign: "right" }}>
            <Button onClick={() => navigate("/scadenzario")}>
              Vai allo scadenzario
            </Button>
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default WidgetScadenzario;
