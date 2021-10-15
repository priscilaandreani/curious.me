import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    box-sizing: border-box;
    outline: 0;
    padding: 0;
    font-family: 'Mulish', sans-serif;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};

    font-smooth: always;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  body html #root {
    height: 100%;
    line-height: 1.5;
    text-size-adjust: 100%;
  }
`;
