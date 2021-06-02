import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function LoadingIndicator(props) {
  return (
    <CircularProgress
      style={{ display: "block", textAlign: "center", marginTop: 30 }}
    />
  );
}
