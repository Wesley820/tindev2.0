import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import { useAuth } from '../../contexts/user';
import axios from '../../services/api';
import io from 'socket.io-client';

import HeaderWeb from '../../components/HeaderWeb';
import HeaderMobile from '../../components/HeaderMobile';
import CardUser from '../../components/CardUser';
import MatchModal from '../../components/MatchModal';

import { Container, CardContainer, EndUsers } from './styles';

export default function Main() {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [matchUser, setMatchUser] = useState(null);
  const [notifications, setNotifications] = useState([]);

  //fetch data on API
  useEffect(() => {
    async function loadUsers() {
      const response = await axios.get(`/users/${user.id}`);
      setUsers(response.data);
    }

    loadUsers();
  }, [user.id]);

  //connects to the server via sockets
  useEffect(() => {
    const socket = io('http://localhost:5000', {
      query: { user: user.id },
    });

    socket.on('match', (user) => {
      setMatchUser(user);
      setNotifications([user, ...notifications]);
    });
  }, [user.id, notifications]);

  function handleSwipeAction(direction) {
    if (direction === 'up' || direction === 'down') return;

    const oldUsers = users;
    const lastUser = oldUsers.pop();

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

  function handleCloseMatchModal() {
    setMatchUser(false);
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
      {matchUser && (
        <MatchModal onClose={handleCloseMatchModal} user={matchUser} />
      )}
    </Container>
  );
}
