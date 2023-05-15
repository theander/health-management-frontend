import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Medical() {
  const session = useSession();
  const route = useRouter();
  if (session.status === 'unauthenticated') {
    route.push('/login');
  }
  async function handleConcluir(event: any) {
    console.log(event.target.value);
  }

  async function getConsultas(username: string) {
    const res = await axios.get(
      `http://localhost:8280/api/consulta?medico=${username}&status=OPEN`
    );
    return res.data;
  }

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
  }, [user]);

  return (
    <div className='container'>
      {result.length > 0 ? (
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
            {result.map((consulta: any) => (
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
