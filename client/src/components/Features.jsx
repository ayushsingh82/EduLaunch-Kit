import React from 'react'
import { TypewriterEffect } from "../components/ui/typewriter-effect";


export function TypewriterEffectDemo() {
    const words = [
      {
        text: "Features  ",
        className:"text-white text-xl font-medium"
      },
      {
        text: "of  ",
       className:"text-white text-xl font-medium"
      },
      {
        text: "our  ",
        className:"text-white text-xl font-medium"
      },

      {
        text: "EduLaunch-Kit.",
        className: "text-blue-500 text-xl font-medium",
      },
    ];
    return (
      <div className="flex flex-col items-center justify-center h-[10rem] font-medium text-md">
       <div className=''>
        <TypewriterEffect words={words} />
        </div>
      </div>
    );
  }

  const Features = () => {
    return (
      <div className='bg-black min-h-screen'>
        <TypewriterEffectDemo/>
        <div className='flex flex-wrap justify-center items-center gap-8 p-4'>
          {/* First row */}
          <div className='w-1/3 text-white border-2 border-white rounded-lg p-6 bg-blue-600 flex flex-col justify-center items-center h-32'>
            <h1 className='text-xl font-bold mb-2'>Feature 1</h1>
            <p>Description of feature 1.</p>
          </div>
          <div className='w-1/3 text-white border-2 border-white rounded-lg p-6 bg-black flex flex-col justify-center items-center h-32'>
            <h1 className='text-xl font-bold mb-2'>Feature 2</h1>
            <p>Description of feature 2.</p>
          </div>
          <div className='w-1/3 text-white border-2 border-white rounded-lg p-6 bg-black flex flex-col justify-center items-center h-32'>
            <h1 className='text-xl font-bold mb-2'>Feature 3</h1>
            <p>Description of feature 3.</p>
          </div>
  
          {/* Second row */}
          <div className='w-1/3 text-white border-2 border-white rounded-lg p-6 bg-blue-600 flex flex-col justify-center items-center h-32'>
            <h1 className='text-xl font-bold mb-2'>Feature 4</h1>
            <p>Description of feature 4.</p>
          </div>
          <div className='w-1/3 text-white border-2 border-white rounded-lg p-6 bg-blue-600 flex flex-col justify-center items-center h-32'>
            <h1 className='text-xl font-bold mb-2'>Feature 5</h1>
            <p>Description of feature 5.</p>
          </div>
          <div className='w-1/3 text-white border-2 border-white rounded-lg p-6 bg-black flex flex-col justify-center items-center h-32'>
            <h1 className='text-xl font-bold mb-2'>Feature 6</h1>
            <p>Description of feature 6.</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default Features;
  