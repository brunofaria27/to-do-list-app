import * as React from "react";

import list_logo from "../images/list_logo.png";
import { AppBar, Typography } from "@mui/material";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#171717" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          style={{
            height: 50,
            width: 50,
            margin: 10,
          }}
          src={list_logo}
        ></img>

        <Typography
          variant="h6"
          color="inherit"
          component="div"
        >
          ORGANIZADOR DE TAREFAS
        </Typography>
      </div>
    </AppBar>
  )
}
