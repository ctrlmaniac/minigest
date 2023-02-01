import React from "react";
import { ErrorScreen, LoadingScreen } from "~/components";
import { default as listAziende } from "~/features/aziende/list";
import { default as listTDFS } from "~/features/tipoDocFisc/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import Form from "./Form";
import get from "~/features/fatture/get";
import { useParams } from "react-router-dom";

const FattureModifica: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { dettagli, getting, getError } = useAppSelector(
    (state) => state.fatture
  );
  const { list: aziende, listing } = useAppSelector((state) => state.aziende);
  const { list: tdfs, listing: tdfsListing } = useAppSelector(
    (state) => state.tipiDocFisc
  );

  React.useEffect(() => {
    dispatch(listAziende());
    dispatch(listTDFS());

    if (id) {
      dispatch(get(id));
    }
  }, [id]);

  if (getting || listing || tdfsListing) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen message={getError} />;
  } else {
    return (
      <Form dettagli={dettagli!} aziende={aziende!} tipiDocumento={tdfs!} />
    );
  }
};

export default FattureModifica;
