import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Exam } from '../../types';

export default function Concluidos() {
  const [exams, setExams] = useState([] as Exam[]);
  useEffect(() => {
    axios
      .get('http://localhost:8380/api/lab?status=CLOSE')
      .then((resp) => setExams(resp.data));
  }, [0]);
  return (
    <div className='container'>
      <table className='table'>
        <thead>
          <tr>
            <td>Id</td>
            <td>Nome</td>
            <td>Descrisção</td>
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
