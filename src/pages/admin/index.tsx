import Link from 'next/link';
import React from 'react';
import { USER_API_BASE_URL } from '../../../components/const/url-constants';
import Loading from '../../../components/general/loading';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import ClientesPdf from '../../../components/reports/clients-pdf';

export default function User(props: any) {
  const { data: session, status } = useSession();
  const router = useRouter();
  let currentRole = session?.role;

  if (status === 'loading') {
    return <Loading />;
  } else if (
    status === 'unauthenticated' ||
    (currentRole !== 'ROLE_ADMIN' && currentRole !== null)
  ) {
    router.push('/login');
  }

  const generatePdf = async () => {
    ClientesPdf(props.data);
  };
  return (
    <div>
      <nav>
        <ul className='nav justify-content-center gap-3'>
          <li className='nav-item'>
            <button className='btn btn-outline-primary' aria-current='page'>
              <Link className='text-decoration-none' href='/admin/create'>
                Adicionar usuário
              </Link>
            </button>
          </li>
          <li className='nav-item justify-content-end'>
            <button
              className='btn btn-outline-primary'
              aria-current='page'
              onClick={generatePdf}
            >
              Gerar PDF
            </button>
          </li>
        </ul>
      </nav>
      <div className='container'>
        <table className='table'>
          <thead>
            <tr className='border-dark'>
              <td>
                <h4>Lista de usuários</h4>
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>Nome</td>
              <td>Username</td>
              <td>Email</td>
              <td>Role</td>
              <td>Manage</td>
            </tr>
          </thead>
          <tbody>
            {props.data.map((user: any) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user?.roles[0]?.name}</td>
                <td>
                  <Link href={`/admin/${user.id}/delete`}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='16'
                      height='16'
                      fill='currentColor'
                      className='bi bi-trash'
                      viewBox='0 0 16 16'
                    >
                      <path d='M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z' />
                      <path
                        fillRule='evenodd'
                        d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
                      />
                    </svg>
                  </Link>
                  <Link href={`/admin/${user.id}/update`}>
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
                        fillRule='evenodd'
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
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${USER_API_BASE_URL}/api/users`);
  const data = await res.json();
  if ([404].includes(res.status)) {
    return { props: { data, status: res.status } };
  }
  // Pass data to the page via props
  return { props: { data } };
}
