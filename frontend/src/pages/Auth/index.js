import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from '../../services/api';
import { useAuth } from '../../contexts/user';

import logo from '../../assets/logo.svg';
import { Container, Content, Button, Error } from './styles';

export default function Auth() {
  const { auth } = useAuth();
  const history = useHistory();
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);

  async function handleSubmitForm() {
    if (!input) {
      setError('Nome de usuário é obrigatório.');
      return;
    }

    setError(null);

    try {
      const response = await axios.post('/users', {
        username: input,
      });
      auth(response.data);
      history.push('/main');
    } catch (error) {
      const statusMessageError = {
        404: 'Este usuário não existe.',
        500: 'Desculpe, um erro interno ocorreu.',
      };

      setError(statusMessageError[error.response.status]);
    }
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="Tindev" />
        <input
          placeholder="Nome de usuário do github"
          name="username"
          onChange={handleInputChange}
          value={input}
        />
        <Button onClick={handleSubmitForm}>Entrar</Button>
      </Content>
      <Error>{error}</Error>
    </Container>
  );
}
