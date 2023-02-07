import {
  Alert,
  Box,
  List,
  ListItemButton,
  ListItemText,
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

  React.useEffect(() => {
    dispatch(list());
  }, []);

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
      </>
    );
  }
};

export default AccountList;
