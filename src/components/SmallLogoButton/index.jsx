import React from 'react';
import LogoImg from '../../assets/cogniful-logo.png';
import { Container, Logo } from './styles';

const SmallLogoButton = ({ posTop, posBottom, posLeft, posRight, ...rest }) => {
  return (
    <Container
      posTop={posTop}
      posBottom={posBottom}
      posLeft={posLeft}
      posRight={posRight}
      {...rest}
    >
      <Logo src={LogoImg} />
    </Container>
  );
};

export default SmallLogoButton;
