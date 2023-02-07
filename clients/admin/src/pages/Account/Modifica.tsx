import React from "react";
import {
  Autocomplete,
  Box,
  Chip,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen, SaveFab } from "components";
import get from "~/features/account/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { isEmpty } from "lodash";
import { AccountRole } from "~/types";
import update from "~/features/account/update";

const AccountModifica: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { list: ruoli, listing } = useAppSelector(
    (state) => state.accountRuoli
  );

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

  const [values, setValues] = React.useState<(string | AccountRole)[]>([]);

  React.useEffect(() => {
    if (!isEmpty(account!)) {
      setValues([...account!.roles]);
    }
  }, [account]);

  const handleSubmit = () => {
    if (!isEmpty(values)) {
      dispatch(update(id!, { roles: values as AccountRole[] }));
    }
  };

  if (getting) {
    return <LoadingScreen />;
  } else if (!isEmpty(getError)) {
    return <ErrorScreen message={getError!} />;
  } else {
    return (
      <>
        <Box mb={3}>
          <Typography variant="h3" gutterBottom>
            Modifica Account
          </Typography>
          <Typography>Potrai modificare solo il ruolo dell'account</Typography>
        </Box>

        <Box>
          <Paper>
            <Box p={2}>
              <Autocomplete
                multiple
                id="tags-filled"
                options={ruoli || []}
                isOptionEqualToValue={(option, value) =>
                  option.name === value.name
                }
                getOptionLabel={(option) => option.name}
                value={values}
                onChange={(event, newValue) => {
                  setValues(newValue);
                }}
                freeSolo
                loading={listing}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      variant="outlined"
                      label={option.name}
                      {...getTagProps({ index })}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    label="Ruoli"
                    placeholder="Ruoli"
                  />
                )}
              />
            </Box>
          </Paper>
        </Box>

        <SaveFab handleClick={handleSubmit} disabled={false} />
      </>
    );
  }
};

export default AccountModifica;
