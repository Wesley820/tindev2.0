import React from 'react';

import { MdMoreHoriz } from 'react-icons/md';
import logo from '../../../assets/logo-mobile.svg';

import { Container, Profile, Button } from './styles';

export default function HeaderMobile({ user }) {
  return (
    <Container>
      <Profile src={user.avatar_url} alt={user.username} />
      <Button>
        <img src={logo} alt="Sair" />
      </Button>
      <Button>
        <MdMoreHoriz />
      </Button>
    </Container>
  );
}
