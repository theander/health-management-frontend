import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Loading from '../../../components/general/loading';

export default function Labs() {
  const session = useSession();
  const route = useRouter();
  if (session.status === 'loading') {
    return <Loading />;
  }
  if (session.status === 'unauthenticated') {
    route.push('/login');
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Exames</h5>
              <p className='card-text'>Ver exames</p>
              <a href='/labs/para-fazer' className='btn btn-primary'>
                Consultar exames para realizar
              </a>
            </div>
          </div>
        </div>

        <div className='col-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Ver exames</h5>
              <p className='card-text'>Verificar exames</p>
              <a href='/labs/concluidos' className='btn btn-primary'>
                Consultar exames realizados
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
