import styled from 'styled-components';

export const QuestionStyled = styled.div`
  padding: 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0px 2px 2px ${(props) => props.theme.colors.regular};

  & + & {
    margin-top: 8px;
  }

  p {
    color: ${(props) => props.theme.colors.gray75};
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
  }

  .user-info {
    display: flex;
    align-items: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    > span {
      margin-left: 8px;
      color: ${(props) => props.theme.colors.text};
      font-size: 14px;
    }
  }
`;
