import React, { useState } from "react";
import { Box, Text, Button } from "../../styled.components/styles";
import iconeTrofeu from "../../assets/trofeu.svg";
import capaJogo from "../../assets/capa.jogos/jogo1-logo.png";
import capaJogo2 from "../../assets/capa.jogos/jogo2-logo.png";
import capaJogo3 from "../../assets/capa.jogos/jogo3-logo.png";
import { useEffect } from "react/cjs/react.development";

export default function Detalhes(props) {

  const [numLogo, setNumLogo] = useState(capaJogo);

  useEffect(() => {
    if(props.infos.logo === 1){
      setNumLogo(capaJogo)
    }
    if(props.infos.logo === 2){
      setNumLogo(capaJogo2)
    }
    if(props.infos.logo === 3){
      setNumLogo(capaJogo3)
    }
  }, [props.infos.logo])

  return (
    <Box
      as="div"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        width: "80%",
        position: "fixed",
        bottom: "15%",
        margin: "0 10%"
      }}
    >
      <Box
        as="div"
        style={{
          diplay: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
        }}
      >
        <Box
          as="div"
          style={{
            backgroundImage: `url(${numLogo})`,
            width: "100%",
            height: "150px",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat"
          }}
        >
        </Box>
        <Box
          as="div"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "left",
            justifyContent: "center",
          }}
        >
          <Text
            as="h1"
            style={{
              fontSize: "2rem",
              color: "white",
              width: "60%",
              textAlign: "left",
            }}
          >
            {props.infos.nome}
          </Text>
          <Box
            as="div"
            style={{
              width: "60%",
              minWidth: "300px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                width: "50%",
                minWidth: "150px",
                marginRight: "8px",
                borderRadius: "40px",
                backgroundColor: "rgba(31,31,45,0.7)",
                color: "white",
                textAlign: "center",
                padding: "16px",
                fontWeight: "bold",
                fontSize: "1.2rem",
                border: "0",
              }}
            >
              Jogar
            </Button>
            <Button
              style={{
                borderRadius: "100%",
                backgroundColor: "rgba(31,31,45,0.7)",
                color: "white",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                fontWeight: "bold",
                border: "0",
              }}
            >
              . . .
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        as="div"
        style={{
          width: "15%",
          minWidth: "200px", 
          height: "70px",
          backgroundColor: "rgba(0,0,0,0.7)",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "8px" 
        }}
      >
        <Box
          as="div"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: "90%",
          }}
        >
          <Box
            as="div"
            style={{
              backgroundSize: "cover",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              backgroundImage: `url(${iconeTrofeu})`,
              transform: "scale(0.7)"
            }}
          >

          </Box>
          <Box
            as="div"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: "0.9rem",
                color: "gray",
                margin: "0"
              }}
            >
                Progresso
            </Text>
            <Text
              style={{
                fontSize: "1.2rem",
                color: "white",
                margin: "0"
              }}
            >
                {props.infos.progresso}
            </Text>
          </Box>
        </Box>
        <Box
            as="div"
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "center",
                height: "90%"
            }}
        >
            <Box
            as="div"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "left",
              justifyContent: "center",
              padding: "16px"
            }}
          >
            <Text
              style={{
                fontSize: "0.9rem",
                color: "gray",
                margin: "0"
              }}
            >
                Ganho
            </Text>
            <Text
              style={{
                fontSize: "1.2rem",
                color: "white",
                margin: "0"
              }}
            >
                {props.infos.conquistas}
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}