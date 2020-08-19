import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import ModalSwitch from '../SwitchMobileHeader';
import { useAuth } from '../../contexts/user';
import { MdMoreHoriz } from 'react-icons/md';
import logo from '../../assets/logo-mobile.svg';

import { Container, Profile, Button } from './styles';

export default function HeaderMobile({ user }) {
  const history = useHistory();
  const { logoutUser } = useAuth();
  const [modalSwitch, setModalSwitch] = useState(false);

  function logout() {
    logoutUser();
    history.push('/auth');
  }

  function handleOpenModalSwitch() {
    setModalSwitch(true);
  }

  function handleCloseModalSwitch() {
    setModalSwitch(false);
  }

  return (
    <Container>
      <Profile src={user.avatar_url} alt={user.username} />
      <Button onClick={logout}>
        <img src={logo} alt="Sair" />
      </Button>
      <Button onClick={handleOpenModalSwitch}>
        <MdMoreHoriz />
      </Button>
      {modalSwitch && <ModalSwitch handleCloseModal={handleCloseModalSwitch} />}
    </Container>
  );
}
