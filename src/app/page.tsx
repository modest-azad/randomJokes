'use client'

import Image from "next/image";
import { useState } from "react";
import { setTimeout } from "timers/promises";

export default function Home() {
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")



  function click(){
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setText1(data.setup || data.message);
        setText2(data.punchline);
      });
  };



  return (
    <main className="flex bg-yellow-100 w-full  text-center h-screen items-center justify-center p-[5%]">
      <div className="jokesw-full">
        <p className="text-sm mb-6 underline">Random69</p>
        <h1 className="text-3xl font-bold mt-4">{text1}</h1>
        <p className="text-2xl">{text2}</p>

        <button className="ring-2 bg-yellow-200 ring-yelow-700 text-sm mt-6 px-4 py-2 rounded-3xl" onClick={click} >New Jokes</button>
      </div>
    </main>
  );
}
