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
            </tr>
          </thead>
          <tbody>
            {result.map((consulta: any) => (
              <tr key={consulta.id}>
                <td>{consulta.username}</td>
                <td>{consulta.medico}</td>
                <td>{consulta.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
