import { isEmpty } from "lodash";
import React from "react";
import { useParams } from "react-router-dom";
import get from "~/features/aziende/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { ErrorScreen, LoadingScreen } from "components";
import Form from "./Form";

const AziendaModifica = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { dettagli, getting, getError } = useAppSelector(
    (state) => state.aziende
  );

  React.useEffect(() => {
    if (!isEmpty(id)) {
      dispatch(get(id!));
    }
  }, []);

  if (getting) {
    return <LoadingScreen />;
  } else {
    if (!isEmpty(getError) || isEmpty(dettagli)) {
      return <ErrorScreen message={getError || "Errore di caricamento"} />;
    }

    return <Form dettagli={dettagli} />;
  }
};

export default AziendaModifica;
