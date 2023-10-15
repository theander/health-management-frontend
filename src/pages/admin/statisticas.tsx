import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';

export default function Statisticas(props) {
  return (
    <div className='container'>
      <div className='row'>
        <h1>Usuários por mês</h1>
      </div>
      <div className='row'>
        <LineChart
          width={600}
          height={300}
          data={props.data}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Line
            name='Usuarios por mês'
            type='monotone'
            dataKey='uv'
            stroke='#8884d8'
          />
          <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
        </LineChart>
      </div>
    </div>
  );
}

export function getServerSideProps(context) {
  console.log('Context: ', context);
  return {
    props: {
      data: [
        { name: 'PageA', uv: 400 },
        { name: 'PageB', uv: 300 },
      ],
    },
  };
}
