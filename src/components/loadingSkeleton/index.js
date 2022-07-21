import * as React from "react";
import Skeleton from "@mui/material/Skeleton";

export default function Loader({ width = 290, height = "400px" }) {
  return <Skeleton variant="rectangular" width={width} height={height} />;
}
