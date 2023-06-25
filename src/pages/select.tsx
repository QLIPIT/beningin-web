import Card from '@/components/Card';
import React from 'react';

const Select = () => {
  return (
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
  );
};

export default Select;