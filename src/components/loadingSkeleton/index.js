import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function Loader({ width = 290 }) {
  return <Skeleton variant="rectangular" width={width} height="400px" />;
}
