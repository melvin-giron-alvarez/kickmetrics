import React, { useEffect, useCallback, useContext, useState } from 'react'
import { FootbleContext } from '../pages/Footble'
import { IoMdClose } from "react-icons/io";
import { collection, getDocs, query, db, auth, deleteDoc, doc, where, onAuthStateChanged } from '../firebase'
import AOS from 'aos';
import 'aos/dist/aos.css'

const GameOver = () => {

    const { gameOver, setGameOver, board, setBoard, current, setCurrent, wordSet, setWordSet, correctW, disable, setDisable, updateStats } = useContext(FootbleContext);
    const [stats, setStats] = useState({ played: 0, winPercentage: 0, streak: 0 });

    const closeWL = () => {
        setGameOver({ gameOver: false, guessedW: false });
    }

    const playAgain = () => {
        window.location.reload();
    }

    useEffect(() => {
        AOS.init({duration: 800})
    }, [])

    useEffect(() => {
        if (gameOver.gameOver) {
            updateStats(gameOver.guessedW).then(() => {
                getStats();
            });
        }
    }, [gameOver, updateStats]);

    const getStats = async () => {
        try {
            const user = auth.currentUser;
            if (!user) {
                console.error('no user logged in.');
                return;
            }
            const userId = user.uid;
            const statsRef = collection(db, "statistics");
            const q = query(statsRef, where('userId', '==', userId));
            const querySnapshot = await getDocs(q);
            if (!querySnapshot.empty) {
                const statsInfo = querySnapshot.docs[0].data();
                setStats(statsInfo);
                console.log('Stats fetched:', statsInfo);
            } else {
                console.log('No statistics found for the user.');
            }

        } catch (error) {
            console.error('error fetching stats:', error);
        }
    };

  return (
    <div className='fixed inset-0 flex items-center justify-center'>
    <div data-aos="zoom-in" className='p-5 shadow-[0px_0px_20px_rgba(0,0,0,0.20)] w-[70%] md:w-[35%] bg-[#fff]'>
        <IoMdClose className='w-auto fixed text-black text-[1.5em] right-3 top-3 cursor-pointer' onClick={closeWL} />
        <div className='mx-auto text-center text-black'>
            <h1 className='roboto-medium tracking-tighter text-[1.4em]'>{gameOver.guessedW ? 'YOU WON' : 'YOU LOST'}</h1>
            <p className='roboto-regular text-grey m-3 tracking-tighter text-[1em]' >{gameOver.guessedW ? `You correctly guessed '${correctW.toLowerCase()}'!` : `The correct word was '${correctW.toLowerCase()}'.`}</p>
        </div>
        <div className='my-8 flex flex-wrap justify-center'>
            <h1 className='w-full roboto-medium text-center mb-2 tracking-tight'>Statistics</h1>
            <div className='w-[32%] mt-1 roboto-regular tracking-tighter text-grey text-center'>
                <p className='text-[2em]'>{stats.played}</p>
                <p className='text-[1em]'>Played</p>
            </div>
            <div className='w-[32%] mt-1 roboto-regular tracking-tighter text-grey text-center'>
                <p className='text-[2em]'>{stats.winPercentage}%</p>
                <p className='text-[1em]'>Win %</p>
            </div>
            <div className='w-[32%] mt-1 roboto-regular tracking-tighter text-grey text-center'>
                <p className='text-[2em]'>{stats.streak}</p>
                <p className='text-[1em]'>Streak</p>
            </div>
        </div>
        <div className='text-center mt-6'>
            <button className='w-auto mx-auto roboto-medium text-[.8em] px-10 py-2 border-[1px] text-grey hover:text-black' onClick={playAgain}>Play Again</button>
        </div>
    </div>
    </div>
  )
}

export default GameOver