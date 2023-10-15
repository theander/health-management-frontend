import React from 'react';
import axios from 'axios';

export default function ExamForm() {
  const medicalBaseUrl = process.env.BASE_URL_MEDICAL_API || '';
  const handleSubmit = (event: any) => {
    event.preventDefault();

    axios.post(medicalBaseUrl, {});
  };

  return (
    <div className='form-signin w-50 m-auto'>
      <form onSubmit={handleSubmit}>
        <h1 className='h3 mb-3 fw-normal'>Exame</h1>

        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='floatingExame'
            placeholder='Nome do exame'
            name='email'
          />
          <label htmlFor='floatingExame'>Exame</label>
        </div>
        <div className='form-floating'>
          <input
            type='text'
            className='form-control'
            id='floatingDescricao'
            placeholder='Descrição'
            name='password'
          />
          <label htmlFor='floatingDescricao'>Descrição</label>
        </div>

        <button className='w-100 btn btn-lg btn-primary' type='submit'>
          Sign in
        </button>
        <p className='mt-5 mb-3 text-muted'>
          &copy; 2022–{new Date().getFullYear()}
        </p>
      </form>
    </div>
  );
}
