import illustrationSvg from '../../assets/images/illustration.svg';
import logo from '../../assets/images/logo.svg'
import googleIconImg from '../../assets/images/google-icon.svg'

export function Home(){
  return(
    <div>
      <aside>
        <img src={illustrationSvg} alt="ilustração de troca de conhecimento" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas do seu público em tempo real</p>
      </aside>
      <main>
        <div>
          <img src={logo} alt="ask me" />
          <button className="create-room">
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em uma sala</div>
          <form>
            <input
              type="text"
              placeholder="Digite o código da sala"
            />

          </form>
        </div>
      </main>
    </div>
  )
}