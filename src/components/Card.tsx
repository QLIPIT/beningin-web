import React, { useState } from 'react';
import RaptureModal from './RaptureModal';

const Card = () => {
  const [state, setState] = useState(false)

  return (
    <div className='border border-white w-[30%] relative'>
      <img src="/images/character.png" className='w-full' alt="" />
      <div className='absolute bottom-0 bg-black opacity-50 w-full h-40'></div>
      <div className='text-center absolute bottom-6 w-full text-white'>
        <h2 className='text-3xl my-1'>YHWH</h2>
        <p className='text-[#7ADEFE] my-1 text-sm'>FeeD me Scripts!</p>
        <p className='text-sm my-1'>20 SCRIPT POINTS</p>
        <p onClick={() => setState(!state)} className='text-sm my-1 cursor-pointer'>3 hours, 54 mins left to rapture</p>
      </div>
      <RaptureModal state={state} setState={() => setState(!state)} />
    </div>
  );
};

export default Card;