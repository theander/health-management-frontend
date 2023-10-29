import Link from 'next/link';
import { router } from 'next/client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function MainHeader() {
  const session = useSession();

  return (
    <header>
      <div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom p-2'>
        <a
          href='/'
          className='d-flex align-items-center text-dark text-decoration-none p-2'
        >
          <h5 className='fs-4'>Health Management</h5>
        </a>

        <nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
          <a
            className='me-3 py-2 text-dark text-decoration-none p-2'
            href='/home'
          >
            <h5 className='fs-4'>Home</h5>
          </a>
          {session.status === 'unauthenticated' ? null : (
            <a
              href='/login'
              className='py-2 text-dark text-decoration-none p-2'
              onClick={() => {
                localStorage.setItem('role', 'null');
                localStorage.setItem('username', 'null');
                signOut();
              }}
            >
              <h5 className='fs-4'> Logout</h5>
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
