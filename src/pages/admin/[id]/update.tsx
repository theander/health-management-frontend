import React, { useState } from 'react';
import axios from 'axios';
import { USER_API_BASE_URL } from '../../../../components/const/url-constants';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import Loading from '../../../../components/general/loading';

export default function Update(props) {
  const router = useRouter();
  const session = useSession();
  const UPDATE_USER_URL = `${USER_API_BASE_URL}/api/user/update`;
  const [user, setUser] = useState(props.user);
  if (session.status === 'loading') {
    return <Loading />;
  } else if (session.status === 'unauthenticated') {
    router.push('/login');
  }

  async function handleUpdate(event: any) {
    event.preventDefault();
    const resp = await axios.put(UPDATE_USER_URL, {
      ...props.user,
      name: event.target.name.value,
      roles: props.roles.filter((role) =>
        event.target.roles.value.includes(role.name)
      ),
    });

    if ([200, 201, 204].includes(resp.status)) {
      router.push('/admin');
    }
  }

  function handleOnChange(event: any) {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  }

  if (session.status === 'loading') {
    return <Loading />;
  } else if (session.status === 'unauthenticated') {
    router.push('/login');
  }
  return (
    <div className='form-signin w-25 m-auto'>
      <form onSubmit={handleUpdate}>
        <div className='form-floating p-1'>
          <h1 className='h3 mb-3 fw-normal'>Atualizar usuário</h1>
        </div>
        <div className='form-floating p-1'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder='João da silva'
            name='name'
            value={user.name}
            onChange={handleOnChange}
          />
          <label htmlFor='floatingInput'>{props.user.name}</label>
        </div>
        <div className='form-floating p-1'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder='João da silva'
            name='username'
            value={props.user.username}
            disabled
          />
          <label htmlFor='floatingInput'>Username</label>
        </div>
        <div className='form-floating p-1'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='joao@gmail.com'
            name='email'
            value={props.user.email}
            disabled
          />
          <label htmlFor='floatingInput'>E-mail</label>
        </div>
        <div className='form-floating p-1'>
          <select
            className='form-select'
            aria-label='Default select example'
            name='roles'
            value={user.roles[0].name}
            required
            onChange={handleOnChange}
          >
            <option value='ROLE_USER'>User</option>
            <option value='ROLE_MEDICAL'>Medical</option>
            <option value='ROLE_LAB'>Labs</option>
            <option value='ROLE_ADMIN'>Admin</option>
          </select>
          <label htmlFor='floatingInput'>Role</label>
        </div>
        <div className='form-floating p-1'>
          <button className='w-100 btn btn-lg btn-primary' type='submit'>
            Atualizar usuário
          </button>
        </div>
        <div className='form-floating p-1'>
          <p className='mt-5 mb-3 text-muted'>
            &copy; 2022–{new Date().getFullYear()}
          </p>
        </div>
      </form>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const { id } = context.params;
  const res = fetch(`${USER_API_BASE_URL}/api/users/${id}`);
  const res1 = fetch(`${USER_API_BASE_URL}/api/roles`);

  const [response1, response2] = await Promise.all([res, res1]);
  const user = await response1.json();
  const roles = await response2.json();
  return { props: { user, roles } };
}
