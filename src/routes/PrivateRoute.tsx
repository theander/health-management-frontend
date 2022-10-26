import React, { FC } from 'react';
import { Home } from '../components/Home';
interface PropType {
  component: React.FC;
  redirectTo: string;
}
export const PrivateRoute: React.FC<PropType> = ({
  component: Component,
  redirectTo: string
}) => {
  const isAuthenticate = localStorage.getItem('token') !== null;
  console.log('teste');
  return <Home />;
  //return isAuthenticate ? Component:<Navigator to={re} />
  //return isAuthenticate ? Component : <Navig />;
};
