import React, { useEffect, useCallback, useContext, useState } from 'react'
import { FootbleContext } from '../pages/Footble'
import Key from './Key'

const Keyboard = () => {

    const { board, setBoard, current, setCurrent, wordSet, setWordSet, correctW, disable, setDisable, gameOver, setGameOver, updateStats } = useContext(FootbleContext);
    const [keyStates, setKeyStates] = useState({});
    const [allowTyping, setAllowTyping] = useState(false);

    const r1 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
    const r2 = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
    const r3 = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']

    const handleKeyboard = useCallback((e) => {
        const key = e.key.toUpperCase();
        if (allowTyping) return;

        if (key === 'ENTER') {
            if (current.position !== 5) return;
            let curW = '';
            for (let i = 0; i < 5; i++) {
                curW += board[current.attempt][i];
            }
            updateKeyStates(curW);
            setCurrent({ attempt: current.attempt + 1, position: 0 });
            if (curW === correctW) {
                setGameOver({gameOver: true, guessedW: true});
                setAllowTyping(true);
                updateStats(true);
            }
            if (current.attempt === 5 && curW != correctW) {
                setGameOver({gameOver: true, guessedW: false})
                updateStats(false);
            }

        } else if (key === 'BACKSPACE') {
            if (current.position === 0) return;
            const newBoard = [...board];
            newBoard[current.attempt][current.position - 1] = '';
            setBoard(newBoard);
            setCurrent({ ...current, position: current.position - 1 });
        } else {
            const allKeys = [...r1, ...r2, ...r3];
            allKeys.forEach((validKey) => {
                if (key === validKey.toUpperCase()) {
                    if (current.position > 4) return;
                    const newBoard = [...board];
                    newBoard[current.attempt][current.position] = key;
                    setBoard(newBoard);
                    setCurrent({ ...current, position: current.position + 1 });
                }
            });
        }
    }, [allowTyping, board, current, setBoard, setCurrent, r1, r2, r3]);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyboard);
        return () => {
            document.removeEventListener('keydown', handleKeyboard)
        };
    }, [handleKeyboard]);

    const updateKeyStates = (word) => {
        const newKeyStates = { ...keyStates };

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (correctW[i] === char) {
                newKeyStates[char] = 'correct';
            } else if (correctW.includes(char)) {
                if (newKeyStates[char] !== 'correct') {
                    newKeyStates[char] = 'almost';
                }
            } else {
                newKeyStates[char] = 'wrong';
            }
        }

        setKeyStates(newKeyStates);
    };

  return (
    <div className='w-[290px] sm:w-[400px] md:w-[520px] mx-auto justify-between'>
        <div className='w-full flex flex-row mb-1 justify-center'>
        {r1.map((key) => (
                    <Key key={key} value={key} disabled={disable.includes(key)} correct={keyStates[key] === 'correct'} almost={keyStates[key] === 'almost'} />
                ))}
        </div>
        <div className='w-full flex flex-row mb-1 justify-center'>
        {r2.map((key) => (
                    <Key key={key} value={key} disabled={disable.includes(key)} correct={keyStates[key] === 'correct'} almost={keyStates[key] === 'almost'} />
                ))}
        </div>
        <div className='w-full flex flex-row mb-1 justify-center'>
            <Key value={'ENTER'} wider />
            {r3.map((key) => (
                    <Key key={key} value={key} disabled={disable.includes(key)} correct={keyStates[key] === 'correct'} almost={keyStates[key] === 'almost'} />
                ))}
            <Key value={'DELETE'} wider />
        </div>
    </div>
  )
}

export default Keyboard