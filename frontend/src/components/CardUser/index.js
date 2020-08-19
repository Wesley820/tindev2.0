import React from 'react';
import { Container } from './styles';

export default function CardUser({ user }) {
  return (
    <Container src={user.avatar_url}>
      <header></header>
      <footer>
        <h2>{user.name}</h2>
        <p>{user.bio}</p>
      </footer>
    </Container>
  );
}
