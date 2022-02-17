import Header from "./components/Header";
import Lista from "./components/ListaDeConteudo";
import Detalhes from "./components/Detalhes";
import { Box } from "./styled.components/styles";
import backGround1 from "./assets/fundos/fundo1.jpg"
import backGround2 from "./assets/fundos/fundo2.jpg"
import backGround3 from "./assets/fundos/fundo3.jpg"
import ContextoJogo from "./contexts/contextoJogo";
import { useEffect, useState } from "react/cjs/react.development";

function App() {
  const [nomeJogo, setNomeJogo] = useState("Nome do jogo");
  const [descJogo, setDescJogo] = useState("Descrição do jogo");
  const [conquistas, setConquistas] = useState("0/10");
  const [progresso, setProgresso] = useState("50%");
  const [logo, setLogo] = useState(1);
  const [fundo, setFundo] = useState(0);
  const [fundoImg, setFundoImg] = useState(backGround1);

  useEffect(() => {
    if(fundo === 1){
      setFundoImg(backGround1);
    }
    if(fundo === 2){
      setFundoImg(backGround2);
    }
    if(fundo === 3){
      setFundoImg(backGround3);
    }
  }, [fundo])

  return (
    <Box
      as="div"
      style={{
        width: "100vw",
        height: "100vh",
        margin: "0",
        backgroundImage: `url(${fundoImg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        overflow: "hidden",
        transition: "background 1.5s linear"
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
          logo: logo,
          setLogo: setLogo,
          setFundo, setFundo
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
            logo: logo
          }}
        />
      </ContextoJogo.Provider>
    </Box>
  );
}

export default App;
