import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useRouteLoaderData } from "react-router-dom";

const Account: React.FC = () => {
  const account: any = useRouteLoaderData("app");

  console.log(account);

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3" component="h1">
          Account
        </Typography>
      </Box>

      <Box>
        <Paper>
          <Box p={2}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Nome</TableCell>
                  <TableCell>{account.fname}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Cognome</TableCell>
                  <TableCell>{account.lname}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Email</TableCell>
                  <TableCell>{account.email}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Account;
