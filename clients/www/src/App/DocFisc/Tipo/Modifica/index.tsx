import React from "react";
import { useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen } from "~/components";
import { useAppDispatch, useAppSelector } from "~/hooks";
import Form from "./Form";
import get from "~/features/tipoDocFisc/get";

const ModificaTDF: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { getting, getError, dettagli } = useAppSelector(
    (state) => state.tipoDocFisc
  );

  React.useEffect(() => {
    dispatch(get(id!));
  }, [id]);

  if (getting) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen messaggio="C'è stato un errore..." />;
  } else {
    return <Form data={dettagli!} />;
  }

  return <></>;
};

export default ModificaTDF;
