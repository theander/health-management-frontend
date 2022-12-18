import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface ICardProps {
  title: string;
  description: string;
  redirectTo: string;
  redirectDescription: string;
}

export const CardFunction: React.FC<ICardProps> = ({
  title,
  description,
  redirectTo,
  redirectDescription,
}) => {
  const navigate = useNavigate();
  return (
    <Grid xs={2} padding={2} marginTop={10}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            {title}
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size={'medium'}
            onClick={() => {
              navigate(redirectTo);
            }}
          >
            {redirectDescription}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
