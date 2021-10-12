import { useCallback } from 'react';
import copyImg from '../../assets/images/copy.svg';
import { RoomCodeStyled } from './RoomCode.style';

type RoomCodeProps = { 
  code: string;
}

export function RoomCode({ code }: RoomCodeProps){

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(code);
  }, [code])

  return(
    <RoomCodeStyled onClick={copyToClipboard}>
      <div>
        <img src={copyImg} alt="Copiar" />
      </div>
      <span>{code}</span>
    </RoomCodeStyled>
  )
}