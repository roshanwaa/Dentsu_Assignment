import React, { useState } from 'react';
import axios from 'axios';
export const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUserForm = async (event) => {
    event.preventDefault();
    try {
      await axios.post('/register', {
        name,
        email,
        password,
      });

      alert('Registration successfully Complete. Now you can login');
    } catch (e) {
      console.log(e);
      console.log(' Registration Failed');
    }
  };

  const nameChangeHandler = (setValue) => {
    setName(setValue.target.value);
  };
  const emailChangeHandler = (setValue) => {
    setEmail(setValue.target.value);
  };
  const passwordChangeHandler = (setValue) => {
    setPassword(setValue.target.value);
  };

  return (
    <div className="main_container">
      <div className="mainPageContainer">
        <div className="left_Container" />
        <div className="right_Container">
          <div className="signUp-content">
            <form action="" className="signUp" onSubmit={registerUserForm}>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Username"
                value={name}
                onChange={nameChangeHandler}
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
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
                SignUp
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
