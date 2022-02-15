import React, { useEffect, useState } from "react";
import { Box } from "../../styled.components/styles";
import imagemJogo from "../../assets/imagens.jogos/img-jogo1.jpg";

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
    capa_url: "../../assets/capa.jogos/capa-jogo1.png",
    imagem: imagemJogo,
  },
  {
    id: 2,
    nome: "Call of duty warzone2",
    descricao: "Descricao 2",
    capa_url: "../../assets/capa.jogos/capa-jogo1.png",
    imagem: imagemJogo,
  },
  {
    id: 3,
    nome: "Call of duty warzone2",
    descricao: "Descricao 3",
    capa_url: "../../assets/capa.jogos/capa-jogo1.png",
    imagem: imagemJogo,
  },
];

export default function Lista() {
  const [keySelecionado, setKeySelecionado] = useState(0);
  const [sentido, setSentido] = useState();
  const [jogos, setJogos] = useState(dados_jogos);

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      const tecla = event.key;

      if (tecla === "a") {
        setKeySelecionado(key => key - 1);
        setSentido("+");
      }
      if (tecla === "d") {
        setKeySelecionado( key => key + 1);
        setSentido("-");
      }
    });
  }, []);

  return (
    <Box
      as="div"
      style={{
        height: "5rem",
        padding: "8px 32px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        transition : "1s",
        transform: `translateX(calc(${sentido}4px ${sentido} 5rem))`
      }}
    >
      {jogos.map((item) => {
        if (jogos.indexOf(item) === keySelecionado) {
          return (
            <Box
              key={item.id}
              as="div"
              style={{
                ...estiloSelecionado,
                backgroundImage: `url(${item.imagem})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></Box>
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
              }}
            ></Box>
          );
        }
      })}
    </Box>
  );
}
