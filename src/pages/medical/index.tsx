export default function Medical() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Pacientes</h5>
              <a href='/medical/consultas' className='btn btn-primary'>
                Ir para pacientes
              </a>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Receita</h5>
              <a href='/medical/receitas' className='btn btn-primary'>
                Gerar receita
              </a>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Exames</h5>
              <a href='/medical/exames' className='btn btn-primary'>
                Ir para exames
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
