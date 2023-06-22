import React, { useContext, useEffect } from 'react';
import '../assets/CSS/Header.css';

import { UserContext } from '../Pages/UserContext';

export const Header = () => {
  const { setUserInfo, userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((usrInfo) => setUserInfo(usrInfo));
  }, []);

  const signOutHandler = (ev) => {
    ev.preventDefault();
    fetch('http://localhost:4000/signOut', {
      method: 'POST',
      credentials: 'include',
    });
    setUserInfo(null);
  };

  // const userName = userInfo?.userName;
  const userName = userInfo;

  return (
    <div className="main_container">
      <nav className={'header'}>
        {userName && (
          <>
            <div className="header_logo">Welcome, User</div>
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
