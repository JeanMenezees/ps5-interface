import React, { useContext, useEffect, useReducer, useState } from "react";
import { Box, Text } from "../../styled.components/styles";
import imagemJogo from "../../assets/imagens.jogos/img-jogo1.jpg";
import imagemJogo2 from "../../assets/imagens.jogos/img-jogo2.jpg";
import imagemJogo3 from "../../assets/imagens.jogos/img-jogo3.png";
import contextoJogo from "../../contexts/contextoJogo";

// Setando o estilo do jogo selecionado
const estiloSelecionado = {
  width: "7rem",
  height: "7rem",
  color: "white",
  borderRadius: "20px",
  margin: "0 4px",
  position: "relative",
};

// Setando o estilo do jogo que nao esta selecionado
const estiloNaoSelecionado = {
  width: "5rem",
  height: "100%",
  color: "white",
  borderRadius: "20px",
  margin: "0 4px",
};

const dados_jogos = [
  {
    id: 1,
    nome: "Call of duty warzone",
    descricao: "Descricao 1",
    logo: 1,
    fundo: 1,
    imagem: imagemJogo,
    conquistas: "2/10",
    progresso: "70%",
  },
  {
    id: 2,
    nome: "Resident Evil Village",
    descricao: "Descricao 2",
    logo: 2,
    fundo: 2,
    imagem: imagemJogo2,
    conquistas: "3/10",
    progresso: "45%",
  },
  {
    id: 3,
    nome: "FIFA22",
    descricao: "Descricao 3",
    logo: 3,
    fundo: 3,
    imagem: imagemJogo3,
    conquistas: "4/10",
    progresso: "30%",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "avancar":
      if (state.ky + 1 < 3) {
        return {
          mov: { pixels: state.mov.pixels + 4, rem: state.mov.rem + 5 },
          ky: state.ky + 1,
        };
      } else {
        return { mov: { pixels: state.mov.pixels, rem: state.mov.rem }, ky: state.ky };
      }
    case "voltar":
      if (state.ky - 1 >= 0) {
        return {
          mov: { pixels: state.mov.pixels - 4, rem: state.mov.rem - 5 },
          ky: state.ky - 1,
        };
      } else {
        return { mov: { pixels: state.mov.pixels, rem: state.mov.rem }, ky: state.ky };
      }
  }
}

export default function Lista() {
  const [jogos, setJogos] = useState(dados_jogos);

  const [state, dispatch] = useReducer(reducer, {
    mov: { pixels: 0, rem: 0 },
    ky: 0,
  });

  const contexto = useContext(contextoJogo);

  useEffect(() => {
    document.addEventListener("keypress", (event) => {
      const tecla = event.key;

      if (tecla === "a") {
        dispatch({ type: "voltar" });
      }
      if (tecla === "d") {
        dispatch({ type: "avancar" });
      }
    });
  }, []);

  // Toda vez que muda o jogo selecionado, as informaçoes enviadas para os detalhes mudam
  useEffect(() => {
    contexto.setNomeJogo(jogos[state.ky].nome);
    contexto.setDescJogo(jogos[state.ky].descricao);
    contexto.setConquistas(jogos[state.ky].conquistas);
    contexto.setProgresso(jogos[state.ky].progresso);
    contexto.setLogo(jogos[state.ky].logo);
    contexto.setFundo(jogos[state.ky].fundo);
  }, [state.ky]);

  return (
    <Box
      as="div"
      style={{
        height: "5rem",
        padding: "8px 32px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        transition: "1s",
        transform: `translateX(calc(${state.mov.pixels}px - ${state.mov.rem}rem))`,
      }}
    >
      {jogos.map((item) => {
        if (jogos.indexOf(item) === state.ky) {
          return (
            <Box
              key={item.id}
              as="div"
              style={{
                ...estiloSelecionado,
                backgroundImage: `url(${item.imagem})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            >
              <Text
                as="p"
                style={{
                  fontSize: "1.5rem",
                  color: "white",
                  position: "absolute",
                  bottom: "-20%",
                  left: "110%",
                  width: "300px",
                  textShadow: "black 2px 2px 20px"
                }}
              >
                {item.nome}
              </Text>
            </Box>
          );
        } else {
          return (
            <Box
              key={item.id}
              as="div"
              style={{
                ...estiloNaoSelecionado,
                backgroundImage: `url(${item.imagem})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center center",
              }}
            ></Box>
          );
        }
      })}
    </Box>
  );
}
