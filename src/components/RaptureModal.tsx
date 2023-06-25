import { useState } from "react"

export default ({ state, setState }: { state: any, setState: any }) => {

  return (
    state ? (
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-60" onClick={() => setState()}></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative text-center w-full max-w-lg p-6 mx-auto bg-[#000000] text-white rounded-md shadow-3xl">
            <div className="flex justify-evenly">
              <img src="/images/Naruto-scroll.png" alt="" />
              <h2 className="text-3xl">ABout Rapture process</h2>
              <img src="/images/Naruto-scroll.png" alt="" />
            </div>
            <div className="mt-3">You'd lose your GIN to the <span className="text-[#7ADEFE]">RAPTURE PROCESS</span>  if you don't feed it. Your GIN loses an hour for each script point they have. If a GIN gets “Raptured”, the NFT is lost to a smart contract and enters an automatic auction process in the QLIP Marketplace, a player can either buy it back with QLP tokens or lose it to the market</div>
          </div>
        </div>
      </div>
    ) : ''
  )
}