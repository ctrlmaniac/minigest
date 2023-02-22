import {
  Alert,
  Box,
  Button,
  LinearProgress,
  Paper,
  Snackbar,
  Typography,
} from "@mui/material";
import { isEmpty } from "lodash";
import React from "react";
import { useNavigate } from "react-router-dom";
import { unsetResponse } from "~/features/fatture/slice";
import upload from "~/features/fatture/upload";
import { useAppDispatch, useAppSelector } from "~/hooks";

const Upload: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { uploading, uploadError, response, dettagli } = useAppSelector(
    (state) => state.fatture
  );
  const [file, setFile] = React.useState<File[]>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      setFile([...files]);
    }
  };

  const handleSubmit = () => {
    if (file && file.length > 0) {
      const data = new FormData();
      file.map((f) => data.append("file[]", f));

      dispatch(upload(data));

      if (!uploadError) {
        setTimeout(() => {
          navigate("/docfisc/fatture");
        }, 2000);
      }
    }
  };

  return (
    <>
      <Box mb={3}>
        <Typography variant="h3">Carica Fattura</Typography>
      </Box>

      <Box>
        <Paper>
          <Box p={2}>
            <input
              type="file"
              name="file"
              id="file"
              onChange={handleChange}
              multiple
              accept="text/xml"
            />
            <Button variant="contained" onClick={handleSubmit}>
              Carica
            </Button>

            {uploading && <LinearProgress />}
          </Box>
        </Paper>
      </Box>

      <Snackbar
        open={!isEmpty(response)}
        autoHideDuration={2000}
        onClose={() => dispatch(unsetResponse())}
      >
        <Alert severity="info">{response}</Alert>
      </Snackbar>
    </>
  );
};

export default Upload;
