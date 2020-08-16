import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { useAuth } from '../../contexts/user';
import axios from '../../services/api';

import HeaderWeb from './HeaderWeb';
import HeaderMobile from './HeaderMobile';
import CardUser from './CardUser';

import { Container, CardContainer, EndUsers } from './styles';

export default function Main() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);

  //fetch data on API
  useEffect(() => {
    async function loadUsers() {
      const response = await axios.get(`/users/${user.id}`);
      setUsers(response.data);
    }

    loadUsers();
  }, [user.id]);

  function handleSwipeAction(direction) {
    if (direction === 'up' || direction === 'down') return;

    const oldUsers = users;
    const lastUser = oldUsers.pop();
    console.log(lastUser);

    setTimeout(() => {
      setUsers([...oldUsers]);
    }, 200);

    direction === 'left'
      ? handleDislikeUser(lastUser.id)
      : handleLikeUser(lastUser.id);
  }

  async function handleLikeUser(userId) {
    await axios.post(`/likes/${user.id}/${userId}`);
  }

  async function handleDislikeUser(userId) {
    await axios.post(`/dislikes/${user.id}/${userId}`);
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
                preventSwipe={['up', 'down']}
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
