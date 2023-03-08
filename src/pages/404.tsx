import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Error() {
  const router = useRouter();
  return (
    <div className='container'>
      <div className='row'>
        <h1>Algo não deu muito certo </h1>
      </div>
      <div className='row'>
        <img
          className='rounded mx-auto d-block'
          src='https://cdn.stocksnap.io/img-thumbs/960w/dog-pet_312LN4D7YM.jpg'
          alt='Error'
        />
      </div>
      <div className={'row'}>
        <Link href='/'>
          <span>Clique aqui para tentar mais uma vez </span>
        </Link>
      </div>
    </div>
  );
}
