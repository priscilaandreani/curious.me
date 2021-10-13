import { ReactNode } from 'react';
import { QuestionStyled } from './Question.style';

type QuestionProps = {
  content: string;
  author: {
    name: string;
    avatar: string;
  };
  children?: ReactNode;
};

export function Question({ content, author, children }: QuestionProps) {
  return (
    <QuestionStyled>
      <p>{content}</p>

      <footer>
        <div className="user-info">
          <img src={author.avatar} alt={author.name} />
        </div>
        <div>{children}</div>
      </footer>
    </QuestionStyled>
  );
}
