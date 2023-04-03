import UserTable from '../../../components/user-table';
import ReceitaForm from '../../../components/ReceitaForm';
import Link from 'next/link';

export default function Medical() {
  return (
    <div>
      <nav>
        <ul className='nav justify-content-center gap-3'>
          <li className='nav-item'>
            <button className='btn btn-outline-light'>
              <Link className='text-decoration-none' href='shopcart'>
                Pacientes
              </Link>
            </button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-outline-light' aria-current='page'>
              <Link className='text-decoration-none' href='shop'>
                Gerar receita
              </Link>
            </button>
          </li>

          <li className='nav-item'>
            <button className='btn btn-outline-light'>
              <Link className='text-decoration-none' href='shopcart'>
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
}
