import { Container } from './Header.style';
import Switch from 'react-switch';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import logoImg from '../../assets/images/logo.svg';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <div>
        <a href="/">
          <img src={logoImg} alt="curious.me" />
        </a>
      </div>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        onColor={colors.gray25}
        offColor={colors.primary}
      />
    </Container>
  );
};

export { Header };
