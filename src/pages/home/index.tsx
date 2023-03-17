import userHomeViewModel from "./hooks/userHomeViewModel"
import { Container, Content } from "./styles";

function Home() {
  const { user, handleIputChange, gotoUserInfo } = userHomeViewModel();
  //view
  return (
    <Container>
      <h1>FIAP</h1>
      <h2>Educação que transforma!</h2>
      <h3>Bem vindo, {user !== "" ? user : "usuário"}</h3>
      <Content>
        <input
          placeholder="Digite seu usuário"

          onChange={handleIputChange}
        />
        <button onClick={gotoUserInfo}>Buscar</button>
      </Content>
    </Container>
  )
}



export { Home };