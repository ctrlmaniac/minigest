import React from "react";
import { useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen } from "~/components";
import get from "~/features/chiusureFiscali/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import Form from "./Form";

const ChiusureFiscaliModifica: React.FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { dettagli, getting, getError } = useAppSelector(
    (state) => state.chiusureFiscali
  );

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
    return <Form dettagli={dettagli!} />;
  }
};

export default ChiusureFiscaliModifica;
