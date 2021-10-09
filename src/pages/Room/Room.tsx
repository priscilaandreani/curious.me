import { PageContent, PageRoom } from "./Room.style";
import logoImg from '../../assets/images/logo.svg';
import { Button, RoomCode } from '../../components/';
import { useParams } from "react-router";
import { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../service/firebase";

type RoomParams = {
  id: string;
}

export function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');

  async function handleSendQuestion(event: FormEvent){
    event.preventDefault();
    if(newQuestion.trim() === '') {
      return;
    }

    //TODO: add react-hot-toast to treat errors
    if(!user){
      throw new Error('You must be logged in')
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
     }

    await database.ref(`rooms/${roomId}/questions`).push(question);
    setNewQuestion('');
  }

  return (
    <PageRoom id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="ask me" />
          <RoomCode code={roomId}/>
        </div>
      </header>
      <PageContent>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form onSubmit={handleSendQuestion}>
          <textarea 
            placeholder="As perguntas é que mudam o mundo." 
            onChange={event => setNewQuestion(event.target.value)}
            value={newQuestion}
            />

            <div className="form-footer">
              {user ? (
                <div className="user-info">
                  <img src={user.avatar} alt={user.name} />
                  <span>{user.name}</span>
                </div>
              ) :
              (
                <span>
                 Para enviar uma pergunta, <button>faça seu login</button>
                </span>)}
              <Button type="submit" disabled={!user}>Enviar</Button>
            </div>
        </form>
      </PageContent>
    </PageRoom>

    )
};