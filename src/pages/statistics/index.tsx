import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import {
  LABS_API_BASE_URL,
  MEDICAL_API_BASE_URL,
  USER_API_BASE_URL,
} from '../../../components/const/url-constants';
import React, { useEffect, useState } from 'react';

export default function Statisticas(props: any) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <div className='container'>
        <div className='row'>
          <div className='d-flex justify-content-center'>
            <h1>Usuários por mês</h1>
          </div>
          <div className='d-flex justify-content-center'>
            <LineChart
              width={1200}
              height={400}
              data={props.userData}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type='monotone' dataKey='uv' stroke='#8884d8' />
              <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
        </div>

        <div className='row'>
          <div className='d-flex justify-content-center'>
            <h1>Exames realizados por mês</h1>
          </div>
          <div className='d-flex justify-content-center'>
            <LineChart
              width={1200}
              height={400}
              data={props.labData}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type='monotone' dataKey='uv' stroke='#8884d8' />
              <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
        </div>

        <div className='row'>
          <div className='d-flex justify-content-center'>
            <h1>Consultas por mês</h1>
          </div>
          <div className='d-flex justify-content-center'>
            <LineChart
              width={1200}
              height={400}
              data={props.conData}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type='monotone' dataKey='uv' stroke='#8884d8' />
              <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
        </div>

        <div className='row'>
          <div className='d-flex justify-content-center'>
            <h1>Receitas por mês</h1>
          </div>
          <div className='d-flex justify-content-center'>
            <LineChart
              width={1200}
              height={400}
              data={props.medData}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type='monotone' dataKey='uv' stroke='#8884d8' />
              <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
            </LineChart>
          </div>
        </div>
      </div>
    );
  }
}

export async function getServerSideProps() {
  const resUser = await fetch(`${USER_API_BASE_URL}/api/users/count`);
  const dataUser = await resUser.json();
  let userData: ReadonlyArray<{ name: string; uv: any }> = [];

  const resLab = await fetch(`${LABS_API_BASE_URL}/api/lab/count`);
  const dataLab = await resLab.json();
  let labData: ReadonlyArray<{ name: string; uv: any }> = [];

  const resMed = await fetch(`${MEDICAL_API_BASE_URL}/api/list/count`);
  const dataMed = await resMed.json();
  let medData: ReadonlyArray<{ name: string; uv: any }> = [];

  const resCon = await fetch(`${MEDICAL_API_BASE_URL}/api/consulta/count`);
  const dataCon = await resCon.json();
  let conData: ReadonlyArray<{ name: string; uv: any }> = [];

  for (const [key, value] of Object.entries(dataCon)) {
    conData = [...conData, { name: mapMonth(Number(key)), uv: value }];
  }
  for (const [key, value] of Object.entries(dataMed)) {
    medData = [...medData, { name: mapMonth(Number(key)), uv: value }];
  }

  for (const [key, value] of Object.entries(dataUser)) {
    userData = [...userData, { name: mapMonth(Number(key)), uv: value }];
  }
  for (const [key, value] of Object.entries(dataLab)) {
    labData = [...labData, { name: mapMonth(Number(key)), uv: value }];
  }

  return {
    props: {
      userData,
      labData,
      medData,
      conData,
    },
  };
}

export function mapMonth(month: number) {
  const months = [
    '',
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];
  return months[month];
}
