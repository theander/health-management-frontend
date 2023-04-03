export default function Home() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <div className='card'>
            {/*<img className="card-img-top" src="images/admin.jpg" alt="Card image cap">*/}
            <div className='card-body'>
              <h5 className='card-title'>Admin</h5>
              <p className='card-text'>
                Admin é responsável por administrar o sistema
              </p>
              <a href='/admin' className='btn btn-primary'>
                Ir para serviço admin
              </a>
            </div>
          </div>
        </div>

        <div className='col-3'>
          <div className='card'>
            {/*<img className="card-img-top" src="..." alt="Card image cap">*/}
            <div className='card-body'>
              <h5 className='card-title'>Labs</h5>
              <p className='card-text'>
                Labs é o serviço reponsável por cadastrar consultas
              </p>
              <a href='/labs' className='btn btn-primary'>
                Ir para serviço labs
              </a>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card'>
            {/*<img className="card-img-top" src="..." alt="Card image cap">*/}
            <div className='card-body'>
              <h5 className='card-title'>User</h5>
              <p className='card-text'>
                User é o serviço reponsável por cadastrar consultas
              </p>
              <a href='/user' className='btn btn-primary'>
                Ir para serviço user
              </a>
            </div>
          </div>
        </div>
        <div className='col-3'>
          <div className='card'>
            {/*<img className="card-img-top" src="..." alt="Card image cap">*/}
            <div className='card-body'>
              <h5 className='card-title'>Medical</h5>
              <p className='card-text'>
                Medical é o serviço reponsável por cadastrar consultas
              </p>
              <a href='/medical' className='btn btn-primary'>
                Ir para serviço medical
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
