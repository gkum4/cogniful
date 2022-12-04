import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';

import { Container } from './styles';

const LinksButtons = ({ links = [] }) => {
  const getLinkIcon = linkType => {
    switch (linkType) {
      case 'instagram': {
        return <BsInstagram />;
      }
      case 'linkedin': {
        return <BsLinkedin />;
      }
      default: {
        return <></>;
      }
    }
  };

  return (
    <Container>
      {links.map((link, index) => (
        <a key={index} href={link.link} target="_blank" rel="noreferrer noopener">
          {getLinkIcon(link.type)}
        </a>
      ))}
    </Container>
  );
};

export default LinksButtons;
