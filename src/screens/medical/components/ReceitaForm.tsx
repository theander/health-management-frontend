import { TextField } from '@mui/material';
import React from 'react';

export const ReceitaForm: React.FC = () => {
  const [value, setValue] = React.useState('Digite o conteúdo da receita');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <div>
      <div>
        <TextField
          id='outlined-multiline-flexible'
          label='Nome'
          multiline
          fullWidth
          disabled={true}
          value={value}
          onChange={handleChange}
        />
        <TextField
          id='outlined-multiline-flexible'
          label='Idade'
          multiline
          fullWidth
          disabled={true}
          value={value}
          onChange={handleChange}
        />
        <TextField
          id='outlined-multiline-flexible'
          label='Peso'
          multiline
          fullWidth
          disabled={true}
          value={value}
          onChange={handleChange}
        />
      </div>
      <div>
        <TextField
          id='outlined-multiline-flexible'
          label='Receita'
          multiline
          fullWidth
          rows={4}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
