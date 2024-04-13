'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [text1, setText1] = useState("")
  const [text2, setText2] = useState("")


function jokes(){
  fetch('https://official-joke-api.appspot.com/random_joke')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    setText1(data.setup);
    setText2(data.punchline);
    
  });
}

  
  return (
    <main className="flex bg-yellow-500 text-center h-screen items-center justify-center p-24">
      <div className="jokes">
        <h1 className="text-3xl font-bold">{text1}</h1>
        <p className="text-2xl">{text2}</p>

        <button className="ring-2 ring-white px-4 py-2 rounded" onClick={jokes} >New Jokes 😉</button>
      </div>
    </main>
  );
}
