import { shade } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  @media(max-width: 800px){
    height: 92vh;
  }

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
      color: ${props => props.theme.colors.primary};
    }

    @media(max-width: 800px){
      display: none;
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

      h2 {
        font-size: 24px;
        margin: 64px 0 24px;
        font-family: 'Poppins', sans-serif;
      }

      form {
        input {
          height: 50px;
          border-radius: 8px;
          padding: 0 16px;
          background: ${props => props.theme.colors.white};
          border: 1px solid ${props => props.theme.colors.primary};
          color: ${props => props.theme.colors.text};

          background-color: ${props => props.theme.title === 'light' ?
    props.theme.colors.white : shade(.05, props.theme.colors.primary) };

          ::placeholder {
            color: ${props => shade(0.2, props.theme.colors.primary)};
          }
        }

        button { 
          margin-top: 16px;
        }

        button, input {
          width: 100%;
        }

      }

      p{
        font-size: 14px;
        color: ${props => props.theme.colors.primary};
        margin-top: 16px;
      }

      a {
        color: ${props => props.theme.colors.secundary};
      }

      .separator { 
        font-size: 14px;
        color: ${props => props.theme.colors.primary};

        margin: 32px 0;
        display: flex;
        align-items: center;

        &::before {
          content: '';
          flex: 1;
          height: 1px;
          background-color: ${props => props.theme.colors.primary};
          margin-right: 16px;
        }
        &::after {
          content: '';
          flex: 1;
          height: 1px;
          background-color: ${props => props.theme.colors.primary};
          margin-left: 16px;
        }
      }
  }
`;