import React from "react";
import { Box, Button } from "../../styled.components/styles";
import iconeConfig from "../../assets/configs.svg";
import iconeProcurar from "../../assets/procurar.svg";

export default function Header() {
  return (
    <Box
      as="div"
      style={{
        backgroundColor: "transparent",
        padding: "32px",
        color: "black",
        fontWeigth: "bold",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Navegacao de jogos ou mídia */}
      <Box
        as="nav"
        style={{
          backgroundColor: "transparent",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          style={{
            backgroundColor: "transparent",
            border: "0",
            padding: "16px",
            fontSize: "1.7rem",
            fontWeight: "bold",
            color: "white",
            margin: "0 16px"
          }}
        >
          Jogos
        </Button>
        <Button
          style={{
            backgroundColor: "transparent",
            border: "0",
            padding: "16px",
            fontWeight: "bold",
            fontSize: "1.7rem",
            color: "white",
          }}
        >
          Mídia
        </Button>
      </Box>
      {/* Navegacao de jogos ou mídia */}

      {/* Navegacao de icones com o horário */}
      <Box
        as="div"
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Box
          as="nav"
          style={{
            backgroundColor: "transparent",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Button
            style={{
              backgroundColor: "transparent",
              backgroundImage: `url(${iconeProcurar})`,
              backgroundSize: "cover",
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              margin: "0 4px",
              border: "0",
              transform: "scale(0.7)"
            }}
          >
          </Button>
          <Button
            style={{
              backgroundColor: "transparent",
              backgroundImage: `url(${iconeConfig})`,
              backgroundSize: "cover",
              height: "50px",
              width: "50px",
              borderRadius: "50%",
              margin: "0 4px",
              border: "0",
              transform: "scale(0.7)"
            }}
          >
          </Button>
          <Box
            as="div"
            style={{
              backgroundColor: "transparent",
              backgroundImage: "url(https://github.com/JeanMenezees.png)",
              backgroundSize: "cover",
              height: "35px",
              width: "35px",
              borderRadius: "50%",
              margin: "0 4px"
            }}
          ></Box>
        </Box>
        <Box
          as="div"
          style={{
            textAlign: "center",
            fontSize: "1.9rem",
            color: "white"
          }}
        >
          {/* Aqui vem o datetime now */}
          11:06 AM
        </Box>
      </Box>
      {/* Navegacao de icones com o horário */}
    </Box>
  );
}
