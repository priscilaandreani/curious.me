import { PageContent, PageRoom, QuestionList } from "../Room/Room.style";
import logoImg from '../../assets/images/logo.svg';
import { Button, Question, RoomCode } from '../../components/';
import { useParams } from "react-router";
import { FormEvent, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { database } from "../../service/firebase";
import { useRoom } from "../../hooks/useRoom";

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const { user } = useAuth();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);
  const [newQuestion, setNewQuestion] = useState('');

  async function handleSendQuestion(event: FormEvent) {
    event.preventDefault();
    if (newQuestion.trim() === '') {
      return;
    }

    //TODO: add react-hot-toast to treat errors
    if (!user) {
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
        <div>
            <RoomCode code={roomId} />
            <Button isOutlined>Encerrar sala</Button>
        </div>
        </div>
      </header>
      <PageContent>
        <div className="room-title">
          <h1>{title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <QuestionList>
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              />
            )
          })}
        </QuestionList>
      </PageContent>
    </PageRoom>

  )
};

//TODO: learn about reconciliation (map and keys)
//https://reactjs.org/docs/reconciliation.html