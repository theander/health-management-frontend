import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Link from 'next/link';
import { MEDICAL_API_BASE_URL } from '../../../components/const/url-constants';

export default function Consultas() {
  async function handleConcluir(event: any) {
    console.log(event.target.value);
  }
  async function getConsultas(username: string) {
    const res = await axios.get(
      `${MEDICAL_API_BASE_URL}/api/consulta?medico=${username}`
    );
    return res.data;
  }
  const session = useSession();
  const [result, setResult] = useState([]);
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
      ? getConsultas(user).then((res) => setResult(res))
      : null;
  }, [user, result]);

  return (
    <div>
      <div className='container'>
        <table className='table'>
          <thead>
            <tr>
              <td>Medico</td>
              <td>Nome</td>
              <td>Descrição</td>
              <td>Concluir</td>
            </tr>
          </thead>
          <tbody>
            {result.map((consulta: any) => (
              <tr key={consulta.id}>
                <td>{consulta.medico}</td>
                <td>{consulta.username}</td>
                <td>{consulta.description}</td>
                <td>
                  <button onClick={handleConcluir} value={consulta.id}>
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
                        fill-rule='evenodd'
                        d='M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z'
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
