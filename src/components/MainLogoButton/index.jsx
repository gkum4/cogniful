import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import LogoPart1 from '../../assets/cogniful-logo-pt1.png';
import LogoPart2 from '../../assets/cogniful-logo-pt2.png';
import LogoPart3 from '../../assets/cogniful-logo-pt3.png';
import { Container, ImagePart } from './styles';

const MainLogoButton = ({ onClickFinishAnimation = () => {} }) => {
  const [visible, setVisible] = useState(true);

  const handleClick = useCallback(async () => {
    setVisible(false);

    await new Promise(res => setTimeout(() => res(), 4200));

    onClickFinishAnimation();
  }, []);

  return (
    <Container onClick={handleClick} visible={visible}>
      <ImagePart src={LogoPart1} />
      <ImagePart src={LogoPart2} />
      <ImagePart src={LogoPart3} />
    </Container>
  );
};

export default MainLogoButton;
