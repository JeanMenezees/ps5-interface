import Header from "./components/Header";
import Lista from "./components/ListaDeConteudo";
import Detalhes from "./components/Detalhes";
import { Box } from "./styled.components/styles";
import backGround from "./assets/fundo.jpg";
import ContextoJogo from "./contexts/contextoJogo";
import { useState } from "react/cjs/react.development";

function App() {
  const [nomeJogo, setNomeJogo] = useState("Nome do jogo");
  const [descJogo, setDescJogo] = useState("Descrição do jogo");
  const [conquistas, setConquistas] = useState("0/10");
  const [progresso, setProgresso] = useState("50%");

  return (
    <Box
      as="div"
      style={{
        width: "100vw",
        height: "100vh",
        margin: "0",
        backgroundImage: `url(${backGround})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        overflow: "hidden",
      }}
    >
      <ContextoJogo.Provider
        value={{
          nomeJogo: nomeJogo,
          descJogo: descJogo,
          conquistasJogo: conquistas,
          progressoJogo: progresso,
          setNomeJogo: setNomeJogo,
          setDescJogo: setDescJogo,
          setConquistas: setConquistas,
          setProgresso: setProgresso,
        }}
      >
        {/* // Header da interface */}
        <Header />
        {/* // Lista de jogos/midia */}
        <Lista />
        {/* // Detalhes do jogo */}
        <Detalhes
          infos={{
            nome: nomeJogo,
            desc: descJogo,
            conquistas: conquistas,
            progresso: progresso,
          }}
        />
      </ContextoJogo.Provider>
    </Box>
  );
}

export default App;
