import { DefaultTheme, ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import { Home } from "./pages/Home/Home";
import usePersistedState from "./utils/hooks/usePersistedState";

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';
import { NewRoom } from "./pages/NewRoom/NewRoom";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { AuthContextProvider } from "./contexts/AuthContext";
import { Room } from "./pages/Room/Room";

function App() {

  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <BrowserRouter>
          <Switch>
            <AuthContextProvider>
              <Route exact path="/" component={Home} />
              <Route path="/rooms/new" component={NewRoom} />
            </AuthContextProvider>
          </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
