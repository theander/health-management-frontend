import axios from 'axios';
import { getSession, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  MEDICAL_API_BASE_URL,
  USER_API_BASE_URL,
} from '../../../components/const/url-constants';
import Loading from '../../../components/general/loading';

export default function Medical(props: any) {
  const session = useSession();
  const route = useRouter();

  if (session.status === 'loading') {
    return <Loading />;
  } else if (session.status === 'unauthenticated') {
    route.push('/login');
  }

  return (
    <div className='container'>
      {props.consulta?.length > 0 ? (
        <table className='table'>
          <thead>
            <tr>
              <td>Medico</td>
              <td>Nome</td>
              <td>Descrição</td>
              <td>Gerenciar</td>
            </tr>
          </thead>
          <tbody>
            {props.consulta?.map((consulta: any) => (
              <tr key={consulta.id}>
                <td>{consulta.medico}</td>
                <td>{consulta.username}</td>
                <td>{consulta.description}</td>
                <td>
                  <span
                    className='d-inline-block'
                    data-bs-toggle='tooltip'
                    title='Finalizar consulta'
                  >
                    <Link href={`medical/${consulta.id}/concluir`}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-check'
                        viewBox='0 0 16 16'
                      >
                        <path d='M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z' />
                      </svg>
                    </Link>
                  </span>
                  <span> </span>
                  <span
                    className='d-inline-block'
                    data-bs-toggle='tooltip'
                    title='Exames'
                  >
                    <Link href={`/medical/${consulta.username}/exames`}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='16'
                        height='16'
                        fill='currentColor'
                        className='bi bi-calendar-check'
                        viewBox='0 0 16 16'
                      >
                        <path d='M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z' />
                        <path d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z' />
                      </svg>
                    </Link>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>Sem Consultas por enquanto</h2>
      )}
    </div>
  );
}

export async function getServerSideProps(ctx: any) {
  const session = await getSession(ctx);
  let usuario = '';
  if (!session) {
    return {
      props: {
        error: 'Session Error',
      },
    };
  }

  const { accessToken } = { accessToken: '', ...session };
  if (accessToken.length > 25) {
    let { sub: username, roles: userRoles } = jwt_decode(accessToken || '') as {
      roles: string[];
      sub: string;
    };
    usuario = username;
  } else {
    const resp = await fetch(
      `${USER_API_BASE_URL}/api/user-by-email/${session?.user?.email}`
    );
    const { username } = await resp.json();
    usuario = username;
  }

  const res = await axios.get(
    `${MEDICAL_API_BASE_URL}/api/consulta?medico=${usuario}&status=OPEN`
  );
  const consulta = await res.data;
  return {
    props: {
      consulta,
    },
  };
}
