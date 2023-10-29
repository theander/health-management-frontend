import { signOut, useSession } from 'next-auth/react';

export default function MainHeader() {
  const session = useSession();

  return (
    <header>
      <div className='d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom p-2 bg-primary'>
        <a
          href='/'
          className='d-flex align-items-center text-dark text-decoration-none p-2'
        >
          <h5 className='fs-4 text-white'>Health Management</h5>
        </a>

        <nav className='d-inline-flex mt-2 mt-md-0 ms-md-auto'>
          <a
            className='me-3 py-2 text-dark text-decoration-none p-2'
            href='/home'
          >
            <h5 className='fs-4 text-white'>Home</h5>
          </a>
          {session.status === 'unauthenticated' ? null : (
            <a
              href='/login'
              className='py-2 text-dark text-decoration-none p-2'
              onClick={() => {
                localStorage.setItem('role', 'null');
                signOut();
              }}
            >
              <h5 className='fs-4 text-white'> Logout</h5>
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
