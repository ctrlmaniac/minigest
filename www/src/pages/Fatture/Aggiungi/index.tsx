import React from "react";
import { LoadingScreen } from "~/components";
import { default as listAziende } from "~/features/aziende/list";
import { default as listTDFS } from "~/features/tipoDocFisc/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import Form from "./Form";

const FattureAggiungi: React.FC = () => {
  const dispatch = useAppDispatch();

  const { list: aziende, listing } = useAppSelector((state) => state.aziende);
  const { list: tdfs, listing: tdfsListing } = useAppSelector(
    (state) => state.tipiDocFisc
  );

  React.useEffect(() => {
    dispatch(listAziende());
    dispatch(listTDFS());
  }, []);

  if (listing || tdfsListing) {
    return <LoadingScreen />;
  } else {
    return <Form aziende={aziende!} tipiDocumento={tdfs!} />;
  }
};

export default FattureAggiungi;
