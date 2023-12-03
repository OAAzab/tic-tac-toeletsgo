'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Cell from './components/cell';

const WinningCombos = [
  [0 , 1 , 2]  , [3 , 4 , 5] , [6 , 7 , 8] , [0 , 3 , 6] ,  [1 , 4 , 7] , [2 , 5 , 8] , [0 , 4 , 8] , [2 , 4 , 6]
]

export default function Home() {
  const [cells , setCells] = useState(["" , "" , "" , "" , "" , "" , "" , "" , ""]);
  const [go , setGo] = useState("X");
  const [winningMessage, setWinningMessage] = useState("");

  
  useEffect(() => {
    WinningCombos.forEach((combo) => {
      const Xwins = combo.every((cell => cells[cell]=== "X"))
      const Circlewins = combo.every((cell => cells[cell]=== "circle"))
      
      if(Xwins) {
        setWinningMessage("🎉 X Wins! 🎉")
      } else if(Circlewins) {
        setWinningMessage("🎉 Circle Wins! 🎉")
      }
    })
  }, [cells])


  useEffect(() => {
    if(cells.every((cell => cell !== "")) && !winningMessage) {
      setWinningMessage("Draw,🤝 Refresh the page to restart.")
    }

  }, [cells , winningMessage])

  return (
    <main className='main-app'>
     <div className="gameBoard">
      {cells.map((cell , index) => (
        <Cell id={index} go={go}
         setGo={setGo} 
         key={index}
          cells={cells} 
          setCells={setCells} 
          cell={cell}
          winningMessage={winningMessage} />
      ))}
     </div>
     <h1>{winningMessage}</h1>
     {!winningMessage && <h1>{`It's ${go} Turn.`}</h1>}
    </main>
  )
}
