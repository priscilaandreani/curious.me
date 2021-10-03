import illustrationSvg from '../../assets/images/illustration.svg';
import logo from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'
import { ButtonCreateRoom, Container } from './Home.style';


export function Home(){
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
          <ButtonCreateRoom>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </ButtonCreateRoom>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />

          </form>
        </div>
      </main>
    </Container>
  )
}