import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function UserHome() {
  const session = useSession();
  const route = useRouter();
  if (session.status === 'unauthenticated') {
    route.push('/login');
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Consulta</h5>
              <p className='card-text'>Marcar nova consulta</p>
              <a href='/user/consultar' className='btn btn-primary'>
                Ir para serviço de consulta
              </a>
            </div>
          </div>
        </div>

        <div className='col-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Exames</h5>
              <p className='card-text'>Ver exames</p>
              <a href='/user/exams' className='btn btn-primary'>
                Ir para serviço de exames
              </a>
            </div>
          </div>
        </div>

        <div className='col-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Ver Consultas</h5>
              <p className='card-text'>Verificar consultas</p>
              <a href='/user/get-consultas' className='btn btn-primary'>
                Ir para serviço admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
