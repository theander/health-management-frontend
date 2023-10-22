import React, { useState } from 'react';
import axios from 'axios';
import { USER_API_BASE_URL } from '../../../../components/const/url-constants';
import { useRouter } from 'next/router';

export default function Update({ data }) {
  const router = useRouter();
  const UPDATE_USER_URL = `${USER_API_BASE_URL}/api/user/update`;
  const [user, setUser] = useState(data);

  async function handleUpdate(event: any) {
    event.preventDefault();
    const resp = await axios.put(UPDATE_USER_URL, {
      ...data,
      name: event.target.name.value,
    });

    if ([200, 201, 204].includes(resp.status)) {
      router.push('/admin');
    }
  }

  function handleOnChange(event: any) {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  }

  return (
    <div className='form-signin w-50 m-auto'>
      <form onSubmit={handleUpdate}>
        <h1 className='h3 mb-3 fw-normal'>Atualizar usuário</h1>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder='João da silva'
            name='name'
            value={user.name}
            onChange={handleOnChange}
          />
          <label htmlFor='floatingInput'>{data.name}</label>
        </div>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder='João da silva'
            name='username'
            value={data.username}
            disabled
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
            value={data.email}
            disabled
          />
          <label htmlFor='floatingInput'>E-mail</label>
        </div>
        <button className='w-100 btn btn-lg btn-primary' type='submit'>
          Atualizar usuário
        </button>
        <p className='mt-5 mb-3 text-muted'>
          &copy; 2022–{new Date().getFullYear()}
        </p>
      </form>
    </div>
  );
}

export async function getServerSideProps(context: any) {
  // Fetch data from external API
  const { id } = context.params;
  const res = await fetch(`${USER_API_BASE_URL}/api/users/${id}`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
