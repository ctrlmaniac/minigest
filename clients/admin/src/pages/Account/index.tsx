import {
  Alert,
  Box,
  List,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import list from "~/features/account/list";
import { useAppDispatch, useAppSelector } from "~/hooks";

const Account: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [query, setQuery] = useSearchParams({ email: "" });
  const { list: accounts } = useAppSelector((state) => state.account);

  React.useEffect(() => {
    dispatch(list(query.toString()));
  }, [query]);

  React.useEffect(() => {
    console.log(accounts);
  }, [accounts]);

  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    setQuery({ email: value });
  }, [value]);

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Account</Typography>
      </Box>

      <Box mb={3}>
        <Paper>
          <Box p={2}>
            <TextField
              fullWidth
              label="ricerca per email"
              value={value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setValue(e.target.value)
              }
            />
          </Box>
        </Paper>
      </Box>

      {isEmpty(accounts) ? (
        <Alert severity="info" variant="outlined">
          Non ci sono account con l'email che hai fornito
        </Alert>
      ) : (
        <Box>
          <Paper>
            <Box p={2}>
              <List>
                {accounts!.map((account) => (
                  <ListItemButton
                    key={account.id}
                    onClick={() => navigate("/account/dettagli/" + account.id)}
                  >
                    <ListItemText
                      primary={account.nome + " " + account.cognome}
                      secondary={account.email}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default Account;
