import React, { createContext, useEffect, useState } from 'react'
import { BgColor, Welcome, Board, Keyboard, GameOver } from '../components';
import { boardDefault, generateWord } from '../constants';
import { collection, query, where, getDocs, addDoc, doc, getDoc, updateDoc, auth, db } from '../firebase';

export const FootbleContext = createContext();

const Footble = () => {
    BgColor('#EFEEED')

    const [correctW, setCorrectW] = useState('')
    const [board, setBoard] = useState(boardDefault);
    const [current, setCurrent] = useState({ attempt: 0, position: 0 });
    const [wordSet, setWordSet] = useState(new Set());
    const [disable, setDisable] = useState([]);
    const [gameOver, setGameOver] = useState({gameOver: false, guessedW: false});

    useEffect(() => {
      generateWord().then((words) => {
          setWordSet(words.wordSet);
          setCorrectW(words.todaysWord);
      });
  }, [setWordSet, setCorrectW]);

  const statistics = async (played, winPercentage, streak) => {
    try {
        const user = auth.currentUser;
        if (!user) {
            console.error('no user logged in.');
            return;
        }

        const statsRef = collection(db, 'statistics');
        const userId = user.uid
        const userDocRef = doc(db, 'users', userId);
        const userDoc = await getDoc(userDocRef);
        const userData = userDoc.data();
        const userFirst = userData.firstName; 
        const q = query(statsRef, where('userId', '==', userId));
        const querySnapshot = await getDocs(q);
        
        if (querySnapshot.empty) {
            const newStats = { 
                id: userFirst, 
                played: played, 
                winPercentage: winPercentage,
                streak: streak,
                userId: userId
            };
            await addDoc(statsRef, newStats);
        } else {
            const docId = querySnapshot.docs[0].id;
            const statsDocRef = doc(db, 'statistics', docId);
            await updateDoc(statsDocRef, {
              played: played, 
              winPercentage: winPercentage,
              streak: streak
            });
        }
    } catch (error) {
        console.error('error updating stats:', error);
    }
};

const updateStats = async (won) => {
  const user = auth.currentUser;
    if (!user) {
        return;
    }
    const userId = user.uid;
    const statsRef = collection(db, 'statistics');
    const q = query(statsRef, where('userId', '==', userId));
    const querySnapshot = await getDocs(q);

    let played = 0;
    let winPercentage = 0;
    let streak = 0;

    if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        played = docData.played;
        winPercentage = docData.winPercentage;
        streak = docData.streak;
    }

    played += 1;

    if (won) {
        streak += 1;
        const wins = Math.round((winPercentage / 100) * (played - 1)) + 1;
        winPercentage = Math.ceil((wins / played) * 100);
    } else {
        streak = 0;
        const wins = Math.round((winPercentage / 100) * (played - 1)); 
        winPercentage = Math.ceil((wins / played) * 100);
    }

    await statistics(played, winPercentage, streak);
};

  return (
    <div className='w-full h-screen'>
    <Welcome color={'grey'} hover={'black'} />
    <div className='w-full mx-auto mt-7'>
      <h1 className='w-full roboto-medium text-center text-black mt-22 mb-4 text-[.9em] sm:text-[1em] md:text-[1.1em]'>FOOTBLE</h1>
      <FootbleContext.Provider value={{ board, setBoard, current, setCurrent, correctW, wordSet, setWordSet, disable, setDisable, gameOver, setGameOver, updateStats }}>
        <Board />
        <Keyboard />
        {gameOver.gameOver ? <GameOver /> : ''}
      </FootbleContext.Provider>
    </div>
  </div>
  )
}

export default Footble