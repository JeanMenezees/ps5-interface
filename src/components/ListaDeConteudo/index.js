import React, { useContext, useEffect, useState } from "react";
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
    capa_url: 1,
    imagem: imagemJogo,
    conquistas: "2/10",
    progresso: "70%",
  },
  {
    id: 2,
    nome: "Resident Evil Village",
    descricao: "Descricao 2",
    capa_url: 2,
    imagem: imagemJogo2,
    conquistas: "3/10",
    progresso: "45%",
  },
  {
    id: 3,
    nome: "FIFA22",
    descricao: "Descricao 3",
    capa_url: 3,
    imagem: imagemJogo3,
    conquistas: "4/10",
    progresso: "30%",
  },
];

export default function Lista() {
  const [keySelecionado, setKeySelecionado] = useState(0);
  const [movimento, setMovimento] = useState({ pixels: 0, rem: 0 });
  const [jogos, setJogos] = useState(dados_jogos);

  const contexto = useContext(contextoJogo);

  useEffect(() => {
    document.addEventListener("keypress", (event) => {
      const tecla = event.key;

      if (tecla === "a") {
        setKeySelecionado((key) => {
          if (key - 1 < 0) {
            return key;
          } else {
            return key - 1;
          }
        });
        // Setando movimento
        setMovimento((ultimoMovimento) => {
          return {
            pixels: ultimoMovimento.pixels - 4,
            rem: ultimoMovimento.rem - 5,
          };
        });
      }
      if (tecla === "d") {
        setKeySelecionado((key) => {
          if (key + 1 > 2) {
            return key;
          } else {
           return key + 1;
          }
        });
        // Setando movimento
        setMovimento((ultimoMovimento) => {
          return {
            pixels: ultimoMovimento.pixels + 4,
            rem: ultimoMovimento.rem + 5,
          };
        });
      }
    });
  }, []);

  useEffect(() => {
    console.log(movimento);
  }, [movimento]);

  // Toda vez que muda o jogo selecionado, as informaçoes enviadas para os detalhes mudam
  useEffect(() => {
    contexto.setNomeJogo(jogos[keySelecionado].nome);
    contexto.setDescJogo(jogos[keySelecionado].descricao);
    contexto.setConquistas(jogos[keySelecionado].conquistas);
    contexto.setProgresso(jogos[keySelecionado].progresso);
  }, [keySelecionado]);

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
        transform: `translateX(calc(${movimento.pixels}px - ${movimento.rem}rem))`,
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
                backgroundPosition: "center center",
              }}
            >
              <Text
                as="p"
                style={{
                  fontSize: "1.2rem",
                  color: "white",
                  fontWeight: "bold",
                  position: "absolute",
                  bottom: "-15%",
                  left: "110%",
                  width: "300px",
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
