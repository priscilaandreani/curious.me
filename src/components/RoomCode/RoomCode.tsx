import { useCallback } from 'react';
import copyImg from '../../assets/images/copy.svg';
import { RoomCodeStyled } from './RoomCode.style';

type RoomCodeProps = {
  code: string;
};

export function RoomCode({ code }: RoomCodeProps) {
  const copyToClipboard = useCallback(
    (event) => {
      navigator.clipboard.writeText(code);

      const select = document.querySelector('.select');
      select?.classList.add('clicked');
      setTimeout(() => {
        select?.classList.remove('clicked');
      }, 150);
    },
    [code]
  );

  return (
    <RoomCodeStyled onClick={copyToClipboard} aria-label="Clique para copiar">
      <div className="select">
        <img src={copyImg} alt="Copiar" />
      </div>
      <span>{code}</span>
    </RoomCodeStyled>
  );
}
