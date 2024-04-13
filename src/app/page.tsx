'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")



  setTimeout(() => {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setText1(data.setup);
        setText2(data.punchline);
        

      });
  }, 5000);


  return (
    <main className="flex bg-yellow-500 text-center h-screen items-center justify-center p-24">
      <div className="jokes">
        <p className="text-sm mb-6 underline">Random69</p>
        <h1 className="text-3xl font-bold">{text1}</h1>
        <p className="text-2xl">{text2}</p>

        {/* <button className="ring-2 ring-white p-4 rounded"  >New Jokes</button> */}
      </div>
    </main>
  );
}
