import * as React from "react";
import Typography from "@mui/material/Typography";
import ImgISHIDA from "../../public/static/img/logo-ishida.svg";

export default function Copyright() {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      className="area-copy"
    >
      <img src={ImgISHIDA} alt="" />
    </Typography>
  );
}
