import {
  Box,
  IconButton,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { IconFile } from "@tabler/icons-react";
import { find, isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AddFab, ErrorScreen, LoadingScreen } from "~/components";
import list from "~/features/account/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { AccountRuolo } from "~/types";

const AccountLista: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    principal,
    list: account,
    listing,
    listError,
    response,
  } = useAppSelector((state) => state.account);

  const isAdmin = !isEmpty(
    find(
      principal?.authorities,
      (o: AccountRuolo) => o.authority === "ROLE_ADMIN"
    )
  );

  React.useEffect(() => {
    if (!isAdmin) {
      if (!isEmpty(principal)) {
        navigate(`/account/dettagli/${principal!.id}`);
      }
    }
  }, [isAdmin, principal]);

  const [email, setEmail] = React.useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  React.useEffect(() => {
    if (isEmpty(email)) {
      dispatch(list());
    } else {
      dispatch(list("email=" + email));
    }
  }, [email]);

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Account</Typography>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <Typography variant="h6" gutterBottom>
              Cerca per indirizzo email
            </Typography>
            <TextField
              fullWidth
              label="email"
              value={email}
              onChange={handleChange}
            />
          </Box>
        </Paper>
      </Box>

      {listing ? (
        <LinearProgress />
      ) : (
        <Box mb={3}>
          <Paper>
            <Box p={2}>
              {isEmpty(account) ? (
                <Typography>
                  Non ci sono account con l'indirizzo email fornito
                </Typography>
              ) : (
                <Table>
                  <TableBody>
                    {account?.map((a) => (
                      <TableRow key={a.id}>
                        <TableCell sx={{ width: 50 }} align="center">
                          <IconButton
                            color="primary"
                            onClick={() =>
                              navigate(`/account/dettagli/${a.id}`)
                            }
                          >
                            <IconFile />
                          </IconButton>
                        </TableCell>
                        <TableCell>
                          {a.nome} {a.cognome}
                        </TableCell>
                        <TableCell>{a.email}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </Box>
          </Paper>
        </Box>
      )}

      <AddFab onClick={() => navigate("/account/aggiungi")} />
    </>
  );
};

export default AccountLista;
