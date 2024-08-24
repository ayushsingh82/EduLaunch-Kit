import React from 'react';
import { TypewriterEffect } from "../components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Features  ",
      className: "text-white text-xl font-medium"
    },
    {
      text: "of  ",
      className: "text-white text-xl font-medium"
    },
    {
      text: "our  ",
      className: "text-white text-xl font-medium"
    },
    {
      text: "EduLaunch-Kit.",
      className: "text-blue-500 text-xl font-medium",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem] font-medium text-md">
      <div>
        <TypewriterEffect words={words} />
      </div>
    </div>
  );
}

const Features = () => {
  return (
    <div className='bg-black min-h-screen'>
      <TypewriterEffectDemo />
      <div className='flex flex-wrap justify-center items-center gap-8 p-4'>
        {/* First row */}
        <div className='w-1/3 text-white border-2 border-white rounded-lg p-6 bg-blue-600 flex flex-col justify-center items-center h-32'>
          <span className='text-3xl'>🛠️</span>
          <h1 className='text-xl font-bold mb-2'>Reactvite + Tailwind</h1>
          <p>Seamless integration with Reactvite and Tailwind for modern UI development.</p>
        </div>
        <div className='w-1/3 text-white border-2 border-white rounded-lg p-6 bg-black flex flex-col justify-center items-center h-32'>
          <span className='text-3xl'>⚙️</span>
          <h1 className='text-xl font-bold mb-2'>Hardhat</h1>
          <p>Efficient development and testing of smart contracts using Hardhat.</p>
        </div>
        <div className='w-1/3 text-white border-2 border-white rounded-lg p-6 bg-black flex flex-col justify-center items-center h-32'>
          <span className='text-3xl'>💼</span>
          <h1 className='text-xl font-bold mb-2'>Aceternity UI</h1>
          <p>Advanced UI components for Aceternity integration.</p>
        </div>

        {/* Second row */}
        <div className='w-1/3 text-white border-2 border-white rounded-lg p-6 bg-blue-600 flex flex-col justify-center items-center h-32'>
          <span className='text-3xl'>🔗</span>
          <h1 className='text-xl font-bold mb-2'>Direct Deployment</h1>
          <p>Easy and straightforward deployment of your application.</p>
        </div>
        <div className='w-1/3 text-white border-2 border-white rounded-lg p-6 bg-blue-600 flex flex-col justify-center items-center h-32'>
          <span className='text-3xl'>🌐</span>
          <h1 className='text-xl font-bold mb-2'>Rainbow Kit & Wallet Connect</h1>
          <p>Integration with Rainbow Kit for wallet connection and network setup to EduChain.</p>
        </div>
        <div className='w-1/3 text-white border-2 border-white rounded-lg p-6 bg-black flex flex-col justify-center items-center h-32'>
          <span className='text-3xl'>🪙</span>
          <h1 className='text-xl font-bold mb-2'>EduChain DeFi DEX</h1>
          <p>Decentralized exchange on EduChain to swap tokens.</p>
        </div>
        <div className='w-1/3 text-white border-2 border-white rounded-lg p-6 bg-black flex flex-col justify-center items-center h-32'>
          <span className='text-3xl'>🎨</span>
          <h1 className='text-xl font-bold mb-2'>Direct NFT Minting</h1>
          <p>Mint NFTs directly on EduChain.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;
