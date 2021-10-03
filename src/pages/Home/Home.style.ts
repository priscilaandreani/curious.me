import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside {
    color: ${props => props.theme.colors.white};

    flex: 7;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px 'Poppings', sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p { 
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: ${props => props.theme.colors.lighter};
    }

  }

  main {
    flex: 8;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 32px;
    border-radius: 32px 0 0 0;

    background-color: ${props => props.theme.colors.primary};
  }

  .main-content {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 320px;
      align-items: stretch;
      text-align: center;

      > img {
        align-self: center;
      }

      form {
        input {
          height: 50px;
          border-radius: 8px;
          padding: 0 16px;
          background: ${props => props.theme.colors.white};
          border: 1px solid ${props => props.theme.colors.gray};
        }

        button { 
          margin-top: 16px;
        }

        button, input {
          width: 100%;
        }
      }

      .separator { 
        font-size: 14px;
        color: ${props => props.theme.colors.lighter};

        margin: 32px 0;
        display: flex;
        align-items: center;

        &::before {
          content: '';
          flex: 1;
          height: 1px;
          background-color: ${props => props.theme.colors.lighter};
          margin-right: 16px;
        }
        &::after {
          content: '';
          flex: 1;
          height: 1px;
          background-color: ${props => props.theme.colors.lighter};
          margin-left: 16px;
        }
      }
  }
`;

export const ButtonCreateRoom = styled.button`
  margin-top: 64px;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  font-weight: 500;
  background: #ea4335;
  color: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  border: 0;
  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:hover {
    filter: brightness(0.9);
  }
`;