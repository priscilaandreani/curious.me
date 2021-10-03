import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;

      regular: string,
      darker: string,
      lighter: string,
      gray: string,

      white: string;

      background: string;
      text: string;
    }
  }
}