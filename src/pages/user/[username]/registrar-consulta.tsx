import Link from 'next/link';
import React from 'react';
import { useSession } from 'next-auth/react';
import { USER_API_BASE_URL } from '../../../../components/const/url-constants';

export default function RegistrarConsulta(props: any) {
  const { data: session, status } = useSession();
  return (
    <div>
      <nav></nav>
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <td>Nome</td>
              <td>Username</td>
              <td>Role</td>
              <td>manage</td>
            </tr>
          </thead>
          <tbody>
            {props.data.map((user: any) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.roles.map((role: any) => role.name)}</td>
                <td>
                  <Link href={`/user/${user.id}/consultar`}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-calendar-event'
                      viewBox='0 0 16 16'
                    >
                      <path d='M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z' />
                      <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z' />
                    </svg>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    `${USER_API_BASE_URL}/api/users-by-role/ROLE_MEDICAL`
  );
  const data = await res.json();
  return { props: { data } };
}
