import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Exam } from '../../types';
import Link from 'next/link';
import { LABS_API_BASE_URL } from '../../../components/const/url-constants';
import { useSession } from 'next-auth/react';
import Loading from '../../../components/general/loading';
import { useRouter } from 'next/router';

export default function ParaFazer() {
  const session = useSession();
  const route = useRouter();
  const [exams, setExams] = useState([] as Exam[]);
  useEffect(() => {
    axios
      .get(`${LABS_API_BASE_URL}/api/lab?status=OPEN`)
      .then((resp) => setExams(resp.data));
  }, [0]);

  if (session.status === 'loading') {
    return <Loading />;
  } else if (session.status === 'unauthenticated') {
    route.push('/login');
  }
  return (
    <div className='container'>
      <nav>
        <ul className='nav justify-content-center gap-3'>
          <li className='nav-item'>
            <button className='btn btn-outline-light' aria-current='page'>
              <Link className='text-decoration-none' href='/labs'>
                Voltar
              </Link>
            </button>
          </li>
        </ul>
      </nav>

      <table className='table'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Nome</td>
            <td>Descrição</td>
            <td>Status</td>
            <td>Username</td>
            <td>Concluir</td>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam) => (
            <tr key={exam.id}>
              <td>{exam.id}</td>
              <td>{exam.name}</td>
              <td>{exam.description}</td>
              <td>{exam.status}</td>
              <td>{exam.username}</td>
              <td>
                <Link href={`/labs/${exam.id}/concluir`}>
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
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
