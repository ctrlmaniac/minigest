import React from "react";
import { ErrorScreen, LoadingScreen } from "~/components";
import { default as listAziende } from "~/features/azienda/list";
import { default as listTDFS } from "~/features/tipiDocFisc/list";
import { useAppDispatch, useAppSelector } from "~/hooks";
import Form from "./Form";
import get from "~/features/fatture/get";
import { useParams } from "react-router-dom";
import { isEmpty } from "lodash";

const FattureModifica: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const { dettagli, getting, getError } = useAppSelector(
    (state) => state.fatture
  );
  const {
    list: aziende,
    listing,
    listError,
  } = useAppSelector((state) => state.azienda);
  const {
    list: tdfs,
    listing: tdfsListing,
    listError: tdfsListError,
  } = useAppSelector((state) => state.tipiDocFisc);

  React.useEffect(() => {
    dispatch(listAziende());
    dispatch(listTDFS());

    if (id) {
      dispatch(get(id));
    }
  }, [id]);

  if (getting && listing && tdfsListing) {
    return <LoadingScreen />;
  } else {
    if (getError || listError || tdfsListError) {
      return <ErrorScreen>Errore caricamento dati</ErrorScreen>;
    } else {
      if (!isEmpty(dettagli) && !isEmpty(aziende) && !isEmpty(tdfs)) {
        return (
          <Form dettagli={dettagli!} aziende={aziende!} tipiDocumento={tdfs!} />
        );
      }

      return <ErrorScreen>Errore caricamento dati</ErrorScreen>;
    }
  }
};

export default FattureModifica;
