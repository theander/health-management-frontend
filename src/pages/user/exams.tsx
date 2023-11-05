import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Exam } from '../../types';
import jwt_decode from 'jwt-decode';
import { getSession, useSession } from 'next-auth/react';
import {
  LABS_API_BASE_URL,
  USER_API_BASE_URL,
} from '../../../components/const/url-constants';
import Loading from '../../../components/general/loading';
import { useRouter } from 'next/router';

export default function Exams(props) {
  const session = useSession();
  const route = useRouter();

  if (session.status === 'loading') {
    return <Loading />;
  } else if (session.status === 'unauthenticated') {
    route.push('/login');
  }

  return (
    <div className='container'>
      {props.exames?.length > 0 ? (
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
            {props.exames.map((exam, index) => (
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

export async function getServerSideProps(ctx) {
  const session = await getSession(ctx);
  let usuario = '';
  if (!session) {
    return {
      props: {
        error: 'Session Error',
      },
    };
  }

  const { accessToken } = { accessToken: '', ...session };
  if (accessToken.length > 25) {
    let { sub: username, roles: userRoles } = jwt_decode(accessToken || '') as {
      roles: string[];
      sub: string;
    };
    usuario = username;
  } else {
    const resp = await fetch(
      `${USER_API_BASE_URL}/api/user-by-email/${session?.user?.email}`
    );
    const { username } = await resp.json();
    usuario = username;
  }
  const res = await axios.get(
    `${LABS_API_BASE_URL}/api/lab/${usuario}/get-open-exams`
  );
  const exames = res.data;

  return {
    props: {
      exames,
    },
  };
}
