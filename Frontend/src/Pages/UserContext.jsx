import { createContext, useState } from 'react';

export const UserContext = createContext({});
export const USerContextProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  return (
    <UserContext.Provider className="" value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};
