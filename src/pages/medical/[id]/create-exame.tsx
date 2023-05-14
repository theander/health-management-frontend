import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import jwt_decode from 'jwt-decode';
import axios from 'axios';
import { router } from 'next/client';

export default function CreateExame() {
  const route = useRouter();
  const session = useSession();
  let user;
  let medico = route.query.username;
  if (session.status === 'authenticated') {
    const { accessToken } = { accessToken: '', ...session?.data };
    let { sub: username } = jwt_decode(accessToken || '') as { sub: string };
    user = username;
  } else {
    <p>Não autenticado</p>;
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    console.log(
      'Exame: ',
      event.target.usernameField.value,
      event.target.medicalField.value,
      event.target.descriptionField.value,
      'OPEN'
    );
    const resp = await axios.post('http://localhost:8380/api/lab', {
      username: event.target.usernameField.value,
      name: event.target.medicalField.value,
      description: event.target.descriptionField.value,
      status: 'OPEN',
    });
    if (resp.status === 200) {
      await route.push('/medical');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-50 m-auto'>
      <legend>Registrar exame</legend>
      <div className='mb-3'>
        <input
          type='text'
          id='disabledTextInput'
          className='form-control'
          placeholder='nome do paciente'
          value={route.query.id}
          name='usernameField'
        />
      </div>
      <div className='mb-3'>
        <input
          type='text'
          id='disabledTextInput'
          className='form-control'
          placeholder='Disabled input'
          value={user}
          name='medicalField'
        />
      </div>
      <div className='mb-3'>
        <input
          type='text'
          id='disabledTextInput'
          className='form-control'
          placeholder='Descrição'
          name='descriptionField'
        />
      </div>

      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
}
