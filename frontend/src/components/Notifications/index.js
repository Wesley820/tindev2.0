import React from 'react';
import { Container } from './styles';

export default function Notifications({ src, alt }) {
  return (
    <Container>
      <img src={src} alt={alt} />
      <span>
        Você deu match com <strong>user</strong>
      </span>
    </Container>
  );
}
