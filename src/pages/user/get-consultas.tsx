import Link from 'next/link';
import React from 'react';
import { getSession, useSession } from 'next-auth/react';
import axios from 'axios';
import {
  MEDICAL_API_BASE_URL,
  USER_API_BASE_URL,
} from '../../../components/const/url-constants';
import Loading from '../../../components/general/loading';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';

export default function GetConsultas(props: any) {
  const session = useSession();
  const route = useRouter();

  if (session.status === 'loading') {
    return <Loading />;
  } else if (session.status === 'unauthenticated') {
    route.push('/login');
  }
  return (
    <div className='container'>
      <div className='row'>
        <h3>Visualizar consultas</h3>
      </div>

      <div className='row'>
        <nav>
          <ul className='nav justify-content-center gap-3'>
            <li className='nav-item'>
              <button className='btn btn-outline-light' aria-current='page'>
                <Link className='text-decoration-none' href='/user'>
                  Voltar
                </Link>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div className='row'>
        <table className='table'>
          <thead>
            <tr>
              <td>Username</td>
              <td>Médico</td>
              <td>Status</td>
              <td>Descrição</td>
            </tr>
          </thead>
          <tbody>
            {props.consultasAbertas?.map((consulta: any) => (
              <tr key={consulta.id}>
                <td>{consulta.username}</td>
                <td>{consulta.medico}</td>
                <td>{consulta.consultaStatusEnum}</td>
                <td>{consulta.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
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
    `${MEDICAL_API_BASE_URL}/api/consulta?username=${usuario}&status=OPEN`
  );
  const consultasAbertas = await res.data;
  return {
    props: { consultasAbertas },
  };
}
