import { useNavigate } from 'react-router-dom';
import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import { CardFunction } from './components/CardFunction';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <Grid container columnSpacing={1} rowSpacing={3}>
      <CardFunction
        title={'Medical'}
        description={'Medical é o serviço reponsável por cadastrar consultas'}
        redirectTo={'/medical'}
        redirectDescription={'Ir para serviço medical'}
      />

      <CardFunction
        title={'User'}
        description={'User é o serviço reponsável por cadastrar consultas'}
        redirectTo={'/user'}
        redirectDescription={'Ir para serviço user'}
      />
      <CardFunction
        title={'Labs'}
        description={'Medical é o serviço reponsável por cadastrar consultas'}
        redirectTo={'/labs'}
        redirectDescription={'Ir para serviço labs'}
      />
      <CardFunction
        title={'Admin'}
        description={'Admin é responsável por administrar o sistema'}
        redirectTo={'/admin'}
        redirectDescription={'Ir para serviço admin'}
      />
    </Grid>
  );
};
