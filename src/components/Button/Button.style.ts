import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  padding: 0 32px;

  background-color: ${props => props.theme.title === 'light' ?
    props.theme.colors.background :  props.theme.colors.background};
  color:  ${props => props.theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.background};

  transition: filter 0.2s;

  &:not(:disabled):hover{
    border: 1px solid ${props => props.theme.colors.primary};
    filter: brightness(0.95);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;