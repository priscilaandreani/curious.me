import styled from 'styled-components';

export const RoomCodeStyled = styled.button`
  display: flex;

  overflow: hidden;
  height: 40px;
  border-radius: 8px;

  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 100%;

    padding: 0 12px;
    background-color: ${(props) => props.theme.colors.primary};
  }

  span {
    flex: 1;
    display: block;
    align-self: center;

    width: 230px;
    padding: 0 16px 0 12px;

    font-size: 14px;
    font-weight: 500;
  }
`;
