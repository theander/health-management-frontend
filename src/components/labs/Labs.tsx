import React from 'react';
import { Link } from 'react-router-dom';

export const Labs: React.FC = () => {
  return (
    <nav>
      <ul className='nav justify-content-center gap-3'>
        <li className='nav-item'>
          <button className='btn btn-outline-light' aria-current='page'>
            <Link className='text-decoration-none' to='shop'>
              Exames pendentes
            </Link>
          </button>
        </li>

        <li className='nav-item'>
          <button className='btn btn-outline-light'>
            <Link className='text-decoration-none' to='shopcart'>
              Exames realizados
            </Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};
