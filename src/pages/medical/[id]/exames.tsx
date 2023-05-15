import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Exames() {
  const [labs, setLabs] = useState([]);
  const route = useRouter();
  const createExamRoute = `/medical/${route.query.id}/create-exame`;

  async function getLab() {
    const resp = await axios.get(
      ` http://localhost:8380/api/lab?status=OPEN&username=anderUser`
      // ` http://localhost:8380/api/lab?status=OPEN&username=anderUser`
    );
    return await resp.data;
  }

  useEffect(() => {
    getLab().then((resp) => setLabs(resp));
  }, []);

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
