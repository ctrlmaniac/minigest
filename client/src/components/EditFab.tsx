import React from "react";
import { Box, Container, Fab } from "@mui/material";
import { IconPencil } from "@tabler/icons-react";
import { isEmpty } from "lodash";

interface Props {
  href?: string;
  onClick?: Function;
}

const EditFab: React.FC<Props> = ({ href, onClick = () => {} }) => {
  return (
    <Box sx={{ position: "fixed", bottom: 16, left: 0, right: 0 }}>
      <Container sx={{ textAlign: "right" }}>
        <Fab
          color="warning"
          aria-label="modifica"
          href={!isEmpty(href) ? href : undefined}
          onClick={() => onClick()}
        >
          <IconPencil />
        </Fab>
      </Container>
    </Box>
  );
};

export default EditFab;
