import React, { useCallback, useState, useEffect } from 'react';

import Header from '../../components/Header';
import MainLogoButton from '../../components/MainLogoButton';
import SmallLogoButton from '../../components/SmallLogoButton';
import Members from './Members';
import MemberProfile from './MemberProfile';
import { Container, MainLogoButtonContainer, Content } from './styles';
import WhoWeAre from './WhoWeAre';
import { getMembers } from '../../services/getMembers';

const Home = () => {
  const [membersData, setMembersData] = useState([]);
  const [mainLogoButtonVisible, setMainLogoButtonVisible] = useState(true);
  // const [contentUnlocked, setContentUnlocked] = useState(false);
  const [selectedMemberData, setSelectedMemberData] = useState({});
  const [memberProfileVisible, setMemberProfileVisible] = useState(false);

  useEffect(() => {
    setMembersData(getMembers());
  }, []);

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
          onClick={() => {}}
          onClickFinishAnimation={() => setMainLogoButtonVisible(false)}
          unlockDelay={400000}
        />
      </MainLogoButtonContainer>

      {!mainLogoButtonVisible && <SmallLogoButton posBottom={15} posRight={15} />}

      <Content>
        <WhoWeAre />
        <Members data={membersData} onClickMember={handleClickMember} />
      </Content>

      <MemberProfile
        data={selectedMemberData}
        visible={memberProfileVisible}
        onDismiss={handleDismissMemberProfile}
      />
    </Container>
  );
};

export default Home;
