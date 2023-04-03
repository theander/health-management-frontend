import { useSession } from 'next-auth/react';
import jwt_decode from 'jwt-decode';
import { useRouter } from 'next/router';
import { Session } from 'next-auth';

export default function Consultar(props: any) {
  const route = useRouter();
  const session = useSession();
  console.log(route.query.id);
  const { accessToken } = { accessToken: '', ...session?.data };
  const { sub: username } = jwt_decode(accessToken || '') as { sub: string };

  console.log('Data Session:', username);

  return (
    <form className='w-50 m-auto'>
      <fieldset>
        <legend>Registrar consulta</legend>
        <div className='mb-3'>
          <label htmlFor='disabledTextInput' className='form-label'>
            Disabled input
          </label>
          <input
            type='datetime-local'
            id='disabledTextInput'
            className='form-control'
            placeholder='Disabled input'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='disabledTextInput' className='form-label'>
            Disabled input
          </label>
          <input
            type='datetime-local'
            id='disabledTextInput'
            className='form-control'
            placeholder='Disabled input'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='disabledTextInput' className='form-label'>
            Disabled input
          </label>
          <input
            type='datetime-local'
            id='disabledTextInput'
            className='form-control'
            placeholder='Disabled input'
          />
        </div>

        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </fieldset>
    </form>
  );
}
