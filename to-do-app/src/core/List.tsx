import * as React from "react";

import { Button, Typography } from "@mui/material";

export const List = () => {
  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <Typography
        variant="caption"
        color="white"
        component="div"
        textAlign="center"
      >
        Crie tarefas, remova e edite para uma melhor organização do seu dia a
        dia.
      </Typography>
      <div style={{ display: "flex", alignItems: "center", paddingTop: 30 }}>
        <Typography
          variant="h6"
          color="white"
          component="div"
          padding="right"
          flex={1}
        >
          LISTA DE TAREFAS
        </Typography>

        <Button variant="contained">Adicionar</Button>
      </div>
    </div>
  );
};
