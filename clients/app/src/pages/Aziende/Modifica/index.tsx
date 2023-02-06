import React from "react";
import { useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen } from "components";
import get from "~/features/aziende/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import AziendeModificaForm from "./Form";

const AziendeModifica: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const {
    dettagli: azienda,
    getting,
    getError,
  } = useAppSelector((state) => state.aziende);

  React.useEffect(() => {
    if (id) {
      dispatch(get(id!));
    }
  }, [id]);

  if (getting) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen message={getError} />;
  } else {
    return <AziendeModificaForm dettagli={azienda!} />;
  }
};

export default AziendeModifica;
