import girl from '../../assets/images/girl.png';
import logo from '../../assets/images/logo.svg';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { database } from '../../service/firebase';
import { useAuth } from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { Container } from '../Home/Home.style';

export function NewRoom() {
  const [newRoom, setNewRoom] = useState('');
  const history = useHistory();
  const { user } = useAuth();

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      return;
    }

    const roomRef = database.ref('rooms');
    const databaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${databaseRoom.key}`);
  }

  return (
    <Container>
      <aside>
        <img
          src={girl}
          alt="Ilustração 3d de uma garota voando em posição de super heróina"
          style={{ maxWidth: '550px' }}
        />
        <strong>
          Faça todas as perguntas
          <br /> Voe mais longe!
        </strong>
        <p>Compartilhe conhecimento com salas de Q&amp;A</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="curious.me" />
          <h2>Criar uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Digite o nome da sala"
              onChange={(event) => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button>Entrar na sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </Container>
  );
}
