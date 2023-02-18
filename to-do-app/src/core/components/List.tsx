import * as React from "react";

import {
  Alert,
  AlertTitle,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import DoneAllIcon from "@mui/icons-material/DoneAll";

export const Lista = () => {
  const [tarefas, setTarefas] = React.useState<Tarefa[]>(() => {
    const tarefasArmazenadas = localStorage.getItem("tarefas");
    if (tarefasArmazenadas) {
      return JSON.parse(tarefasArmazenadas);
    } else {
      return [];
    }
  });

  const [novaTarefa, setNovaTarefa] = React.useState("");

  const adicionarTarefa = () => {
    const novaTarefaObj: Tarefa = {
      tarefa: novaTarefa,
      completa: false,
    };
    setTarefas([...tarefas, novaTarefaObj]);
    setNovaTarefa("");
  };

  const concluirTarefa = (index: number) => {
    setTarefas((prevTarefas) => {
      const newTarefas = [...prevTarefas];
      newTarefas[index] = {
        ...newTarefas[index],
        completa: !newTarefas[index].completa, // Alterando o valor para o oposto do que era antes.
      };
      localStorage.setItem("tarefas", JSON.stringify(newTarefas));
      return newTarefas;
    });
  };

  const removerTarefa = (index: number) => {
    const tarefasAtualizadas = tarefas.filter((_, i) => i !== index);
    setTarefas(tarefasAtualizadas);
  };

  // Executado toda vez que a tarefa muda
  React.useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  }, [tarefas]);

  return (
    <div
      style={{
        padding: 30,
      }}
    >
      <Typography
        variant="caption"
        color="black"
        component="div"
        textAlign="center"
        fontSize={17}
      >
        Crie tarefas, remova e conclua para uma melhor organização do seu dia a
        dia.
      </Typography>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 30,
        }}
      >
        <TextField
          id="filled-basic"
          label="Digite a tarefa"
          variant="filled"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          error={novaTarefa.length > 25}
          helperText={novaTarefa.length > 25 ? "Tente com o nome menor" : " "}
          InputProps={{
            endAdornment: (
              <Button
                variant="contained"
                onClick={adicionarTarefa}
                disabled={novaTarefa.length === 0 || novaTarefa.length > 25}
              >
                Enviar
              </Button>
            ),
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 30,
        }}
      >
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          style={{ fontWeight: "bold" }}
        >
          LISTA COM TAREFAS
        </Typography>

        {tarefas.length === 0 ? ( // if tarefas.lenght === 0 -> mostre Alert
          <div style={{ paddingTop: 15 }}>
            <Alert severity="warning">
              <AlertTitle><strong>Nenhuma tarefa encontrada!</strong></AlertTitle>
              Você deve criar alguma <strong>tarefa</strong> para poder utilizar o aplicativo.
            </Alert>
          </div>
        ) : (
          // else mostre as tarefas
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "background.paper",
              padding: 2,
            }}
          >
            {tarefas.map((value, index) => (
              <ListItem
                key={index}
                disableGutters
                secondaryAction={
                  <IconButton aria-label="Ações da Tarefa">
                    <DoneAllIcon onClick={() => concluirTarefa(index)} />
                    <DeleteIcon onClick={() => removerTarefa(index)} />
                  </IconButton>
                }
              >
                <ListItemText
                  primary={`${value.tarefa}`}
                  style={
                    value.completa ? { textDecoration: "line-through" } : {}
                  }
                />
              </ListItem>
            ))}
          </List>
        )}
      </div>
    </div>
  );
};
