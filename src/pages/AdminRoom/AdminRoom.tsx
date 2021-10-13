import { PageContent, PageRoom, QuestionList } from '../Room/Room.style';
import logoImg from '../../assets/images/logo.svg';
import deleteImg from '../../assets/images/delete.svg';
import { Button, Question, RoomCode } from '../../components/';
import { useHistory, useParams } from 'react-router';
import { useRoom } from '../../hooks/useRoom';
import { database } from '../../service/firebase';

type RoomParams = {
  id: string;
};

export function AdminRoom() {
  const history = useHistory();
  const params = useParams<RoomParams>();
  const roomId = params.id;
  const { questions, title } = useRoom(roomId);

  async function handleEndRoom() {
    database.ref(`rooms/${roomId}`).update({
      endedAt: new Date(),
    });

    history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
    //TODO: change native modal confirm to react-modal
    //https://github.com/reactjs/react-modal
    if (window.confirm('Tem certeza que deseja excluir esta pergunta?')) {
      const questionRef = await database
        .ref(`rooms/${roomId}/questions/${questionId}`)
        .remove();
    }
  }

  return (
    <PageRoom id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="ask me" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>
              Encerrar sala
            </Button>
          </div>
        </div>
      </header>
      <PageContent>
        <div className="room-title">
          <h1>{title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <QuestionList>
          {questions.map((question) => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
              >
                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}
                >
                  <img src={deleteImg} alt="Remover pergunta" />
                </button>
              </Question>
            );
          })}
        </QuestionList>
      </PageContent>
    </PageRoom>
  );
}

//TODO: learn about reconciliation (map and keys)
//https://reactjs.org/docs/reconciliation.html
