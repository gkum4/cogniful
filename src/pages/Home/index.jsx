import React, { useCallback, useState } from 'react';

import Header from '../../components/Header';
import MainLogoButton from '../../components/MainLogoButton';
import SmallLogoButton from '../../components/SmallLogoButton';
import Members from './Members';
import MemberProfile from './MemberProfile';
import { Container, MainLogoButtonContainer, Content } from './styles';
import WhoWeAre from './WhoWeAre';

const membersMockData = [
  {
    name: 'Elisama',
    crp: '02/142439',
    approach: 'Terapia Cognitivo Comportamental',
    profileImage: require('../../assets/mock.jpg'),
    gender: 'female',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore e.. ',
    educationItems: ['Especialização TCC IPTC (2023)', 'Graduação Psicologia PUCPR (2019)'],
  },
  {
    name: 'Elisama',
    crp: '02/142439',
    approach: 'Terapia Cognitivo Comportamental',
    profileImage: require('../../assets/mock.jpg'),
    gender: 'female',
    description: '',
    educationItems: [],
  },
  {
    name: 'Elisama',
    crp: '02/142439',
    approach: 'Terapia Cognitivo Comportamental',
    profileImage: require('../../assets/mock.jpg'),
    gender: 'female',
    description: '',
    educationItems: [],
  },
];

const Home = () => {
  const [mainLogoButtonVisible, setMainLogoButtonVisible] = useState(true);
  const [contentUnlocked, setContentUnlocked] = useState(false);
  const [selectedMemberData, setSelectedMemberData] = useState({});
  const [memberProfileVisible, setMemberProfileVisible] = useState(false);

  const handleClickMember = useCallback(memberData => {
    setSelectedMemberData(memberData);
    setMemberProfileVisible(true);
  }, []);

  const handleDismissMemberProfile = useCallback(() => {
    setMemberProfileVisible(false);
  }, []);

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
          <Members data={membersMockData} onClickMember={handleClickMember} />
        </Content>
      )}

      <MemberProfile
        data={selectedMemberData}
        visible={memberProfileVisible}
        onDismiss={handleDismissMemberProfile}
      />
    </Container>
  );
};

export default Home;
