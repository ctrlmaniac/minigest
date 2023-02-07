import React from "react";
import { useParams } from "react-router-dom";
import { EditFab, ErrorScreen, LoadingScreen } from "components";
import get from "~/features/account/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";

const AccountDettagli: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const {
    dettagli: account,
    getting,
    getError,
  } = useAppSelector((state) => state.account);

  React.useEffect(() => {
    if (id) {
      dispatch(get(id!));
    }
  }, [id]);

  if (getting) {
    return <LoadingScreen />;
  } else if (!isEmpty(getError)) {
    return <ErrorScreen message={getError!} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Dettagli Account</Typography>
        </Box>

        <Box>
          <Paper>
            <Box p={2}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ width: 100 }}>Nome</TableCell>
                    <TableCell>{account?.fname}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: 100 }}>Nome</TableCell>
                    <TableCell>{account?.lname}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: 100 }}>Nome</TableCell>
                    <TableCell>{account?.email}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ width: 100 }}>Ruoli</TableCell>
                    <TableCell>
                      {account?.roles.map((role) => (
                        <span key={role.id}>{role.name}, </span>
                      ))}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Paper>
        </Box>

        <EditFab href={"/admin/account/modifica/" + account?.id} />
      </>
    );
  }
};

export default AccountDettagli;
