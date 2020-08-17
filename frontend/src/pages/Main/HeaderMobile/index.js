import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../contexts/user';
import { MdMoreHoriz } from 'react-icons/md';
import logo from '../../../assets/logo-mobile.svg';

import { Container, Profile, Button } from './styles';

export default function HeaderMobile({ user }) {
  const history = useHistory();
  const { logoutUser } = useAuth();

  function logout() {
    logoutUser();
    history.push('/auth');
  }

  return (
    <Container>
      <Profile src={user.avatar_url} alt={user.username} />
      <Button onClick={logout}>
        <img src={logo} alt="Sair" />
      </Button>
      <Button>
        <MdMoreHoriz />
      </Button>
    </Container>
  );
}
