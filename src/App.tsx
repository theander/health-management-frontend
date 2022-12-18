import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { About } from './screens/About';
import { PrivateRoute } from './routes/PrivateRoute';
import { Home } from './screens/home/Home';
import { Login } from './screens/login/Login';
import { User } from './screens/user/User';
import { Labs } from './screens/labs/Labs';
import { Labs1 } from './screens/labs/Labs1';
import { Medical } from './screens/medical/Medical';
import { Error } from './screens/error/Error';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route
          path='/home'
          element={<PrivateRoute redirectTo='/' component={Home} />}
        />
        <Route path='/' element={<Login />} />
        <Route path='user' element={<User />} />
        <Route path='labs' element={<Labs />} />
        <Route path='medical' element={<Medical />}>
          <Route path='shopcart' element={<Labs1 />} />
          <Route path='*' element={<Labs />} />
        </Route>
        <Route path='erro' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};
