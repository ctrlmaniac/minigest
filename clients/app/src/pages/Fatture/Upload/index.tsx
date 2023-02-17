import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import upload from "~/features/fatture/upload";
import { useAppDispatch, useAppSelector } from "~/hooks";

const Upload: React.FC = () => {
  const dispatch = useAppDispatch();
  const { uploading, uploadError, response } = useAppSelector(
    (state) => state.fatture
  );
  const [file, setFile] = React.useState<File>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files) {
      setFile(files[0]);
    }
  };

  const handleSubmit = () => {
    if (file) {
      const data = new FormData();
      data.append("file", file);

      dispatch(upload(data));
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
            <input type="file" name="file" id="file" onChange={handleChange} />
            <Button onClick={handleSubmit}>Carica</Button>
          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Upload;
