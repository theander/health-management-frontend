import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Exam, LabType } from '../../../types';
import { useSession } from 'next-auth/react';
import jwt_decode from 'jwt-decode';
import { LABS_API_BASE_URL } from '../../../../components/const/url-constants';

export default function Exames() {
  const route = useRouter();
  const createExamRoute = `/medical/${route.query.id}/create-exame`;

  async function getLab(name: string) {
    const resp = await axios.get(
      `${LABS_API_BASE_URL}/api/lab?status=OPEN&name=${name}`
    );
    return resp.data;
  }

  const [labs, setLabs] = useState([] as LabType[]);
  const session = useSession();

  let user = '';

  if (session.status === 'authenticated') {
    const { accessToken } = { accessToken: '', ...session?.data };
    let { sub: username } = jwt_decode(accessToken || '') as { sub: string };
    user = username;
  } else {
    <p>Não autenticado</p>;
  }
  useEffect(() => {
    session.status === 'authenticated'
      ? getLab(user).then((res) => setLabs(res))
      : null;
  }, [user]);

  return (
    <div>
      <nav>
        <ul className='nav justify-content-center gap-3'>
          <li className='nav-item'>
            <button className='btn btn-outline-light' aria-current='page'>
              <Link className='text-decoration-none' href={createExamRoute}>
                Criar exame
              </Link>
            </button>
          </li>
        </ul>
      </nav>
      <table className='table'>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Médico</td>
            <td>Status</td>
            <td>Descrição</td>
          </tr>
        </thead>
        <tbody>
          {labs.map((consulta: any) => (
            <tr key={consulta.id}>
              <td>{consulta.name}</td>
              <td>{consulta.username}</td>
              <td>{consulta.status}</td>
              <td>{consulta.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
