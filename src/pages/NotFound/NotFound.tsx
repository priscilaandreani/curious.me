import React from 'react';

import { Container } from './NotFound.style';
import Plug from '../../assets/images/plug.png';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Container>
      <img src={Plug} alt="Plug de tomada desconectado" />

      <div className="info">
        <h1>
          Ops.. <br></br> Não há nada por aqui
        </h1>
        <Link to={'/'}>Voltar para home</Link>
      </div>
    </Container>
  );
};

export { NotFound };
