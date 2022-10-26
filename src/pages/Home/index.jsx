import React from 'react';

import Header from '../../components/Header';
// import WhoWeAre from './WhoWeAre';
import { Container } from './styles';
import MainLogoButton from '../../components/MainLogoButton';

const Home = () => {
  return (
    <Container>
      <Header />

      <MainLogoButton onClickFinishAnimation={() => console.log('Cogniful')} />
    </Container>
  );
};

export default Home;
