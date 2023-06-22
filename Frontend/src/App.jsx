import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Layout } from './Components/Layout';
import { HomePage } from './Pages/HomePage';
import { Register } from './Pages/Register.jsx';
import { USerContextProvider } from './Pages/UserContext';

function App() {
  return (
    <USerContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
        </Route>
      </Routes>
    </USerContextProvider>
  );
}

export default App;
