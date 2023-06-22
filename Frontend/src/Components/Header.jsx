import React, { useContext, useState } from 'react';
import axios from 'axios';

import '../assets/CSS/Header.css';

import { UserCreateContext } from '../Pages/UserCreateContext';
import { Navigate } from 'react-router-dom';

export const Header = () => {
  const { ready, user , setUser} = useContext(UserCreateContext);
  const [redirectHomePage, setRedirectHomePage] = useState(null);

  const logoutHandler = async () => {
    await axios.post('/logout');
    setRedirectHomePage('/');
    setUser(null);
  };
  if (redirectHomePage) {
    return <Navigate to={redirectHomePage} />;
  }

  if (ready && !user && !redirectHomePage) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="main_container">
      <nav className={''}>
        {!!user && (
          <>
            <div className="header_logo">Welcome, {user.name}</div>
            <div className="nav-items">
              <button className="signOut_btn">
                <a onClick={logoutHandler}>Sign out</a>
              </button>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};
