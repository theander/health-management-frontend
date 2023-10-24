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
            <h5 className='p-2'>Usuários por mês</h5>
          </div>
          <div className='d-flex justify-content-center p-2'>
            <LineChart
              width={1200}
              height={300}
              data={props.userData}
              margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
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
            <h5 className='p-2'>Exames realizados por mês</h5>
          </div>
          <div className='d-flex justify-content-center'>
            <LineChart
              width={1200}
              height={300}
              data={props.labData}
              margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
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
            <h5 className='p-2'>Consultas por mês</h5>
          </div>
          <div className='d-flex justify-content-center'>
            <LineChart
              width={1200}
              height={300}
              data={props.conData}
              margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
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
            <h5 className='p-2'>Receitas por mês</h5>
          </div>
          <div className='d-flex justify-content-center'>
            <LineChart
              width={1200}
              height={300}
              data={props.medData}
              margin={{ top: 10, right: 0, bottom: 10, left: 0 }}
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
  const respUser = fetch(`${USER_API_BASE_URL}/api/users/count`);
  const respLab = fetch(`${LABS_API_BASE_URL}/api/lab/count`);
  const respMed = fetch(`${MEDICAL_API_BASE_URL}/api/list/count`);
  const respCon = fetch(`${MEDICAL_API_BASE_URL}/api/consulta/count`);
  const [resUser, resLab, resMed, resCon] = await Promise.all([
    respUser,
    respLab,
    respMed,
    respCon,
  ]);
  const dataUser = await resUser.json();
  let userData: ReadonlyArray<{ name: string; uv: any }> = [];

  const dataLab = await resLab.json();
  let labData: ReadonlyArray<{ name: string; uv: any }> = [];
  const dataMed = await resMed.json();

  let medData: ReadonlyArray<{ name: string; uv: any }> = [];
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
