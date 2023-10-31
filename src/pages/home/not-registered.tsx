export default function NotRegistered() {
  return (
    <div className='container col-5 mt-5'>
      <div className='row'>
        <h1>Não registrado</h1>
      </div>
      <div className='row'>
        <p>
          Obs.: O usuário deve estar registrado préviamente para acessar
          aplicação utilizando OAuth2
        </p>
        <p>Entre em contato com um administrador.</p>
      </div>
    </div>
  );
}
