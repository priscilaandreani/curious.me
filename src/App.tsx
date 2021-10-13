import { DefaultTheme, ThemeProvider } from 'styled-components';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import usePersistedState from './utils/hooks/usePersistedState';
import { AdminRoom, Home, NewRoom, Room } from './pages';
import { Header } from './components';

import GlobalStyle from './styles/global';
import { dark, light } from './styles/themes';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <BrowserRouter>
        <Switch>
          <AuthContextProvider>
            <Route exact path="/" component={Home} />
            <Route path="/rooms/new" component={NewRoom} />
            <Route path="/rooms/:id" component={Room} />
            <Route path="/admin/rooms/:id" component={AdminRoom} />
          </AuthContextProvider>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
