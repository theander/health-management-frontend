import React, { useState } from 'react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import LoginBtn from '../login/login-btn';
import Loading from '../general/loading';

export default function AuthForm() {
  const [authorizationError, setAuthorizationError] = useState(false);
  const route = useRouter();
  const session = useSession();
  if (session.status === 'loading') {
    return <Loading />;
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
      <div className='form-signin w-25 m-auto mt-2'>
        {authorizationError && (
          <div className='alert alert-danger' role='alert'>
            Usuário ou senha inválida
          </div>
        )}
        <form onSubmit={submitLogin}>
          <div className='form-floating p-1'>
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
          <div className='form-floating p-1'>
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
          <div className='form-floating p-1'>
            <button className='w-100 btn btn-lg btn-primary  p-2' type='submit'>
              Sign in
            </button>
          </div>
          <LoginBtn />
          <p className='mt-5 mb-3 text-muted  p-1'>
            &copy; 2022–{new Date().getFullYear()}
          </p>
        </form>
      </div>
    </>
  );
}
