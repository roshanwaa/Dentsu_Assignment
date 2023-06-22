import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { UserCreateContext } from '../Pages/UserCreateContext';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirectHomePage, setRedirectHomePage] = useState(false);

  const { setUser } = useContext(UserCreateContext);
  const loginSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post('/login', {
        email,
        password,
      });

      setUser(data);
      console.log('Login Successful');
      setRedirectHomePage(true);
    } catch (e) {
      console.log(e + ' Login Failed');
    }

    setEmail('');
    setPassword('');
  };

  const emailChangeHandler = (value) => {
    setEmail(value.target.value);
  };
  const passwordChangeHandler = (value) => {
    setPassword(value.target.value);
  };

  if (redirectHomePage) {
    return <Navigate to={'/'} />;
  }

  return (
    <div className="main_container">
      <div className="mainPageContainer">
        <div className="left_Container" />
        <div className="right_Container">
          <div className="signIn-content">
            <form action="" className="signIn" onSubmit={loginSubmitHandler}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Username"
                value={email}
                onChange={emailChangeHandler}
              />
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={passwordChangeHandler}
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
