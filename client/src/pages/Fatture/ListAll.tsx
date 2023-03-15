import {
  Alert,
  Box,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
  Container,
  SpeedDial,
  SpeedDialAction,
} from "@mui/material";
import {
  IconFile,
  IconPlus,
  IconSettings,
  IconUpload,
} from "@tabler/icons-react";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import listAll from "~/features/fatture/listAll";
import { useAppDispatch, useAppSelector } from "~/hooks";

const ListAll: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { list: fatture } = useAppSelector((state) => state.fatture);
  const { principal } = useAppSelector((state) => state.account);

  React.useEffect(() => {
    if (!isEmpty(principal)) {
      dispatch(listAll(principal!.id!));
    }
  }, [principal]);

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Ultime fatture aggiunte</Typography>
      </Box>

      {isEmpty(fatture) ? (
        <Alert severity="info" variant="outlined">
          Non ci sono fatture, aggiungine una!
        </Alert>
      ) : (
        <Box mb={3}>
          <Paper>
            <Box p={3}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Documento</TableCell>
                    <TableCell>Data</TableCell>
                    <TableCell>Cedente</TableCell>
                    <TableCell>Committente</TableCell>
                    <TableCell>Numero</TableCell>
                    <TableCell sx={{ width: 50 }} align="center">
                      <IconFile />
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {fatture?.map((fattura) => (
                    <TableRow key={fattura.id}>
                      <TableCell>{fattura.tipoDocumento.codice}</TableCell>
                      <TableCell>{fattura.data}</TableCell>
                      <TableCell>{fattura.cedente.denominazione}</TableCell>
                      <TableCell>{fattura.committente.denominazione}</TableCell>
                      <TableCell>{fattura.numero}</TableCell>
                      <TableCell>
                        <IconButton
                          color="info"
                          onClick={() =>
                            navigate(`/docfisc/fatture/dettagli/${fattura.id}`)
                          }
                        >
                          <IconFile />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Paper>
        </Box>
      )}

      <Box sx={{ position: "fixed", bottom: 16, right: 16 }}>
        <Container sx={{ textAlign: "right", position: "relative" }}>
          <SpeedDial ariaLabel="azioni" icon={<IconSettings />}>
            <SpeedDialAction
              icon={<IconPlus />}
              tooltipTitle="aggiungi"
              onClick={() => navigate("/docfisc/fatture/aggiungi")}
            />
            <SpeedDialAction
              icon={<IconUpload />}
              tooltipTitle="carica"
              onClick={() => navigate("/docfisc/fatture/carica")}
            />
          </SpeedDial>
        </Container>
      </Box>
    </>
  );
};

export default ListAll;
