import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React from 'react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };
  return (
    <div>
      <h1>Home</h1>
      <Button onClick={logout}>Sair</Button>
    </div>
  );
};
