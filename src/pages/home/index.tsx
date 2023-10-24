import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Loading from '../../../components/general/loading';

export default function Home(props: any) {
  const [showChild, setShowChild] = useState(false);
  const session = useSession();
  const router = useRouter();
  let role;
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === 'undefined') {
    return <></>;
  } else {
    if (session.status === 'loading') {
      return <Loading />;
    } else if (session.status !== 'authenticated') {
      router.push('/login');
    }
    role = localStorage.getItem('role');
  }
  return (
    <div className='container'>
      <div className='row'>
        {role === 'ROLE_ADMIN' ? (
          <div className='col-3 p-2'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Admin</h5>
                <p className='card-text'>
                  Admin é responsável por administrar o sistema
                </p>
                <a href='/admin' className='btn btn-primary'>
                  Ir para serviço admin
                </a>
              </div>
            </div>
          </div>
        ) : null}

        {role === 'ROLE_ADMIN' || role === 'ROLE_LAB' ? (
          <div className='col-3 p-2'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Labs</h5>
                <p className='card-text'>
                  Labs é o serviço reponsável por cadastrar consultas
                </p>
                <a href='/labs' className='btn btn-primary'>
                  Ir para serviço labs
                </a>
              </div>
            </div>
          </div>
        ) : null}
        {role === 'ROLE_ADMIN' || role === 'ROLE_USER' ? (
          <div className='col-3 p-2'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>User</h5>
                <p className='card-text'>
                  User é o serviço reponsável por cadastrar consultas
                </p>
                <a href='/user' className='btn btn-primary'>
                  Ir para serviço user
                </a>
              </div>
            </div>
          </div>
        ) : null}
        {role === 'ROLE_ADMIN' || role === 'ROLE_MEDICAL' ? (
          <div className='col-3 p-2'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Medical</h5>
                <p className='card-text'>
                  Medical é o serviço reponsável por cadastrar consultas
                </p>
                <a href='/medical' className='btn btn-primary'>
                  Ir para serviço medical
                </a>
              </div>
            </div>
          </div>
        ) : null}
        {role !== '' ? (
          <div className='col-3 p-2'>
            <div className='card'>
              <div className='card-body'>
                <h5 className='card-title'>Statisticas</h5>
                <p className='card-text'>
                  Statisticas é o serviço reponsável por mostrar as estatisticas
                  do sistema
                </p>
                <a href='/statistics' className='btn btn-primary'>
                  Verificar estatisticas do sistema
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
