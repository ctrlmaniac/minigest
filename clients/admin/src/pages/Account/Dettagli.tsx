import React from "react";
import { useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen, SaveFab } from "components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import {
  Alert,
  Autocomplete,
  Box,
  Paper,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import get from "~/features/account/get";
import { Account, AccountRuolo } from "~/types";
import list from "~/features/accountRuolo/list";
import update from "~/features/account/update";
import { unsetResponse } from "~/features/account/slice";

const AccountDettagli = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { dettagli, getting, getError, response, updating, updateError } =
    useAppSelector((state) => state.account);
  const {
    list: ruoli,
    listing,
    listError,
    response: listResponse,
  } = useAppSelector((state) => state.accountRuoli);

  React.useEffect(() => {
    if (!isEmpty(id)) {
      dispatch(get(id!));
      dispatch(list());
    }
  }, [id]);

  const [roles, setRoles] = React.useState<AccountRuolo[]>([]);

  React.useEffect(() => {
    if (!isEmpty(dettagli)) {
      setRoles(dettagli.authorities);
    }
  }, [dettagli]);

  const handleUpdate = () => {
    if (!isEmpty(id)) {
      const newValues = {
        ...dettagli,
        authorities: roles,
      };

      dispatch(update(id!, newValues));

      setTimeout(() => {
        dispatch(unsetResponse());
      }, 1000);
    }
  };

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (getError || isEmpty(dettagli)) {
      return <ErrorScreen message={response || "Errore di caricamento"} />;
    } else {
      return (
        <>
          <Box mb={3}>
            <Typography variant="h3">Dettagli Account</Typography>
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
                      <TableCell>{dettagli!.nome}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ width: 100 }}>Cognome</TableCell>
                      <TableCell>{dettagli!.cognome}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ width: 100 }}>Email</TableCell>
                      <TableCell>{dettagli!.email}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            </Paper>
          </Box>

          <Box>
            <Paper>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Modifica Ruoli
                </Typography>

                <Autocomplete
                  multiple
                  id="ruoli"
                  options={ruoli || []}
                  loading={listing}
                  noOptionsText="Non ci sono altri ruoli"
                  isOptionEqualToValue={(
                    option: AccountRuolo,
                    value: AccountRuolo
                  ) => option.authority === value.authority}
                  getOptionLabel={(option) => {
                    let opt = option as AccountRuolo;
                    return opt.authority;
                  }}
                  value={roles}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Seleziona Ruoli"
                      placeholder="Ruoli"
                    />
                  )}
                  onChange={(event, newValue) => {
                    setRoles(newValue);
                  }}
                />
              </Box>
            </Paper>
          </Box>

          <SaveFab
            disabled={isEmpty(id)}
            onClick={handleUpdate}
            loading={updating}
          />

          <Snackbar open={!isEmpty(response)}>
            <Alert severity="info">{response}</Alert>
          </Snackbar>
        </>
      );
    }
  }
};

export default AccountDettagli;
