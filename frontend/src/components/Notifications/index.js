import React from 'react';
import { Container } from './styles';

export default function Notifications({ user }) {
  return (
    <Container>
      <img src={user.avatar_url} alt={user.username} />
      <span>
        Você deu match com <strong>{user.name}</strong>
      </span>
    </Container>
  );
}
