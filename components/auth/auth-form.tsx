import React from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function AuthForm() {
  const route = useRouter();
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
  }
  return (
    <div className='form-signin w-50 m-auto'>
      <form onSubmit={submitLogin}>
        <img
          className='mb-4'
          src='images/login.jpg'
          alt=''
          width='72'
          height='57'
        ></img>
        <h1 className='h3 mb-3 fw-normal'>Please sign in</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='floatingInput'
            placeholder='name@example.com'
            name='email'
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
          />
          <label htmlFor='floatingPassword'>Password</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>
          Sign in
        </button>
        <p className='mt-5 mb-3 text-muted'>&copy; 2017–2022</p>
      </form>
    </div>
  );
}
