import React from 'react';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <img src="https://avatars.githubusercontent.com/u/43936624?v=4" alt="Murilo Krugner" />
      <h1>Murilo Krugner</h1>
    </Container>
  );
}

export default Header;