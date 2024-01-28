import React, { useEffect } from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Login } from './routes/auth/login';
import { Signup } from './routes/auth/signup';
import { Home } from './routes/home';
import { Auth } from './routes/auth';
import { useAuth } from './context/authContext';

function App() {
  const { token } = useAuth();

  useEffect(() => {
    console.log(token);
  }, [token]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" />} />
      <Route index path="/auth" element={<Auth />} />
      <Route path="/auth/login" element={<Login />} />
      <Route path="/auth/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
