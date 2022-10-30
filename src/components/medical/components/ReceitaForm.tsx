import FormControl from '@mui/material/FormControl';
import { FormHelperText, InputLabel } from '@mui/material';
import { Input } from '@mui/icons-material';
import React from 'react';

export const ReceitaForm: React.FC = () => {
  return (
    <FormControl>
      <InputLabel htmlFor='my-input'>Email address</InputLabel>
      <Input id='my-input' aria-describedby='my-helper-text' />
      <FormHelperText id='my-helper-text'>
        We'll never share your email.
      </FormHelperText>
    </FormControl>
  );
};
