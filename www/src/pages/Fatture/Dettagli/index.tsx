import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen } from "~/components";
import get from "~/features/fatture/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import { default as Dettagli } from "./Dettagli";

const FattureDettagli: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { dettagli, getting, getError } = useAppSelector(
    (state) => state.fatture
  );

  React.useEffect(() => {
    if (id) {
      dispatch(get(id));
    }
  }, [id]);

  if (getting) {
    return <LoadingScreen />;
  } else if (getError) {
    return <ErrorScreen message={getError} />;
  } else {
    return <Dettagli dettagli={dettagli!} />;
  }
};

export default FattureDettagli;
