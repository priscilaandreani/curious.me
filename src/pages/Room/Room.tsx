import { PageContent, PageRoom } from "./Room.style";
import logoImg from '../../assets/images/logo.svg';
import { Button, RoomCode } from '../../components/';
import { useParams } from "react-router";

type RoomParams = {
  id: string;
}

export function Room() {
  const { id } = useParams<RoomParams>();

  return (
    <PageRoom id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="ask me" />
          <RoomCode code={id}/>
        </div>
      </header>
      <PageContent>
        <div className="room-title">
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </div>

        <form>
          <textarea 
            placeholder="As perguntas é que mudam o mundo." />

            <div className="form-footer">
              <span>Para enviar uma pergunta, <button>faça seu login</button></span>
              <Button type="submit">Enviar</Button>
            </div>
        </form>
      </PageContent>
    </PageRoom>

    )
};