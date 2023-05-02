import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Exam } from '../../types';
import jwt_decode from 'jwt-decode';
import { useSession } from 'next-auth/react';

export default function Exams() {
  async function getExams(username: string) {
    const res = await axios.get(
      `http://localhost:8380/api/lab/${user}/get-open-exams`
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
    </div>
  );
}
