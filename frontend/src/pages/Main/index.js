import React from 'react';
import { useAuth } from '../../contexts/user';
import { Container } from './styles';

export default function Main() {
  const { user } = useAuth();
  console.log(user);
  return <Container>Bem vindo {user?.username}</Container>;
}
