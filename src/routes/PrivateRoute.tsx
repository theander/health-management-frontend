import React, { FC } from 'react';
import { Home } from '../components/home/Home';
import { Navigate, useNavigate } from 'react-router-dom';
interface PropType {
  component: React.FC;
  redirectTo: string;
}
export const PrivateRoute: React.FC<PropType> = ({
  component: Component,
  redirectTo: string,
}) => {
  const isAuthenticate =
    (localStorage.getItem('token') || localStorage.getItem('access_token')) !==
    null;
  return isAuthenticate ? <Home /> : <Navigate to='/erro' />;

  //return isAuthenticate ? Component:<Navigator to={re} />
  //return isAuthenticate ? Component : <Navig />;
};
