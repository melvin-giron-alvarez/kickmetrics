import React, { useContext, useEffect } from 'react'
import { FootbleContext } from '../pages/Footble'

const Letter = ({ position, attempt, currentAttempt }) => {
    const { board, correctW, current, disable, setDisable, animateTiles, setAnimateTiles } = useContext(FootbleContext);
    const l = board[attempt][position];

    const correct = correctW.toUpperCase()[position] === l;
    const almost = !correct && l !== '' && correctW.includes(l);
    const lState = current.attempt > attempt && 
    (correct ? 'correct' : almost ? 'almost' : 'wrong')

    useEffect(() => {
        if (l !== '' && !correct && !almost) {
            setDisable((prev) => [...prev, l])
        }
    }, [current.attempt]);


  return (
    <div
    id={lState} 
    className={`roboto-medium border-[1px] m-auto border-grey h-[45px] sm:h-[55px] w-[46px] sm:w-[56px] grid place-items-center text-black text-[1.5em]`}>{l}</div>
  )
}

export default Letter