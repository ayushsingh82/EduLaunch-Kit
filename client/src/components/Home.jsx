import React from 'react'
import { Vortex } from "../components/ui/vortex";
import { TypewriterEffect } from "../components/ui/typewriter-effect";


export function TypewriterEffectDemo() {
    const words = [
      {
        text: "Build",
        className:"text-white"
      },
      {
        text: "awesome",
          className:"text-white"
      },
      {
        text: "apps",
          className:"text-white"
      },
      {
        text: "with",
             className:"text-white"
      },
      {
        text: "Aceternity.",
        className: "text-purple-500",
      },
    ];
    return (
      <div className="flex flex-col items-center justify-center h-[40rem] ">
      
        <TypewriterEffect words={words} />
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Signup
          </button>
        </div>
      </div>
    );
  }

export function VortexDemo() {
    return (
      <div className="w-full min-h-screen mx-auto rounded-md  h-[30rem] overflow-hidden">
        <Vortex
          backgroundColor="black"
          className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
        >
          <TypewriterEffectDemo/>
        </Vortex>
      </div>
    );
}

const Home = () => {
  return (
    <div>
    <VortexDemo/>
    </div>
  )
}

export default Home
