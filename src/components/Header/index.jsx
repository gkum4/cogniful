import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

import { Container } from './styles';

const Header = () => {
  return (
    <Container>
      <Logo />
      <Navigation />
    </Container>
  );
};

export default Header;
