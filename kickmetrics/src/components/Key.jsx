import React, { useContext, useState } from 'react'
import { FaDeleteLeft } from "react-icons/fa6";
import { FootbleContext } from '../pages/Footble'

const Key = ({ value, wider, disabled, almost, correct }) => {

    const { board, setBoard, current, setCurrent, wordSet, setWordSet, correctW, gameOver, setGameover, updateStats } = useContext(FootbleContext);
    const [allowTyping, setAllowTyping] = useState(false);

    const selectLetter = () => {
        if (allowTyping) return;

        if (value === "ENTER") {
            if (current.position !== 5) return;
            let curW = '';
            for (let i = 0; i < 5; i++) {
                curW += board[current.attempt][i];
            }
            setCurrent({ attempt: current.attempt + 1, position: 0 });
            if (curW === correctW) {
                setGameOver({gameOver: true, guessedW: true});
                setAllowTyping(true);
                updateStats(true);
            }
            if (current.attempt === 5) {
                setGameOver({gameOver: true, guessedW: false});
                updateStats(false);
            }

        } else if (value === 'DELETE') {
            if (current.position === 0) return;
            const newBoard = [...board];
            newBoard[current.attempt][current.position - 1] = '';
            setBoard(newBoard)
            setCurrent({ ...current, position: current.position - 1 })
        } else {
            if (current.position > 4 ) return;
            const newBoard = [...board];
            newBoard[current.attempt][current.position] = value;
            setBoard(newBoard)
            setCurrent({ ...current, position: current.position + 1 })
    }
}

const letterState = correct ? 'correct' : almost ? 'almost' : disabled ? 'wrong' : '';


  return (
    <div 
    onClick={selectLetter}
    id={letterState}
    className={`roboto-medium h-[33px] sm:h-[38px] md:h-[50px] bg-[#e0e0e0] grid place-items-center text-black text-[.7em] sm:text-[.8em] md:text-[1em] mx-[2px] my-[1px] cursor-pointer ${wider === true ? 'w-[58px] sm:w-[63px] md:w-[73px]' : 'w-[30px] sm:w-[35px] md:w-[47px]' }`}>
    {value === "DELETE" ? <FaDeleteLeft /> : value}</div>
  )
}

export default Key