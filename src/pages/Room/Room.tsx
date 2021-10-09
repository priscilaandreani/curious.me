import { PageContent, PageRoom } from "./Room.style";
import logoImg from '../../assets/images/logo.svg';
import { Button, RoomCode } from '../../components/';
import { useParams } from "react-router";
import { FormEvent, useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../service/firebase";

type RoomParams = {
  id: string;
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string,
    avatar: string,
  },
  content: string,
  isAnswered: boolean,
  isHighlighted: boolean
}>

type Question = {
  id: string,
  author: {
    name: string,
    avatar: string,
  },
  content: string,
  isAnswered: boolean,
  isHighlighted: boolean
}

export function Room() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {

    // TODO: refactor event listener to optimize performance 
    const roomRef = database.ref(`rooms/${roomId}`);
    roomRef.on('value', room => {
      const databaseRoom = room.val();
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
          return {
            id: key,
            content: value.content,
            author: value.author,
            isHighlighted: value.isHighlighted,
            isAnswered: value.isAnswered
          }
      })

      setTitle(databaseRoom.title)
      setQuestions(parsedQuestions);
    })
  }, [roomId])


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
          <h1>{title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
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