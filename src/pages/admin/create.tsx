import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { USER_API_BASE_URL } from '../../../components/const/url-constants';
import Loading from '../../../components/general/loading';
import { useSession } from 'next-auth/react';

export default function Create() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const CREATE_USER_URL = `${USER_API_BASE_URL}/api/user/save`;
  const ADD_ROLE_TO_USER_URL = `${USER_API_BASE_URL}/api/role/addtouser`;
  let currentRole = session?.role;

  async function handleCreate(event: any) {
    event.preventDefault();
    const resp = await axios.post(CREATE_USER_URL, {
      name: event.target.name.value,
      password: event.target.password.value,
      username: event.target.username.value,
      email: event.target.email.value,
    });

    if (resp.status === 201) {
      const username = event.target.username.value;
      const rolename = event.target.role.value;
      const addRoleResp = await axios.post(ADD_ROLE_TO_USER_URL, {
        username,
        rolename,
      });
      if (addRoleResp.status === 200) {
        router.push('/admin');
      }
    }
  }

  const backCondition = status === 'unauthenticated';
  // ||
  // currentRole !== 'ROLE_ADMIN' ||
  // currentRole !== null;
  if (status === 'loading') {
    return <Loading />;
  } else if (backCondition) {
    router.push('/login');
  }
  console.log(session);
  return (
    <div className='form-signin w-50 m-auto'>
      <form onSubmit={handleCreate}>
        <h1 className='h3 mb-3 fw-normal'>Criar um novo usuário</h1>

        <div className='form-floating p-1'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder='João da silva'
            name='name'
          />
          <label htmlFor='floatingInput'>Nome</label>
        </div>
        <div className='form-floating p-1'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder={'João da silva'}
            name='username'
            required
          />
          <label htmlFor='floatingInput'>Username</label>
        </div>
        <div className='form-floating p-1'>
          {!currentRole ? (
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='joao@gmail.com'
              name='email'
              required
              disabled
              value={session?.user?.email || ''}
            />
          ) : (
            <input
              type='email'
              className='form-control'
              id='floatingInput'
              placeholder='joao@gmail.com'
              name='email'
              required
            />
          )}
          <label htmlFor='floatingInput'>E-mail</label>
        </div>
        <div className='form-floating p-1'>
          <select
            className='form-select'
            aria-label='Default select example'
            name={'role'}
            required
            disabled={!currentRole}
          >
            <option value='ROLE_USER'>User</option>
            <option value='ROLE_MEDICAL'>Medical</option>
            <option value='ROLE_LAB'>Labs</option>
            <option value='ROLE_ADMIN'>Admin</option>
          </select>
          <label htmlFor='floatingInput'>Role</label>
        </div>
        <div className='form-floating p-1'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            name='password'
          />
          <label htmlFor='floatingPassword'>Senha</label>
        </div>
        <div className='form-floating p-1'>
          <button className='w-100 btn btn-lg btn-primary' type='submit'>
            Criar usuário
          </button>
        </div>
        <p className='mt-5 mb-3 text-muted'>
          &copy; 2022–{new Date().getFullYear()}
        </p>
      </form>
    </div>
  );
}
