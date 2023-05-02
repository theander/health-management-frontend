import React from 'react';

export default function Labs() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Exames</h5>
              <p className='card-text'>Ver exames</p>
              <a href='/labs/para-fazer' className='btn btn-primary'>
                Consultar exames para realizar
              </a>
            </div>
          </div>
        </div>

        <div className='col-3'>
          <div className='card'>
            <div className='card-body'>
              <h5 className='card-title'>Ver exames</h5>
              <p className='card-text'>Verificar exames</p>
              <a href='/labs/concluidos' className='btn btn-primary'>
                Consultar exames realizados
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
