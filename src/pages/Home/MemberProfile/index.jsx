import React, { useEffect, useMemo } from 'react';
import { useRef } from 'react';
import LinksButtons from './LinksButtons';
import {
  Background,
  Container,
  ContentContainer,
  Content,
  CRPText,
  MemberName,
  ProfileImage,
  SmallTitle,
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
    links: [],
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

  const descriptionText = useMemo(() => {
    if (!data.description) {
      return null;
    }

    const descriptionArr = data.description.split('\n');

    console.log(descriptionArr);
    if (descriptionArr.length === 0) {
      return null;
    }

    return (
      <>
        {descriptionArr[0]}
        {descriptionArr.length > 1 &&
          descriptionArr.slice(1).map(paragraph => (
            <>
              <br />
              {paragraph}
            </>
          ))}
      </>
    );
  }, [data.description]);

  return (
    <Background visible={visible}>
      <Container ref={wrapperRef}>
        <ProfileImage src={data.profileImage} />

        <ContentContainer>
          <Content>
            <MemberName>{data.name}</MemberName>
            <CRPText>
              Psicólog{data.gender === 'male' ? 'o' : 'a'} - CRP {data.crp}
            </CRPText>

            <LinksButtons links={data.links} />

            <Text style={{ marginTop: 30 }}>{descriptionText}</Text>

            <SmallTitle>Formação</SmallTitle>
            <Text style={{ marginBottom: 25 }}>
              {data.educationItems &&
                data.educationItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <Text style={{ marginTop: 10 }}>{'• ' + item}</Text>
                  </React.Fragment>
                ))}
            </Text>
          </Content>
        </ContentContainer>
      </Container>
    </Background>
  );
};

export default MemberProfile;
