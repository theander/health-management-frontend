import { useSession } from 'next-auth/react';
import jwt_decode from 'jwt-decode';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import axios from 'axios';
import { MEDICAL_API_BASE_URL } from '../../../../components/const/url-constants';

export type RegistrarConsulta = {
  nome: string;
  medico: string;
  data: string;
};
export default function Consultar(props: any) {
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
    const resp = await axios.post(`${MEDICAL_API_BASE_URL}/api/consulta`, {
      username: event.target.usernameField.value,
      medico: event.target.medicalField.value,
      description: event.target.descriptionField.value,
    });
    if (resp.status === 201) {
      await route.push('/user');
    }
  }

  return (
    <form onSubmit={handleSubmit} className='w-25 m-auto'>
      <legend>Registrar consulta</legend>
      <div className='mb-3'>
        <label htmlFor='disabledTextInputUserName' className='form-label'>
          Username
        </label>
        <input
          type='text'
          id='disabledTextInput'
          className='form-control'
          placeholder='Disabled input'
          value={user}
          name='usernameField'
        />
      </div>

      <div className='mb-3'>
        <label htmlFor='disabledTextInputMedical' className='form-label'>
          Prestador
        </label>
        <input
          type='text'
          id='disabledTextInput'
          className='form-control'
          placeholder='Disabled input'
          value={medico}
          name='medicalField'
        />
      </div>
      <div className='mb-3 heigth-50'>
        <label htmlFor='disabledTextInputData' className='form-label'>
          Descrição
        </label>
        <textarea
          id='disabledTextInput'
          className='form-control'
          placeholder='Descrição'
          name='descriptionField'
          rows='3'
        ></textarea>
      </div>

      <button type='submit' className='btn btn-primary'>
        Salvar
      </button>
    </form>
  );
}
