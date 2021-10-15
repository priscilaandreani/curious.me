import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      lightPrimary: string;
      primary: string;
      primaryHover: string;

      secundary: string;
      secundaryLight: string;

      danger: string;
      dangerHover: string;

      regular: string;
      regularHover: string;

      highlight: string;
      highlightLight: string;

      white: string;

      background: string;
      text: string;

      gray25: string;
      gray50: string;
      gray75: string;
    };
  }
}
