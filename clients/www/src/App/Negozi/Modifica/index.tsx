import React from "react";
import { useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen } from "~/components";
import get from "~/features/negozi/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import FormModificaNegozio from "./Form";

const ModificaNegozio: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { dettagli, getting, getError } = useAppSelector(
    (state) => state.negozi
  );

  React.useEffect(() => {
    dispatch(get(id!));
  }, [id]);

  if (getting) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen messaggio="C'è stato un errore!" />;
  } else {
    return <FormModificaNegozio negozio={dettagli!} />;
  }
};

export default ModificaNegozio;
