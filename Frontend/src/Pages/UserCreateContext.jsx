import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const UserCreateContext = createContext({});

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!user) {
      axios.get('/profile').then(({ data }) => {
        setUser(data);
        setReady(true);
      });
    }
  }, []);

  return (
    <UserCreateContext.Provider value={{ user, setUser, ready }}>
      {children}
    </UserCreateContext.Provider>
  );
};
