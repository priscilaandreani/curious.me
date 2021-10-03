import { DefaultTheme, ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import usePersistedState from "./utils/hooks/usePersistedState";

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
      <Header toggleTheme={toggleTheme}/>
    <Home />
    </ThemeProvider>
  );
}

export default App;
