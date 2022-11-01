import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import LogoPart1 from '../../assets/cogniful-logo-pt1.png';
import LogoPart2 from '../../assets/cogniful-logo-pt2.png';
import LogoPart3 from '../../assets/cogniful-logo-pt3.png';
import { Container, ImagePart } from './styles';

const MainLogoButton = ({
  onClick = () => {},
  onClickFinishAnimation = () => {},
  unlockDelay = 3000,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    new Promise(res => {
      setTimeout(() => {
        res();
      }, unlockDelay);
    }).then(() => {
      setVisible(false);

      new Promise(res => setTimeout(() => res(), 4200)).then(() => {
        onClickFinishAnimation();
      });
    });
  }, []);

  const handleClick = useCallback(async () => {
    onClick();

    setVisible(false);

    await new Promise(res => setTimeout(() => res(), 4200));

    onClickFinishAnimation();
  }, [onClick]);

  return (
    <Container onClick={handleClick} visible={visible} disabled={!visible}>
      <ImagePart src={LogoPart1} />
      <ImagePart src={LogoPart2} />
      <ImagePart src={LogoPart3} />
    </Container>
  );
};

export default MainLogoButton;
