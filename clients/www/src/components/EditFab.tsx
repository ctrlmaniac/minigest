import { Box, Container, Fab } from "@mui/material";
import { IconPencil } from "@tabler/icons";
import React from "react";

interface Props {
  href: string;
}

const AddFab: React.FC<Props> = (props) => {
  return (
    <Box sx={{ position: "fixed", bottom: 16, left: 0, right: 0 }}>
      <Container sx={{ textAlign: "right" }}>
        <Fab aria-label="aggiungi" href={props.href} color="warning">
          <IconPencil />
        </Fab>
      </Container>
    </Box>
  );
};

export default AddFab;
