import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Exam } from '../../types';
import Link from 'next/link';
import { LABS_API_BASE_URL } from '../../../components/const/url-constants';

export default function Concluidos() {
  const [exams, setExams] = useState([] as Exam[]);
  useEffect(() => {
    axios
      .get(`${LABS_API_BASE_URL}/api/lab?status=CLOSE`)
      .then((resp) => setExams(resp.data));
  }, [0]);
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
          </tr>
        </thead>
        <tbody>
          {exams.map((exam, index) => (
            <tr key={index}>
              <td>{exam.id}</td>
              <td>{exam.name}</td>
              <td>{exam.description}</td>
              <td>{exam.status}</td>
              <td>{exam.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
