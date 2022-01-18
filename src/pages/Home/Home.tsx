import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { database } from '../../service/firebase';
import { Button, ModalComponent } from '../../components';
import { ButtonCreateRoom, Container } from './Home.style';
import sadEmoji from '../../assets/images/sad.svg';
import girlLaptop from '../../assets/images/girl-and-laptop.png';
import logo from '../../assets/images/logo.svg';
import googleIconImg from '../../assets/images/google-icon.svg';

export function Home() {
  const { signInWithGoogle, user } = useAuth();
  const history = useHistory();
  const [room, changeRoom] = useState('');
  const [endedRoom, setEndedRoom] = useState(false);
  const [roomDoesNotExist, setRoomDoesNotExist] = useState(false);

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
      setRoomDoesNotExist(true);
      return;
    }

    if (roomRef.val().endedAt) {
      setEndedRoom(true);
      return;
    }

    if (user?.id === roomRef.val().authorId) {
      history.push(`admin/rooms/${room}`);
      return;
    }

    history.push(`rooms/${room}`);
  }

  return (
    <>
      <ModalComponent
        isOpen={endedRoom}
        onRequestClose={() => setEndedRoom(false)}
      >
        <section>
          <img src={sadEmoji} alt="carinha triste" />
          <h2>Essa sala já acabou</h2>
          <Button onClick={handleCreateRoom}>Criar nova sala</Button>
        </section>
      </ModalComponent>
      <ModalComponent
        isOpen={roomDoesNotExist}
        onRequestClose={() => setRoomDoesNotExist(false)}
      >
        <section>
          <img src={sadEmoji} alt="carinha triste" />
          <h2>Ops! Essa sala não existe.</h2>
        </section>
      </ModalComponent>
      <Container id="home-container">
        <aside>
          <img
            src={girlLaptop}
            alt="Ilustração 3d de uma garota sentada em uma poltrona com um laptop no colo, ao seu lado um foguete decolando"
          />
          <strong>
            Não fique mais na dúvida.
            <br /> Seja curioso!
          </strong>
          <p>Compartilhe conhecimento com salas de Q&amp;A</p>
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
    </>
  );
}
