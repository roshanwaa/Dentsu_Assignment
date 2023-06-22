import React, { useContext, useEffect } from 'react';
import '../assets/CSS/Header.css';

import { UserCreateContext } from '../Pages/UserCreateContext';

export const Header = () => {
  const { user } = useContext(UserCreateContext);

  const signOutHandler = (ev) => {
    ev.preventDefault();
    fetch('http://localhost:4000/signOut', {
      method: 'POST',
      credentials: 'include',
    });
    setUserInfo(null);
  };

  return (
    <div className="main_container">
      <nav className={''}>
        {!!user && (
          <>
            <div className="header_logo">Welcome, {user.name}</div>
            <div className="nav-items">
              <button className="signOut_btn">
                <a onClick={signOutHandler}>Sign out</a>
              </button>
            </div>
          </>
        )}
      </nav>
    </div>
  );
};
