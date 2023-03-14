import React from "react";
import {
  Box,
  FormControlLabel,
  FormGroup,
  Paper,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import { findIndex, isEmpty } from "lodash";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { EditFab, ErrorScreen, LoadingScreen } from "~/components";
import { useNavigate, useParams } from "react-router-dom";
import get from "~/features/account/get";

const Dettagli: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    principal,
    dettagli: account,
    getting,
    getError,
    response,
  } = useAppSelector((state) => state.account);

  const isAdmin = findIndex(
    principal?.authorities,
    (o) => o.authority === "ROLE_ADMIN"
  );

  React.useEffect(() => {
    dispatch(get(id!));
  }, [id]);

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (getError) {
      return <ErrorScreen>{response || "Errore di caricamento"}</ErrorScreen>;
    } else {
      return (
        <>
          <Box mb={3}>
            <Typography variant="h3">Dettagli Account</Typography>
          </Box>

          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ width: 150 }}>Nome</TableCell>
                      <TableCell>{account?.nome}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Cognome</TableCell>
                      <TableCell>{account?.cognome}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Email</TableCell>
                      <TableCell>{account?.email}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Azienda</TableCell>
                      <TableCell>
                        {!isEmpty(account?.azienda)
                          ? account?.azienda.denominazione
                          : "nessuna azienda"}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Box>

          {isAdmin && (
            <>
              <Box mb={3}>
                <Paper>
                  <Box p={2}>
                    <Typography variant="h6" gutterBottom>
                      Ruoli
                    </Typography>
                    <Typography>
                      {account?.authorities.map((o) => o.authority).join("; ")}
                    </Typography>
                  </Box>
                </Paper>
              </Box>

              <Box mb={3}>
                <Paper>
                  <Box p={2}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Switch checked={account?.enabled} name="enabled" />
                        }
                        label="Account abilitato"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={account?.credentialsNonExpired}
                            name="credentialsNonExpired"
                          />
                        }
                        label="Credenziali non scadute"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={account?.accountNonExpired}
                            name="accountNonExpired"
                          />
                        }
                        label="Account non scaduto"
                      />
                      <FormControlLabel
                        control={
                          <Switch
                            checked={account?.accountNonLocked}
                            name="accountNonLocked"
                          />
                        }
                        label="Account non bloccato"
                      />
                    </FormGroup>
                  </Box>
                </Paper>
              </Box>
            </>
          )}

          <EditFab onClick={() => navigate(`/account/modifica/${id}`)} />
        </>
      );
    }
  }
};

export default Dettagli;
