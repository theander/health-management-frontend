import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { LABS_API_BASE_URL } from '../../../../components/const/url-constants';
import Loading from '../../../../components/general/loading';

export default function Exames({ labs }) {
  const route = useRouter();
  const createExamRoute = `/medical/${route.query.id}/create-exame`;
  const session = useSession();

  if (session.status === 'loading') {
    return <Loading />;
  }

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
export async function getServerSideProps(ctx: { query: { id: any } }) {
  const { id } = ctx.query;
  const resp = await axios.get(
    `${LABS_API_BASE_URL}/api/lab?status=OPEN&name=${id}`
  );
  const labs = await resp.data;
  return {
    props: {
      labs,
    },
  };
}
