import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './UserContext';
export const Login = () => {
  // const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [redirectUrl, setRedirectUrl] = useState(false);

  const { setUserInfo } = useContext(UserContext);

  async function userLogin(ev) {
    ev.preventDefault();

    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      body: JSON.stringify({ userEmail, userPassword }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    if (response.ok) {
      response.json().then((usrInfo) => {
        setUserInfo(usrInfo);
        setRedirectUrl(true);
      });
    } else {
      alert('Login Failed');
    }
  }

  if (redirectUrl) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="main_container">
      <div className="mainPageContainer">
        <div className="left_Container" />
        <div className="right_Container">
          <div className="signIn-content">
            <form action="" className="signIn" onSubmit={userLogin}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Username"
                value={userEmail}
                onChange={(ev) => setUserEmail(ev.target.value)}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={userPassword}
                onChange={(ev) => setUserPassword(ev.target.value)}
              />
              <button type="submit" className="registerButton">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
