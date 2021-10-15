import illustrationSvg from '../../assets/images/illustration.svg';
import logo from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';
import { ButtonCreateRoom, Container } from './Home.style';
import { Button } from '../../components/Button/Button';
import { useHistory } from 'react-router';
import { useAuth } from '../../hooks/useAuth';
import { FormEvent, useState } from 'react';
import { database } from '../../service/firebase';

export function Home() {
  const { signInWithGoogle, user } = useAuth();
  const history = useHistory();
  const [room, changeRoom] = useState('');

  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent) {
    event.preventDefault();

    if (room.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${room}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    if (roomRef.val().endedAt) {
      //TODO: change default alert to modal
      alert('Room already closed.');
      return;
    }

    history.push(`rooms/${room}`);
  }

  return (
    <Container>
      <aside>
        <img src={illustrationSvg} alt="ilustração de troca de conhecimento" />
        <strong>Crie salas de Q&amp;A ao vivo</strong>
        <p>Tire as dúvidas do seu público em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="curious.me" />
          <ButtonCreateRoom onClick={handleCreateRoom}>
            <img src={googleIconImg} alt="Logo do Google" />
            Crie sua sala com o Google
          </ButtonCreateRoom>
          <div className="separator">ou entre em uma sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event) => changeRoom(event?.target.value)}
              value={room}
            />
            <Button>Entrar na sala</Button>
          </form>
        </div>
      </main>
    </Container>
  );
}
