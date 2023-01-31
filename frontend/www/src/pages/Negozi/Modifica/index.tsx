import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { ErrorScreen, LoadingScreen } from "~/components";
import get from "~/features/negozi/get";
import { useAppDispatch, useAppSelector } from "~/hooks";
import NegoziFormModifica from "./Form";

const NegoziModifica: React.FC = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { dettagli, getting, getError } = useAppSelector(
    (state) => state.negozi
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
    return <NegoziFormModifica dettagli={dettagli!} />;
  }
};

export default NegoziModifica;
