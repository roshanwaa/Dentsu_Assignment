import './App.css';
import axios from 'axios';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Layout } from './Components/Layout';
import { HomePage } from './Pages/HomePage';
import { Register } from './Pages/Register.jsx';
import { UserContextProvider } from './Pages/UserCreateContext';

axios.defaults.baseURL = 'http://127.0.0.1:4000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
