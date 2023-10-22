import Link from 'next/link';
import { router } from 'next/client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function MainHeader() {
  const session = useSession();
  const router = useRouter();

  return (
    <header>
      <div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom'>
        <a
          href='/'
          className='d-flex align-items-center text-dark text-decoration-none'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='32'
            className='me-2'
            viewBox='0 0 118 94'
            role='img'
          >
            <title>Health Management</title>
          </svg>
          <span className='fs-4'>Health Management</span>
        </a>

        <nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
          <a className='me-3 py-2 text-dark text-decoration-none' href='/home'>
            Home
          </a>
          {session.status === 'unauthenticated' ? null : (
            <a
              href='/login'
              className='py-2 text-dark text-decoration-none'
              onClick={() => {
                signOut();

                localStorage.setItem('role', 'null');
              }}
            >
              Logout
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
