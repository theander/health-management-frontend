import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './components/About';
import { PrivateRoute } from './routes/PrivateRoute';
import { Home } from './components/Home';
import { Login } from './components/login/Login';
import { User } from './components/user/User';
import { Labs } from './components/labs/Labs';
import { Medical } from './components/medical/Medical';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route
          path="/home"
          element={<PrivateRoute redirectTo="/" component={Home} />}
        />
        <Route path="/" element={<Login />} />
        <Route path="user" element={<User />} />
        <Route path="labs" element={<Labs />} />
        <Route path="medical" element={<Medical />} />
      </Routes>
    </BrowserRouter>
  );
};
