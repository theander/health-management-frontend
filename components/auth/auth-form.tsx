import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import LoginBtn from '../login/login-btn';

export default function AuthForm() {
  const [authorizationError, setAuthorizationError] = useState(false);
  const route = useRouter();
  const session = useSession();
  if (session.status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session.status === 'authenticated') {
    route.push('/home/main');
  }

  async function submitLogin(event: any) {
    event.preventDefault();
    const enteredEmail = event.target.email.value;
    const enteredPassword = event.target.password.value;

    const signin = await signIn('credentials', {
      redirect: false,
      username: enteredEmail,
      password: enteredPassword,
    });
    if (!signin?.error) {
      await route.push('/home');
    }
    if (signin && [401, 403].includes(signin?.status)) {
      setAuthorizationError(true);
    }
  }

  function handleOnClick() {
    setAuthorizationError(false);
  }

  return (
    <>
      <div className='form-signin w-50 m-auto'>
        <form onSubmit={submitLogin}>
          <img
            className='mb-4'
            src='images/login.jpg'
            alt=''
            width='72'
            height='57'
          ></img>
          <h1 className='h3 mb-3 fw-normal'>Sign in</h1>

          <div className='form-floating'>
            <input
              type='text'
              className='form-control'
              id='floatingInput'
              placeholder='name@example.com'
              name='email'
              onClick={handleOnClick}
            />
            <label htmlFor='floatingInput'>Username</label>
          </div>
          <div className='form-floating'>
            <input
              type='password'
              className='form-control'
              id='floatingPassword'
              placeholder='Password'
              name='password'
              onClick={handleOnClick}
            />
            <label htmlFor='floatingPassword'>Password</label>
          </div>

          <button className='w-100 btn btn-lg btn-primary' type='submit'>
            Sign in
          </button>
          <p>{authorizationError && 'Usuário ou senha inválida'}</p>
          <LoginBtn />
          <p className='mt-5 mb-3 text-muted'>
            &copy; 2022–{new Date().getFullYear()}
          </p>
        </form>
      </div>
    </>
  );
}
