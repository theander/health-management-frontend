import Image from 'next/image';
import ExamIcon from './icons/ExamIcon';
import { useRouter } from 'next/router';

const users = [
  {
    id: 1,
    first_name: 'Gianina',
    last_name: 'Khomishin',
    email: 'gkhomishin0@barnesandnoble.com',
    gender: 'Female',
    ip_address: '213.85.117.157',
  },
  {
    id: 2,
    first_name: 'Jaime',
    last_name: 'Bassil',
    email: 'jbassil1@newsvine.com',
    gender: 'Male',
    ip_address: '88.116.41.117',
  },
  {
    id: 3,
    first_name: 'Phelia',
    last_name: 'Pauel',
    email: 'ppauel2@slashdot.org',
    gender: 'Female',
    ip_address: '50.112.138.75',
  },
  {
    id: 4,
    first_name: 'Margie',
    last_name: 'Chalfant',
    email: 'mchalfant3@oaic.gov.au',
    gender: 'Female',
    ip_address: '201.4.138.213',
  },
  {
    id: 5,
    first_name: 'Julian',
    last_name: 'Taylor',
    email: 'jtaylor4@rediff.com',
    gender: 'Male',
    ip_address: '129.174.177.219',
  },
  {
    id: 6,
    first_name: 'Ira',
    last_name: 'Gorry',
    email: 'igorry5@barnesandnoble.com',
    gender: 'Bigender',
    ip_address: '55.30.64.134',
  },
  {
    id: 7,
    first_name: 'Rae',
    last_name: 'Ibert',
    email: 'ribert6@wufoo.com',
    gender: 'Female',
    ip_address: '165.125.1.89',
  },
  {
    id: 8,
    first_name: 'Filippa',
    last_name: 'Stud',
    email: 'fstud7@un.org',
    gender: 'Female',
    ip_address: '145.98.146.8',
  },
  {
    id: 9,
    first_name: 'Holly',
    last_name: 'MacKerley',
    email: 'hmackerley8@nasa.gov',
    gender: 'Male',
    ip_address: '107.23.19.245',
  },
  {
    id: 10,
    first_name: 'Christiane',
    last_name: 'Gonnely',
    email: 'cgonnely9@i2i.jp',
    gender: 'Bigender',
    ip_address: '83.10.61.25',
  },
];

export default function UserTable() {
  const route = useRouter();

  const handleExam = (id: number) => {
    route.push(`medical/${id}/exam`);
  };
  return (
    <div className='container'>
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td align='right'>Sobrenome</td>
            <td align='right'>email</td>
            <td align='right'>Sexo</td>
            <td align='right'>Ações</td>
          </tr>
        </thead>
        <tbody>
          {users.map((row) => (
            <tr key={row.id}>
              <td>{row.first_name}</td>
              <td align='right'>{row.last_name}</td>
              <td align='right'>{row.email}</td>
              <td align='right'>{row.gender}</td>
              <td align='right'>
                <span
                  onClick={() => {
                    handleExam(row.id);
                  }}
                >
                  <ExamIcon />
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
