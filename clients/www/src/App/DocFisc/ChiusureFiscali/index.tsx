import React from "react";
import { Container } from "@mui/material";
import { AddFab, Page } from "~/components";

const ChiusureFiscali: React.FC = () => {
  return (
    <>
      <Page title="Chiusure Fiscali">
        <Container>
          <h1>Chiusure Fiscali</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            molestias quam esse fuga voluptatibus. Suscipit aliquam reiciendis
            accusantium excepturi ipsum quaerat laboriosam perferendis cum
            laborum, est hic ipsam. Maiores, perspiciatis!
          </p>
        </Container>
      </Page>
      <AddFab />
    </>
  );
};

export default ChiusureFiscali;
