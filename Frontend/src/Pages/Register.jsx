import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export const Register = () => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [redirect, setRedirect] = useState('');

  const onUserNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };
  const onUserEmailChangeHandler = (event) => {
    setUserEmail(event.target.value);
  };
  const onUserPasswordChangeHandler = (event) => {
    setUserPassword(event.target.value);
  };

  async function onSingUpHandler(event) {
    event.preventDefault();

    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      body: JSON.stringify({ userName, userEmail, userPassword }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.status === 200) {
      alert('registration successful');
      setRedirect('/login');
    } else {
      alert('registration failed');
    }
  }
  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="main_container">
      <div className="mainPageContainer">
        <div className="left_Container" />
        <div className="right_Container">
          <div className="signUp-content">
            <form action="" className="signUp" onSubmit={onSingUpHandler}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Username"
                value={userName}
                onChange={onUserNameChangeHandler}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                value={userEmail}
                onChange={onUserEmailChangeHandler}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={userPassword}
                onChange={onUserPasswordChangeHandler}
              />
              <button type="submit" className="registerButton">
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
