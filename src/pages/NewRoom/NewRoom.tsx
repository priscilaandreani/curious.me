import illustrationSvg from '../../assets/images/illustration.svg';
import logo from '../../assets/images/logo.svg'
import { Container } from './NewRoom.style';
import { Button } from '../../components/Button/Button';
import { Link } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { database } from '../../service/firebase';
import { useAuth } from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';



export function NewRoom(){
  const [newRoom, setNewRoom] = useState('');
  const history = useHistory();
  const {user} = useAuth();

  async function handleCreateRoom(event: FormEvent){
    event.preventDefault();

    if(newRoom.trim() === ''){
      return;
    }

    const roomRef = database.ref('rooms');
    const databaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id

    });

    history.push(`/rooms/${databaseRoom.key}`)
  }

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
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(event)=> setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button>Entrar na sala</Button>
          </form>
          <p>Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link></p>
        </div>
      </main>
    </Container>
  )
}