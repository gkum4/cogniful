import React, { useState } from 'react';

import Header from '../../components/Header';
import MainLogoButton from '../../components/MainLogoButton';
import SmallLogoButton from '../../components/SmallLogoButton';
import Members from './Members';
import { Container, MainLogoButtonContainer, Content } from './styles';
import WhoWeAre from './WhoWeAre';

const membersMockData = [
  {
    name: 'Elisama',
    crp: '02/142439',
    approach: 'Terapia Cognitivo Comportamental',
  },
  {
    name: 'Elisama',
    crp: '02/142439',
    approach: 'Terapia Cognitivo Comportamental',
  },
  {
    name: 'Elisama',
    crp: '02/142439',
    approach: 'Terapia Cognitivo Comportamental',
  },
];

const Home = () => {
  const [mainLogoButtonVisible, setMainLogoButtonVisible] = useState(true);
  const [contentUnlocked, setContentUnlocked] = useState(false);

  return (
    <Container>
      <Header />

      <MainLogoButtonContainer shouldShrink={!mainLogoButtonVisible}>
        <MainLogoButton
          onClick={() => setContentUnlocked(true)}
          onClickFinishAnimation={() => setMainLogoButtonVisible(false)}
          unlockDelay={400000}
        />
      </MainLogoButtonContainer>

      {!mainLogoButtonVisible && <SmallLogoButton posBottom={15} posRight={15} />}

      {contentUnlocked && (
        <Content>
          <WhoWeAre />
          <Members data={membersMockData} />
        </Content>
      )}
    </Container>
  );
};

export default Home;
