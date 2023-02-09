import React from "react";
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { useAppSelector } from "~/hooks";
import { EditFab } from "components";

const Account: React.FC = () => {
  const { dettagli: account } = useAppSelector((state) => state.account);

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Account</Typography>
      </Box>

      <Box>
        <Paper>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Dettagli account
            </Typography>

            <Table>
              <TableBody>
                <TableRow>
                  <TableCell sx={{ width: 100 }}>Nome</TableCell>
                  <TableCell>{account!.nome}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ width: 100 }}>Cognome</TableCell>
                  <TableCell>{account!.cognome}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ width: 100 }}>Email</TableCell>
                  <TableCell>{account!.email}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell sx={{ width: 100 }}>Password</TableCell>
                  <TableCell>
                    <Button
                      onClick={() =>
                        (window.location.href = "/account/password/forgot")
                      }
                    >
                      reimposta password
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Paper>
      </Box>

      <EditFab href={"account/modifica"} />
    </>
  );
};

export default Account;
