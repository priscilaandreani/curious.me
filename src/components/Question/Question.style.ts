import styled from 'styled-components';

export const QuestionStyled = styled.div`
  padding: 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);

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

  div {
    display: flex;
    gap: 16px;
  }

  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.colors.gray50};
    transition: all 0.2s;

    &.like-button {
      display: flex;
      align-items: flex-end;
      color: ${(props) => props.theme.colors.gray50};
      gap: 8px;

      &.liked {
        color: ${(props) => props.theme.colors.regularHover};

        svg path {
          stroke-width: 1;
          stroke: ${(props) => props.theme.colors.white};
          fill: ${(props) => props.theme.colors.regularHover};
        }
      }

      &:hover {
        svg path {
          stroke-width: 1;
          stroke: ${(props) => props.theme.colors.white};
          fill: ${(props) => props.theme.colors.regularHover};
        }
      }
    }

    &.trash-button:hover {
      svg path {
        stroke: ${(props) => props.theme.colors.dangerHover};
      }
    }
    &.check-button:hover {
      svg path,
      circle {
        stroke: ${(props) => props.theme.colors.regularHover};
      }
    }
    &.highlight-button:hover {
      svg path {
        stroke: ${(props) => props.theme.colors.highlight};
      }
    }
  }

  &.highlighted {
    background: ${(props) => props.theme.colors.highlightLight};

    p {
      color: ${(props) => props.theme.colors.highlight};
    }

    .like-button {
      svg path {
        stroke: ${(props) => props.theme.colors.highlight};
      }

      &.liked {
        color: ${(props) => props.theme.colors.highlight};
        svg path {
          stroke-width: 1;
          stroke: ${(props) => props.theme.colors.highlightLight};
          fill: ${(props) => props.theme.colors.highlight};
        }
      }
    }

    &.like-button:hover {
      svg path {
        stroke-width: 1;
        stroke: ${(props) => props.theme.colors.highlightLight};
        fill: ${(props) => props.theme.colors.highlight};
      }
    }
  }

  &.answered {
    background: ${(props) => props.theme.colors.regular};

    p {
      color: ${(props) => props.theme.colors.regularHover};
    }
  }
`;
