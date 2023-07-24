import Card from '@/components/Card';
import HeaderNav from '@/components/HeaderNav';
import React, { Fragment } from 'react';

const Select = () => {
  return (
    <Fragment>
      <title>Beningin || Select Gin</title>
      <div className='mx-32 mt-8'>
        <HeaderNav />
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