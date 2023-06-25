import Card from '@/components/Card';
import React, { Fragment } from 'react';

const Select = () => {
  return (
    <Fragment>
      <title>Beningin || Select Gin</title>
      <div className='mx-32 mt-8'>
        <div className='flex justify-end'>
          <button className='bg-white text-xl p-3 ml-auto w-52'>Connect Wallet</button>
        </div>
        <div className='flex justify-between mt-10'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </Fragment>
  );
};

export default Select;