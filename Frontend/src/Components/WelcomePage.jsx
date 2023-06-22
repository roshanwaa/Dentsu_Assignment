import React from 'react';
import { Link } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <>
      <div className="welcomeText">Welcome</div>
      <div className="registration">
        <Link to={'/register'}>
          <button className="registerButton">Register</button>
        </Link>
        <Link to={'/login'}>
          <button className="registerButton">Login</button>
        </Link>
      </div>
    </>
  );
};
