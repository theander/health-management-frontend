import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import jwt_decode from 'jwt-decode';

export default function Home() {
  const session = useSession();
  const route = useRouter();
  let role;
  if (session.status === 'unauthenticated') {
    route.push('/login');
  }
  if (session.status === 'authenticated') {
    const { accessToken } = { accessToken: '', ...session?.data };
    let { roles: userRoles } = jwt_decode(accessToken || '') as {
      roles: string[];
    };
    role = userRoles[0];
  }
  return (
    <div className='container'>
      <div className='row'>
        {role === 'ROLE_ADMIN' ? (
          <div className='col-3'>
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
          <div className='col-3'>
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
          <div className='col-3'>
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
          <div className='col-3'>
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
      </div>
    </div>
  );
}
