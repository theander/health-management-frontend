import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

export default function Create() {
  const router = useRouter();
  const CREATE_USER_URL = 'http://localhost:8180/api/user/save';
  const ADD_ROLE_TO_USER_URL = 'http://localhost:8180/api/role/addtouser';

  async function handleCreate(event: any) {
    event.preventDefault();
    console.log(event.target.role.value);
    const resp = await axios.post(CREATE_USER_URL, {
      name: event.target.name.value,
      password: event.target.password.value,
      username: event.target.username.value,
    });

    if (resp.status === 201) {
      console.log(event.target.username.value);
      console.log(event.target.role.value);
      const addRoleResp = await axios.post(ADD_ROLE_TO_USER_URL, {
        username: event.target.username.value,
        rolename: event.target.role.value,
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
          />
          <label htmlFor='floatingInput'>Username</label>
        </div>

        <div className='form-floating'>
          <select
            className='form-select'
            aria-label='Default select example'
            name={'role'}
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
        <p className='mt-5 mb-3 text-muted'>&copy; 2017–2022</p>
      </form>
    </div>
  );
}
