import React, { useEffect } from 'react';
import { useRef } from 'react';
import {
  Background,
  Container,
  Content,
  CRPText,
  MemberName,
  ProfileImage,
  SmallTitle,
  Spacer,
  Text,
} from './styles';

const MemberProfile = ({
  data = {
    name: '',
    crp: '',
    gender: '',
    approach: '',
    profileImage: '',
    description: '',
    educationItems: [],
  },
  visible = true,
  onDismiss = () => {},
}) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        onDismiss();
      }
    };

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
      return;
    }

    document.removeEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [wrapperRef, visible, onDismiss]);

  return (
    <Background visible={visible}>
      <Container ref={wrapperRef}>
        <ProfileImage src={data.profileImage} />

        <Content>
          <MemberName>{data.name}</MemberName>
          <Spacer verticalSpacing={5} />
          <CRPText>
            Psicólog{data.gender === 'male' ? 'o' : 'a'} - CRP {data.crp}
          </CRPText>

          <Spacer verticalSpacing={60} />

          <Text>{data.description}</Text>

          <Spacer verticalSpacing={25} />

          <SmallTitle>Formação</SmallTitle>
          {data.educationItems &&
            data.educationItems.map((item, index) => (
              <React.Fragment key={index}>
                <Spacer verticalSpacing={5} />
                <Text>{'• ' + item}</Text>
              </React.Fragment>
            ))}
        </Content>
      </Container>
    </Background>
  );
};

export default MemberProfile;
