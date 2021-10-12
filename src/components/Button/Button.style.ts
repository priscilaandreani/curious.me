import styled from 'styled-components';

export const ButtonContainer = styled.button`
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  padding: 0 32px;

  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 1px solid ${(props) => props.theme.colors.primary};

  transition: filter 0.2s;

  &.outlined {
    background-color: ${(props) => props.theme.colors.background};
    border: 1px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }

  &:not(:disabled):hover {
    border: 1px solid ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.primaryHover};
    color: ${(props) => props.theme.colors.lightPrimary};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
