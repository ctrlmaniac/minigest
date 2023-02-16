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
import { green, red } from "@mui/material/colors";
import {
  IconAlertCircle,
  IconBuildingWarehouse,
  IconCircleCheck,
  IconFile,
  IconInfoCircle,
} from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import last10 from "~/features/fatture/last10";
import { useAppDispatch, useAppSelector } from "~/hooks";

const WidgetFatture: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { selected: azienda } = useAppSelector((state) => state.aziende);
  const { list } = useAppSelector((state) => state.fatture);

  React.useEffect(() => {
    if (!isEmpty(azienda)) {
      dispatch(last10(azienda.id!));
    }
  }, [azienda]);

  let content = <Typography>Caricamento in corso...</Typography>;

  if (isEmpty(azienda)) {
    content = (
      <Alert severity="info" variant="outlined">
        <AlertTitle>Devi prima selezionare un'azienda!</AlertTitle>
        Clicca su <IconBuildingWarehouse /> per selezionarne una!
      </Alert>
    );
  } else {
    if (isEmpty(list)) {
      content = (
        <Alert severity="info" variant="outlined">
          Non hai fatture acquisto! Aggiungine una per vederla qua!
        </Alert>
      );
    } else {
      content = (
        <>
          <Box sx={{ overflowX: "auto" }} mb={2}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ width: 50 }}>
                    <IconFile />
                  </TableCell>
                  <TableCell>Doc.</TableCell>
                  <TableCell>Data</TableCell>
                  <TableCell>Cedente</TableCell>
                  <TableCell align="right">Totale</TableCell>
                  <TableCell align="center" sx={{ width: 50 }}>
                    <IconInfoCircle />
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list?.map((fattura) => (
                  <TableRow key={fattura.id}>
                    <TableCell align="center">
                      <IconButton
                        color="primary"
                        onClick={() =>
                          navigate("/docfisc/fatture/dettagli/" + fattura.id)
                        }
                      >
                        <IconFile />
                      </IconButton>
                    </TableCell>
                    <TableCell sx={{ width: 100 }}>
                      {fattura.tipoDocumento.codice}
                    </TableCell>
                    <TableCell sx={{ width: 150 }}>{fattura.data}</TableCell>
                    <TableCell>{fattura.cedente.denominazione}</TableCell>
                    <TableCell align="right">{fattura.totale}</TableCell>
                    <TableCell align="center">
                      {fattura.evasa ? (
                        <IconCircleCheck color={green[500]} />
                      ) : (
                        <IconAlertCircle color={red[500]} />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>

          <Box sx={{ textAlign: "right" }}>
            <Button onClick={() => navigate("/docfisc/fatture/acquisto")}>
              Vai alla lista
            </Button>
          </Box>
        </>
      );
    }
  }

  return (
    <Paper>
      <Box p={2}>
        <Typography variant="h6" gutterBottom>
          Ultime fatture acquisto
        </Typography>
        {content}
      </Box>
    </Paper>
  );
};

export default WidgetFatture;
