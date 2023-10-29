import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { getSession, useSession } from 'next-auth/react';
import axios from 'axios';
import {
  MEDICAL_API_BASE_URL,
  USER_API_BASE_URL,
} from '../../../components/const/url-constants';
import Loading from '../../../components/general/loading';

export default function GetConsultas(props) {
  const session = useSession();

  if (session.status === 'loading') {
    <Loading />;
  } else if (session.status === 'unauthenticated') {
    <p>Não autenticado</p>;
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
            {props.consultasAbertas.map((consulta: any) => (
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
  if (!session) {
    return {
      props: {
        error: 'Session Error',
      },
    };
  }

  const { user } = session;
  const resp = await fetch(
    `${USER_API_BASE_URL}/api/user-by-email/${user?.email}`
  );

  const { username } = await resp.json();

  const res = await axios.get(
    `${MEDICAL_API_BASE_URL}/api/consulta?username=${username}&status=OPEN`
  );
  const consultasAbertas = await res.data;
  return {
    props: { consultasAbertas },
  };
}
