import React from 'react';
import Switch from '../Switch';

import logo from '../../assets/logo-mobile.svg';
import { MdClose } from 'react-icons/md';
import { Container, Content, Option } from './styles';

export default function SwitchMobileHeader({ handleCloseModal }) {
  return (
    <Container>
      <Content>
        <header>
          <img src={logo} alt="logo" />
          <button onClick={handleCloseModal}>
            <MdClose />
          </button>
        </header>
        <Option>
          <p>Alterar Tema</p>
          <Switch />
        </Option>
      </Content>
    </Container>
  );
}
