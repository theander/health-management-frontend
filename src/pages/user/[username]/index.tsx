export default function Username() {
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
