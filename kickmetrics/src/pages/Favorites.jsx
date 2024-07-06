import React, { useState, useEffect } from 'react';
import { BgColor, Welcome } from '../components';
import { IoMdClose } from "react-icons/io";
import { collection, getDocs, query, db, auth, deleteDoc, doc, where, onAuthStateChanged } from '../firebase'

const Favorites = () => {
    BgColor('#6f6f6fe5');

    const [favorite, setFavorite] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                getFavorite(user);
            } else {
                console.error('no user logged in.');
                setLoading(false);
            }
        });
        return () => unsubscribe();
    }, []);

    const getFavorite = async () => {
        try {
            const user = auth.currentUser;
            if (!user) {
                console.error('no user logged in.');
                return;
            }
            const favs = collection(db, "favorites");
            const q = query(favs, where('userId', '==', user.uid));
            const querySnapshot = await getDocs(q);
            const favoritesList = querySnapshot.docs.map(doc => ({ docId: doc.id, ...doc.data() }));
            setFavorite(favoritesList);
            setLoading(false);
        } catch (error) {
            console.error('error fetching favorite players:', error);
            setLoading(false);
        }
    };

    if (loading) {
        return <div className='mt-4 bg-[transparent] flex flex-wrap w-[90%] mx-auto'>
             <p className='roboto-regular mx-auto mt-20 tracking-tighter w-[80%] text-[.8em] sm:text-[2em] text-center text-dimwhite'>loading...</p>;
        </div>
    }

    const removeFavoritePlayer = async (docId) => {
        try {
            
            const remove = doc(db, "favorites", docId);
            await deleteDoc(remove);
            setFavorite(prevFavorites => prevFavorites.filter(player => player.docId !== docId));
        } catch (error) {
            console.error('Error removing favorite player:', error);
        }
    };

    return (
        <div className='w-full bg-[transparent] h-screen'>
            <Welcome color={'dimwhite'} hover={'black'} />
            <h1 className='mt-5 text-center text-dimwhite text-[2em] roboto-medium tracking-tight'>FAVORITES</h1>
            <div className='mt-4 flex flex-wrap w-[90%] mx-auto'>
                {favorite.length > 0 ? (
                    favorite.map((player) => (
                        <div key={player.docId} className='mx-auto my-6 w-[80%] sm:w-[48%] md:w-[30%] lg:w-[23%] block'>
                            <div className='w-full'>
                                <img src={player.img} className='w-full drop-shadow-[-5px_-5px_9px_rgba(0,0,0,0.25)]' alt={`${player.name}`} />
                            </div>
                            <div className='w-auto flex mt-2 flex-wrap justify-center items-center'>
                                <p className='w-auto roboto-regular mx-auto tracking-tighter text-[1em] text-dimwhite'>{player.name}</p>
                                <IoMdClose className='w-auto text-dimwhite text-[1.5em] mx-auto cursor-pointer' onClick={() => removeFavoritePlayer(player.docId)} />
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='bg-[transparent] roboto-regular mx-auto mt-20 tracking-tighter w-[80%] text-[.8em] sm:text-[1em] text-center text-dimwhite'>No favorite players added yet.</p>
                )}
            </div>
        </div>
    );
};

export default Favorites;
