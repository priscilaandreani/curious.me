import { PageContent, PageRoom, QuestionList } from "../Room/Room.style";
import logoImg from '../../assets/images/logo.svg';
import { Button, Question, RoomCode } from '../../components/';
import { useParams } from "react-router";
import { useRoom } from "../../hooks/useRoom";

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

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