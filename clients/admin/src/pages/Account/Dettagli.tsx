import React from "react";
import { useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen, SaveFab } from "components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { forEach, isEmpty } from "lodash";
import {
  Alert,
  Autocomplete,
  Box,
  FormControlLabel,
  FormGroup,
  Paper,
  Snackbar,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import get from "~/features/account/get";
import { AccountRuolo, Azienda } from "~/types";
import list from "~/features/accountRuolo/list";
import { default as listAziende } from "~/features/aziende/list";
import update from "~/features/account/update";
import { unsetResponse } from "~/features/account/slice";

const AccountDettagli = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { dettagli, getting, getError, response, updating } = useAppSelector(
    (state) => state.account
  );
  const {
    list: ruoli,
    listing,
    response: listResponse,
  } = useAppSelector((state) => state.accountRuoli);
  const { list: aziende, listing: listingAziende } = useAppSelector(
    (state) => state.aziende
  );

  React.useEffect(() => {
    if (!isEmpty(id)) {
      dispatch(get(id!));
      dispatch(list());
      dispatch(listAziende());
    }
  }, [id]);

  const [roles, setRoles] = React.useState<AccountRuolo[]>([]);
  const [values, setValues] = React.useState({
    enabled: true,
    credentialsNonExpired: true,
    accountNonExpired: true,
    accountNonLocked: true,
  });
  const [business, setBusiness] = React.useState<Azienda[]>([]);

  React.useEffect(() => {
    if (!isEmpty(dettagli)) {
      setRoles(dettagli.authorities);
      setValues({
        ...values,
        enabled: dettagli.enabled,
        credentialsNonExpired: dettagli.credentialsNonExpired,
        accountNonLocked: dettagli.accountNonLocked,
        accountNonExpired: dettagli.accountNonExpired,
      });
      setBusiness(dettagli.aziende || []);
    }
  }, [dettagli]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.checked,
    });
  };

  const handleUpdate = () => {
    if (!isEmpty(id)) {
      let payload: any = {
        ...values,
        authorities: roles,
      };

      if (!isEmpty(business)) {
        let newAziende = [];

        for (let index = 0; index < business!.length; index++) {
          const el = {
            id: business![index].id,
          };

          newAziende.push(el);
        }

        payload = {
          ...payload,
          aziende: newAziende,
        };
      }

      dispatch(update(id!, payload));

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

          <Box mb={3}>
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

          <Box mb={3}>
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

          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.enabled}
                        onChange={handleChange}
                        name="enabled"
                      />
                    }
                    label="Account abilitato"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.credentialsNonExpired}
                        onChange={handleChange}
                        name="credentialsNonExpired"
                      />
                    }
                    label="Credenziali non scadute"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.accountNonExpired}
                        onChange={handleChange}
                        name="accountNonExpired"
                      />
                    }
                    label="Account non scaduto"
                  />
                  <FormControlLabel
                    control={
                      <Switch
                        checked={values.accountNonLocked}
                        onChange={handleChange}
                        name="accountNonLocked"
                      />
                    }
                    label="Account non bloccato"
                  />
                </FormGroup>
              </Box>
            </Paper>
          </Box>

          <Box mb={3}>
            <Paper>
              <Box p={2}>
                <Typography variant="h6" gutterBottom>
                  Aziende di cui fa parte
                </Typography>

                <Autocomplete
                  multiple
                  id="aziende"
                  options={aziende || []}
                  loading={listingAziende}
                  noOptionsText="Non ci sono altre aziende"
                  isOptionEqualToValue={(option: Azienda, value: Azienda) =>
                    option.denominazione === value.denominazione
                  }
                  getOptionLabel={(option) => {
                    let opt = option as Azienda;
                    return opt.denominazione;
                  }}
                  value={business}
                  filterSelectedOptions
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Seleziona aziende"
                      placeholder="Aziende"
                    />
                  )}
                  onChange={(event, newValue) => {
                    setBusiness(newValue);
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
