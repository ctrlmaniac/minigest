import React from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import { useAppSelector } from "~/hooks";
import { EditFab } from "~/components";
import { useNavigate } from "react-router-dom";

const Dettagli: React.FC = () => {
  const navigate = useNavigate();
  const { principal } = useAppSelector((state) => state.account);

  return (
    <>
      <Box mb={6}>
        <Typography variant="h3">Dettagli Account</Typography>
      </Box>

      <Box mb={6}>
        <Paper>
          <Box p={2}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ width: 150 }}>Nome</TableCell>
                  <TableCell>{principal?.nome}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cognome</TableCell>
                  <TableCell>{principal?.cognome}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>{principal?.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Azienda</TableCell>
                  <TableCell>
                    {!isEmpty(principal?.azienda)
                      ? principal?.azienda.denominazione
                      : "nessuna azienda"}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Paper>
      </Box>

      <EditFab onClick={() => navigate(`/account/modifica/${principal?.id}`)} />
    </>
  );
};

export default Dettagli;
