import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const User: React.FC = () => {
  const receipeMock = [
    {
      id: '',
      title: 'Receita',
      body: 'Dipirona',
    },
    {
      id: '',
      title: 'Receita',
      body: 'Dipirona',
    },
    {
      id: '',
      title: 'Receita',
      body: 'Paracetamol',
    },
    {
      id: '',
      title: 'Receita',
      body: 'Dipirona',
    },
  ];

  const examsMock = [
    {
      id: '',
      title: 'glicose',
      body: '90',
    },
    {
      id: '',
      title: 'frequencia cardiaca',
      body: '65',
    },
    {
      id: '',
      title: 'Pressão',
      body: '12/8',
    },
    {
      id: '',
      title: 'Receita',
      body: 'Dipirona',
    },
  ];

  useEffect(() => {}, [0]);
  return (
    <div>
      <nav>
        <ul className='nav justify-content-center gap-3'>
          <li className='nav-item'>
            <button className='btn btn-outline-light' aria-current='page'>
              <Link className='text-decoration-none' to='shop'>
                Visualizar receitas
              </Link>
            </button>
          </li>
          <li className='nav-item'>
            <button className='btn btn-outline-light'>
              <Link className='text-decoration-none' to='shopcart'>
                Visualizar exames
              </Link>
            </button>
          </li>
        </ul>
      </nav>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Número da venda</th>
            <th scope='col'>Quantidade</th>
            <th scope='col'>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {receipeMock.map((item) => {
            return (
              <tr>
                <th scope='row'>{item.title}</th>
                <td>{item.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Número da venda</th>
            <th scope='col'>Quantidade</th>
            <th scope='col'>Valor Total</th>
          </tr>
        </thead>
        <tbody>
          {examsMock.map((item) => {
            return (
              <tr>
                <th scope='row'>{item.title}</th>
                <td>{item.body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
