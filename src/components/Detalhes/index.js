import React from "react";
import { Box, Text, Button } from "../../styled.components/styles";
import iconeTrofeu from "../../assets/trofeu.svg";
import capaJogo from "../../assets/capa.jogos/jogo1-logo.png";

export default function Detalhes() {
  return (
    <Box
      as="div"
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between",
        width: "90%",
        position: "fixed",
        bottom: "96px",
        margin: "0 5%"
      }}
    >
      <Box
        as="div"
        style={{
          diplay: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "30%",
        }}
      >
        <Box
          as="div"
          style={{
            backgroundImage: `url(${capaJogo})`,
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
              fontSize: "1.2rem",
              color: "white",
              width: "60%",
              textAlign: "left",
            }}
          >
            Nome do jogo
          </Text>
          <Box
            as="div"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              style={{
                width: "80%",
                borderRadius: "20px",
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
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
                fontWeight: "bold",
                border: "0",
              }}
            >
              ...
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        as="div"
        style={{
          width: "20%",
          height: "70px",
          backgroundColor: "black",
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
                0%
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
                0/20
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}