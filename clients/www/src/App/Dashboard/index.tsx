import { Container, Typography } from "@mui/material";
import React from "react";
import { Page } from "~/components";

const Dashboard: React.FC = () => {
  return (
    <Page title="Dashboard">
      <Container>
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          doloribus excepturi distinctio. Accusantium dolorum pariatur esse nisi
          tempore vitae eligendi. Unde consectetur ut iure praesentium a
          aspernatur similique ipsa autem.
        </Typography>
      </Container>
    </Page>
  );
};

export default Dashboard;
