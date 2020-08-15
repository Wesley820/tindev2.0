import React from 'react';
import { Container, Card } from './styles';

export default function MatchAlert({ margin }) {
  return (
    <Container margin={margin}>
      <Card />
      <span>Comece a dar Matches</span>
      <p>Os Matches aparecerão aqui quando você começar a curtir pessoas.</p>
    </Container>
  );
}
