import React from 'react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

interface IExam {
  id: number;
  exam: string;
}

export default function Labs() {
  const { data: session, status } = useSession();
  console.log(session, status);
  return (
    <div>
      <nav>
        <ul className='nav justify-content-center gap-3'>
          <li className='nav-item'>
            <button className='btn btn-outline-light' aria-current='page'>
              <Link href='/shop'>Exames pendentes</Link>
            </button>
          </li>

          <li className='nav-item'>
            <button className='btn btn-outline-light'>
              <Link href='/shopcart'>Exames realizados</Link>
            </button>
          </li>
        </ul>
      </nav>

      <div className='container'>
        <table>
          <thead>
            <tr>
              <td>Exame id</td>
              <td align='left'>nome exame</td>
            </tr>
          </thead>
          <tbody>
            {examesPendentes().map((exam) => (
              <tr key={exam.id}>
                <td>{exam.id}</td>
                <td scope='row'>{exam.exam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function examesPendentes(): IExam[] {
  return [
    {
      id: 1,
      exam: "Crohn's disease of small intestine with unspecified complications",
    },
    {
      id: 2,
      exam: 'Person injured while boarding or alighting from special all-terrain or other off-road motor vehicle',
    },
    {
      id: 3,
      exam: 'Acute hematogenous osteomyelitis, unspecified tibia and fibula',
    },
    {
      id: 4,
      exam: 'Abscess of tendon sheath, shoulder',
    },
    {
      id: 5,
      exam: 'Infection of intervertebral disc (pyogenic), cervicothoracic region',
    },
  ];
}
