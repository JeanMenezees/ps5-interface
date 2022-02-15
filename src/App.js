import Header from "./components/Header";
import Lista from "./components/ListaDeConteudo";
import Detalhes from "./components/Detalhes";
import { Box } from "./styled.components/styles";
import backGround from "./assets/fundo.jpg"


function App() {
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
        overflow: "hidden"
      }}
    >
      {/* // Header da interface */}
      <Header />
      {/* // Lista de jogos/midia */}
      <Lista />
      {/* // Detalhes do jogo */}
      <Detalhes />
    </Box>
  );
}

export default App;
