import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

import { Container, Content } from './styles';

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo />
        <Navigation />
      </Content>
    </Container>
  );
};

export default Header;
