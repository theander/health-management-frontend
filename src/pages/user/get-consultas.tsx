import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useSession } from 'next-auth/react';
import axios from 'axios';

export default function GetConsultas() {
  async function getConsultas(username: string) {
    const res = await axios.get(
      `http://localhost:8280/api/consulta?username=${username}`
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
              <td>Nome</td>
              <td>Username</td>
              <td>Descrição</td>
              <td>manage</td>
            </tr>
          </thead>
          <tbody>
            {result.map((consulta: any) => (
              <tr key={consulta.id}>
                <td>{consulta.username}</td>
                <td>{consulta.medico}</td>
                <td>{consulta.description}</td>
                <td>
                  <Link href={`/user/${consulta.id}/delete`}>
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
