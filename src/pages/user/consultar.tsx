import Link from 'next/link';
import React from 'react';
import { USER_API_BASE_URL } from '../../../components/const/url-constants';
import { useSession } from 'next-auth/react';
import Loading from '../../../components/general/loading';
import { useRouter } from 'next/router';

export default function Consultar(props: any) {
  const session = useSession();
  const route = useRouter();

  if (session.status === 'loading') {
    return <Loading />;
  } else if (session.status === 'unauthenticated') {
    route.push('/login');
  }
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <h3>Consultar</h3>
        </div>
        <div className='row'>
          <table className='table'>
            <thead>
              <tr>
                <td>Nome</td>
                <td>Username</td>
                <td>Role</td>
                <td>Marcar</td>
              </tr>
            </thead>
            <tbody>
              {props.data.map((user: any) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.roles[0].name}</td>
                  <td>
                    <Link href={`/user/${user.username}/consultar`}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-pencil-square'
                        viewBox='0 0 16 16'
                      >
                        <path d='M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z' />
                        <path
                          fill-rule='evenodd'
                          d='M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z'
                        />
                      </svg>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `${USER_API_BASE_URL}/api/users-by-role/ROLE_MEDICAL`
  );
  if (res.status !== 200) {
    return { props: { data: [] } };
  }

  const data = await res.json();
  // Pass data to the page via props
  return { props: { data } };
}
