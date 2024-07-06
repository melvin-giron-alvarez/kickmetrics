import { useState, useEffect } from 'react'
import { auth, onAuthStateChanged, getDoc, doc, db, signOut } from '../firebase';

const Welcome = (props) => {

    const [smallScreen, setSmallScreen] = useState(window.innerWidth < 668);
    const [firstNombre, setFirstNombre] = useState('');

    useEffect(() => {
        const handleResize = () => {
            setSmallScreen(window.innerWidth < 668);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const displayUsername = async () => {
        const currentUser = auth.currentUser;

        if (!currentUser) {
            console.error("no user is currently logged in.");
            return;
        }
        const userId = currentUser.uid;
        const userDocRef = doc(db, 'users', userId);

        try {
            const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            const userFirst = userData.firstName; 
            setFirstNombre(userFirst);
            } else {
            console.error("user document does not exist.");
            }
        } catch (error) {
            console.error("error fetching user data:", error.message);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
            displayUsername();
            } else {
            console.error("no user is currently logged in.");
            setFirstNombre('');  // Clear the name if user logs out
            }
        });
        return () => unsubscribe();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            window.location.href = '/';
        } catch (error) {
            console.error('error signing out:', error.message);
        }
    };

  return (
    <div className='w-full flex flex-wrap justify-between items-center pb-0 pt-2 sm:px-2'>
        <h1 className={`roboto-medium z-[1000] tracking-tight mix-blend-difference text-[#6F6F6F] px-6 py-6 w-[30%] md:w-auto text-[2.3em] sm:text-[3em]`}>
            {smallScreen ? 'KICK\nMETRICS' : 'KICKMETRICS'}
        </h1>
        <button onClick={handleLogout} className={`w-auto mr-6 text-${props.color} hover:text-${props.hover} text-center roboto-medium text-[.7em] px-5 py-2 border-[1px] flex sm:hidden `} type='submit' >LOG OUT</button>
        <div className='w-full sm:w-auto px-6 py-2 sm:py-6'>
            <p className={`roboto-medium text-center tracking-tight text-${props.color} w-auto text-[1em] sm:text-[1.42em] lg:text-[1.8em] pb-2 sm:pb-3`}>{`Welcome, ${firstNombre}`}</p>
            <button onClick={handleLogout} className={`w-auto mx-auto text-${props.color} hover:text-${props.hover} roboto-medium text-[.8em] px-10 py-2 border-[1px] hidden sm:flex`} type='submit' >LOG OUT</button>
        </div>
    </div>
  )
}

export default Welcome