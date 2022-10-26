import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/UserService';

export const Login: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(
    {} as { username: string; password: string }
  );
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && localStorage.getItem('token') !== null) {
      navigate('/home');
    }
  }, [loading, navigate]);

  const submitLogin = (event: any) => {
    event.preventDefault();
    setLoading(true);
    //setUser({username:event.target?.username,password:event.target?.password});

    const resp = login(user.username, user.password)
      .then(user => {
        localStorage.setItem('access_token', user.access_token);
        localStorage.setItem('refresh_token', user.refresh_token);
      })
      .catch(err => {
        console.log('Erro:', err.message);
      });

    setTimeout(() => {
      localStorage.setItem('token', 'token');
      setLoading(false);
    }, 2000);
  };

  const handleFormField = (e: any) => {
    const { name, value } = e.target;
    setUser(previousValue => {
      return { ...previousValue, [name]: value };
    });
    console.log('User: ', user);
  };

  return (
    <form onSubmit={submitLogin}>
      <label>Usuário</label>
      <input type="text" onChange={handleFormField} name="username" />
      <label>Senha</label>
      <input type="password" onChange={handleFormField} name="password" />
      <div>
        {loading && <div></div>}
        <button>Entrar</button>
      </div>
    </form>
  );
};
