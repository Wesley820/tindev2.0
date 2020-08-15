import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { useAuth } from '../../contexts/user';
import axios from '../../services/api';

import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import CardUser from './CardUser';

import { Container, CardContainer, EndUsers } from './styles';

export default function Main() {
  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const { user } = useAuth();

  //fetch data on API
  useEffect(() => {
    async function loadUsers() {
      try {
        const users = await axios.get(`/users/${user.id}`);
        setUsers(users.data);
      } catch (error) {}
    }

    loadUsers();
  }, [user.id]);

  function handleSwipeAction(direction) {
    let oldUsers;
    oldUsers = users;

    const user = oldUsers.pop();

    setTimeout(() => {
      setUsers([...oldUsers]);
    }, 170);

    direction === 'left'
      ? console.log(`Você deu dislike em ${user.username}`)
      : console.log(`Você deu like em ${user.username}`);
  }

  return (
    <Container>
      <HeaderMobile user={user} />
      <HeaderWeb notifications={notifications} user={user} />
      {users && (
        <>
          <CardContainer>
            {users.map((user) => (
              <TinderCard
                className="swipe"
                key={user.id}
                onSwipe={handleSwipeAction}
                preventSwipe={['down']}
              >
                <CardUser user={user} />
              </TinderCard>
            ))}
            {users.length === 0 && (
              <EndUsers>
                <img src={user?.avatar_url} alt="user" />
                <p>Não há mais usuários para mostrar :(</p>
              </EndUsers>
            )}
          </CardContainer>
        </>
      )}
    </Container>
  );
}
