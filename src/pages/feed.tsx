import React, { Fragment } from 'react';

const Feed = () => {
  return (
    <Fragment>
      <title>Beningin || Feed Gin</title>
      <div className='mx-32 mt-8'>
        <div className='flex justify-end'>
          <button className='bg-white text-xl p-3 ml-auto w-52'>Connect Wallet</button>
        </div>
        <div className='flex justify-between'>
          <div className='bg-black text-white border border-white w-[30%] p-4'>
            <div className='text-center'>
              <h2 className='text-3xl'>Pick a script</h2>
              <div>These help to keep gin alive</div>
            </div>
            <div className='flex my-10'>
              <div className='bg-[#9A19FF] rounded-full h-10 w-2'></div>
              <img className='-rotate-45 mx-4' src="/images/Naruto-scroll.png" alt="" />
              <div>
                <p>Prov - 96hrs cost 50 wbUSD</p>
                <div>Mines $10 QLP/24hrs</div>
              </div>
            </div>
            <div className='flex my-10'>
              <div className='bg-[#1283F3] rounded-full h-10 w-2'></div>
              <img className='-rotate-45 mx-4' src="/images/Naruto-scroll.png" alt="" />
              <div>
                <p>AMo - 72hrs cost 25 WbUSD</p>
                <div>Mines $8 QLP/24hrs</div>
              </div>
            </div>
            <div className='flex my-10'>
              <div className='bg-[#CE56F9] rounded-full h-10 w-2'></div>
              <img className='-rotate-45 mx-4' src="/images/Naruto-scroll.png" alt="" />
              <div>
                <p>PHile - 48 hrs cost 15 WbUSD</p>
                <div>Mines $6.5 QLP/24hrs</div>
              </div>
            </div>
            <div className='flex my-10'>
              <div className='bg-[#F198FF] rounded-full h-10 w-2'></div>
              <img className='-rotate-45 mx-4' src="/images/Naruto-scroll.png" alt="" />
              <div>
                <p>REVE - 24hrs cost 10 WbUSD</p>
                <div>Mines $5 QLP/24hrs</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Feed;