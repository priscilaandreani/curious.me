import illustrationSvg from '../../assets/images/illustration.svg';
import logo from '../../assets/images/logo.svg'
import { Container } from './NewRoom.style';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';



export function NewRoom(){

  // const {user} = useAuth();

  return(
    <Container>
      <aside>
        <img src={illustrationSvg} alt="ilustração de troca de conhecimento" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas do seu público em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="ask me" />
          <h2>Criar uma nova sala</h2>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />
            <Button>Entrar na sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </Container>
  )
}