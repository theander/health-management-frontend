import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
interface IExam {
  id: number;
  exam: string;
}
export const Labs1: React.FC = () => {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <nav>
        <ul className='nav justify-content-center gap-3'>
          <li className='nav-item'>
            <button className='btn btn-outline-light' aria-current='page'>
              <Link className='text-decoration-none' to='shop'>
                Teste
              </Link>
            </button>
          </li>

          <li className='nav-item'>
            <button className='btn btn-outline-light'>
              <Link className='text-decoration-none' to='shopcart'>
                Teste{' '}
              </Link>
            </button>
          </li>
        </ul>
      </nav>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size='small' aria-label='a dense table'>
          <TableHead>
            <TableRow>
              <TableCell>Exame id</TableCell>
              <TableCell align='left'>nome exame</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {examesPendentes().map((exam) => (
              <TableRow
                key={exam.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  {exam.id}
                </TableCell>
                <TableCell component='th' scope='row'>
                  {exam.exam}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
function examesPendentes(): IExam[] {
  return [
    {
      id: 1,
      exam: "Crohn's disease of small intestine with unspecified complications",
    },
    {
      id: 2,
      exam: 'Person injured while boarding or alighting from special all-terrain or other off-road motor vehicle',
    },
    {
      id: 3,
      exam: 'Acute hematogenous osteomyelitis, unspecified tibia and fibula',
    },
    {
      id: 4,
      exam: 'Abscess of tendon sheath, shoulder',
    },
    {
      id: 5,
      exam: 'Infection of intervertebral disc (pyogenic), cervicothoracic region',
    },
  ];
}
