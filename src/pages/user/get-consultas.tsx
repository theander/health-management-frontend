import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';
import { useSession } from 'next-auth/react';
import axios from 'axios';

export default function GetConsultas() {
  async function getConsultas(username: string) {
    const res = await axios.get(
      `http://localhost:8280/api/consulta?username=${username}&status=OPEN`
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
  }, [user]);

  return (
    <div className='container'>
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
          {result.map((consulta: any) => (
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
  );
}
