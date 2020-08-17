import React from 'react';

import Switch from '../../../components/Switch';
import Notifications from '../../../components/Notifications';
import MatchAlert from '../../../components/MatchAlert';

import { Container, HeaderMenu, NotificationContainer } from './styles';

export default function HeaderWeb({ notifications, user }) {
  return (
    <Container>
      <HeaderMenu>
        <span>
          <img src={user.avatar_url} alt={user.username} />
          <p>{user.name}</p>
        </span>
        <Switch />
      </HeaderMenu>
      {notifications.length === 0 ? (
        <MatchAlert margin="150px 0 0" />
      ) : (
        <NotificationContainer>
          <p>Matches</p>
          {notifications.map((user) => (
            <Notifications user={user} />
          ))}
        </NotificationContainer>
      )}
    </Container>
  );
}
