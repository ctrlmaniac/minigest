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
import React from "react";
import { ErrorScreen, LoadingScreen } from "components";
import list from "~/features/account/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import { useNavigate } from "react-router-dom";

const AccountList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    list: accounts,
    listError,
    listing,
  } = useAppSelector((state) => state.account);

  const [email, setEmail] = React.useState("");

  React.useEffect(() => {
    dispatch(list(email));
  }, [email]);

  if (listing) {
    return <LoadingScreen />;
  } else if (!isEmpty(listError)) {
    return <ErrorScreen message={listError!} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3">Account</Typography>
        </Box>

        <Box mb={2}>
          <Paper>
            <Box>
              <TextField
                label="cerca per email"
                name="email"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
                fullWidth
              />
            </Box>
          </Paper>
        </Box>

        <Box>
          <Paper>
            <Box p={2}>
              {isEmpty(accounts) ? (
                <Alert severity="info">Non ci sono account disponibili</Alert>
              ) : (
                <List>
                  {accounts?.map((account) => (
                    <ListItemButton
                      key={account.id}
                      onClick={() => navigate("dettagli/" + account.id)}
                    >
                      <ListItemText
                        primary={account.email}
                        secondary={account.fname + " " + account.lname}
                      />
                    </ListItemButton>
                  ))}
                </List>
              )}
            </Box>
          </Paper>
        </Box>
      </>
    );
  }
};

export default AccountList;
