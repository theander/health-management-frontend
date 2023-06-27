import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Exam } from '../../types';
import jwt_decode from 'jwt-decode';
import { useSession } from 'next-auth/react';
import { LABS_API_BASE_URL } from '../../../components/const/url-constants';

export default function Exams() {
  async function getExams(username: string) {
    const res = await axios.get(
      `${LABS_API_BASE_URL}/api/lab/${user}/get-open-exams`
    );
    return res.data;
  }
  const [exams, setExams] = useState([] as Exam[]);
  const session = useSession();

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
      ? getExams(user).then((res) => setExams(res))
      : null;
  }, [user]);
  return (
    <div className='container'>
      {exams.length > 0 ? (
        <table className='table'>
          <thead>
            <tr>
              <td>Id</td>
              <td> Nome</td>
              <td> Descrição</td>
              <td> Status</td>
              <td> Username</td>
            </tr>
          </thead>
          <tbody>
            {exams.map((exam, index) => (
              <tr key={index}>
                <td>{exam.id} </td>
                <td> {exam.name} </td>
                <td> {exam.description} </td>
                <td> {exam.status} </td>
                <td> {exam.username} </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h2>Sem exames por enquanto</h2>
      )}
    </div>
  );
}
