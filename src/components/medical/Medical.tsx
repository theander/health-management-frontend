import React from 'react';
import { Link } from 'react-router-dom';
import './Medical.style';
import UserTable from './components/UserTable';
import { ReceitaForm } from './components/ReceitaForm';

export const Medical: React.FC = () => {
  return (
    <div>
      <nav>
        <ul className='nav justify-content-center gap-3'>
          <li className='nav-item'>
            <button className='btn btn-outline-light'>
              <Link className='text-decoration-none' to='shopcart'>
                Pacientes
              </Link>
            </button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-outline-light' aria-current='page'>
              <Link className='text-decoration-none' to='shop'>
                Gerar receita
              </Link>
            </button>
          </li>

          <li className='nav-item'>
            <button className='btn btn-outline-light'>
              <Link className='text-decoration-none' to='shopcart'>
                Gerar exame
              </Link>
            </button>
          </li>
        </ul>
      </nav>
      <div>
        <UserTable />
        <ReceitaForm />
      </div>
    </div>
  );
};
