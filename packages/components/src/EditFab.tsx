import React from "react";
import { Box, Container, Fab } from "@mui/material";
import { IconPencil } from "@tabler/icons-react";

interface Props {
  href: string;
}

const EditFab: React.FC<Props> = (props) => {
  return (
    <Box sx={{ position: "fixed", bottom: 16, left: 0, right: 0 }}>
      <Container sx={{ textAlign: "right" }}>
        <Fab color="warning" aria-label="modifica" href={props.href}>
          <IconPencil />
        </Fab>
      </Container>
    </Box>
  );
};

export default EditFab;
