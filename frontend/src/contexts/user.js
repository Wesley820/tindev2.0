import React, { createContext, useState, useContext } from 'react';

const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [user, setUser] = useState(initState);

  function initState() {
    return JSON.parse(localStorage.getItem('user')) || null;
  }

  function auth(data) {
    setUser(data);
    localStorage.setItem('user', JSON.stringify(data));
  }

  function logoutUser() {
    localStorage.removeItem('user');
  }

  return (
    <UserContext.Provider value={{ user, auth, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(UserContext);
  return context;
}
