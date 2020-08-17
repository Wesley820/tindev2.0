import React from 'react';
import match from '../../../assets/match.svg';
import { Container, Content, Profile, Link } from './styles';

export default function Match({ onClose, user }) {
  const firstName = user.name.split(' ')[0];

  return (
    <Container>
      <Content>
        <img id="match-icon" src={match} alt="match" />
        <p>Você e {firstName} se gostaram!</p>
        <Profile src={user.avatar_url} alt="username" />
        <p>Visite o perfil de {firstName} no Github</p>
        <Link href={user.html_url} target="_blank">
          Visitar github
        </Link>
        <button onClick={onClose}>FECHAR</button>
      </Content>
    </Container>
  );
}
