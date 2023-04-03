import { useRouter } from 'next/router';

export default function User123() {
  // const route = useRouter();

  // @ts-ignore
  // const id = route?.query?.['ids'][0];
  //     ? route.query.ids[0]
  //     : route.push('/invalid-user');

  //fetch user by id

  return (
    <div className='container'>
      <div className='row'>
        <button
          className='w-100 btn btn-lg btn-primary'
          onClick={() => {
            // route.push(`/registrar-consulta`);
          }}
        >
          Registrar consulta
        </button>
      </div>
      <p>ID:{}</p>
    </div>
  );
}
