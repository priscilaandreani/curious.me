import { QuestionStyled } from "./Question.style";

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  }
 }

export function Question({content, author}: QuestionProps) {
  return(
    <QuestionStyled>
      <p>{content}</p>

      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
        </div>
        <div></div>
      </footer>
    </QuestionStyled>
  );
}

