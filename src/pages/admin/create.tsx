import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { USER_API_BASE_URL } from '../../../components/const/url-constants';

export default function Create() {
  const router = useRouter();
  const CREATE_USER_URL = `${USER_API_BASE_URL}/api/user/save`;
  const ADD_ROLE_TO_USER_URL = `${USER_API_BASE_URL}/api/role/addtouser`;

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

  return (
    <div className='form-signin w-50 m-auto'>
      <form onSubmit={handleCreate}>
        <h1 className='h3 mb-3 fw-normal'>Criar um novo usuário</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder='João da silva'
            name='name'
          />
          <label htmlFor='floatingInput'>Nome</label>
        </div>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder='João da silva'
            name='username'
            required
          />
          <label htmlFor='floatingInput'>Username</label>
        </div>
        <div className='form-floating'>
          <input
            type='email'
            className='form-control'
            id='floatingInput'
            placeholder='joao@gmail.com'
            name='email'
            required
          />
          <label htmlFor='floatingInput'>E-mail</label>
        </div>
        <div className='form-floating'>
          <select
            className='form-select'
            aria-label='Default select example'
            name={'role'}
            required
          >
            <option value='ROLE_USER'>User</option>
            <option value='ROLE_MEDICAL'>Medical</option>
            <option value='ROLE_LAB'>Labs</option>
            <option value='ROLE_ADMIN'>Admin</option>
          </select>
          <label htmlFor='floatingInput'>Role</label>
        </div>
        <div className='form-floating'>
          <input
            type='password'
            className='form-control'
            id='floatingPassword'
            placeholder='Password'
            name='password'
          />
          <label htmlFor='floatingPassword'>Senha</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>
          Criar usuário
        </button>
        <p className='mt-5 mb-3 text-muted'>
          &copy; 2022–{new Date().getFullYear()}
        </p>
      </form>
    </div>
  );
}
