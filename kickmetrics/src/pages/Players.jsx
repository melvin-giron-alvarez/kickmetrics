import React, { useState } from 'react';
import { BgColor, Welcome, SearchForm, PlayerStats } from '../components';
import { collection, addDoc, query, where, getDocs, db, auth } from '../firebase'

const Players = () => {
    BgColor('#6f6f6fe5');

    const [stats, setStats] = useState([]);
    const [info, setInfo] = useState([]);
    const [img, setImg] = useState({});
    const [lastName, setLastName] = useState('')
    const [search, setSearch] = useState('');
    const [league, setLeague] = useState(''); 
    const [season, setSeason] = useState(''); 
    const [error, setError] = useState('');
    const [hasSearched, setHasSearched] = useState(false);


    const getPlayerId = async (lastName) => {
        const url = `https://api-football-v1.p.rapidapi.com/v3/players?league=${league}&season=${season}&search=${lastName}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c225a0c44emsh1a65f203443a441p1fb862jsn89e1ae26a43d',
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            },
            next: {
                revalidate: 60 * 60 * 24
            }
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Player '${search}' not found.`);
            }
            const data = await response.json();
            setStats(data.response[0].statistics[0])
            setInfo(data.response[0].player)
            setLastName(lastName)
            setError('');
        } catch (error) {
            setError(error.message);
        }
    };

    const getPlayerIMG = async () => {
        try {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=${search}`);
            if (!response.ok) {
                throw new Error(`player '${search}' not found.`);
            }
            const data = await response.json();

            if (!data.player || data.player.length === 0) {
                throw new Error(`player '${search}' not found.`);
            }
            const player = data.player[0];
            setImg(player);
            setError('')
        } catch (error) {
            setError(error.message);
        }
    };

    const addFavoritePlayer = async (playerName, playerIMG) => {
        try {
            const user = auth.currentUser;
            if (!user) {
                console.error('no user logged in.');
                return;
            }
            const favoritesRef = collection(db, 'favorites');
            const q = query(favoritesRef, 
                            where('id', '==', playerName),
                            where('userId', '==', user.uid));
            const querySnapshot = await getDocs(q);
            
            if (querySnapshot.empty) {
                const newFavorite = { 
                    id: playerName, 
                    img: playerIMG, 
                    name: playerName,
                    userId: user.uid
                };
                await addDoc(favoritesRef, newFavorite);
                console.log('player added to favs');
            } else {
                console.log('player already added to favs');
            }
        } catch (error) {
            console.error('error adding player to favorites:', error);
        }
    };

    const capitalized = (string) => {
        if (!string) return string;
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };
    
    const handleOnSubmit = (e) => {
        e.preventDefault();
        const parts = search.trim().split(' ');
        const last = parts[parts.length - 1];
        const lastName = capitalized(last);
        getPlayerId(lastName);
        getPlayerIMG();
        setSearch('')
        setHasSearched(true);
    };

    return ( 
        <div className='w-full h-screen bg-[transparent]'>
            <Welcome color={'dimwhite'} hover={'black'} />
            <SearchForm 
                title={'PLAYER'} 
                enterPlayerTeam={"Ex:   Cristiano  Ronaldo"} 
                search={search}
                handleOnSubmit={handleOnSubmit}
                changeSearch={(e) => setSearch(e.target.value)} 
                setLeague={setLeague}
                setSeason={setSeason}
                hover={'black'}
            />
            {!hasSearched ? (
                <p className='roboto-regular mx-auto mt-4 tracking-normal w-[80%] text-[.8em] sm:text-[1em] text-center text-dimwhite'></p>
            ) : (
                error !== "" ? (
                    <>
                        <p className='roboto-regular mx-auto mt-9 tracking-normal w-[80%] text-[.8em] sm:text-[1em] text-center text-dimwhite'>{`Uh Oh! Either player not found or no stats are available yet.`}</p>
                        <p className='roboto-regular mx-auto mt-4 tracking-normal w-[80%] text-[.8em] sm:text-[1em] text-center text-dimwhite'>{`Please check spelling, selector fields, or search another player.`}</p>
                        <p className='roboto-regular mx-auto mt-4 tracking-normal w-[80%] text-[.8em] sm:text-[1em] text-center text-dimwhite'>{`Make sure league and season are also accurate to the player.`}</p>
                    </>
                ) : (
                    <PlayerStats handleFavorites={addFavoritePlayer} stats={stats} img={img} info={info} lastname={lastName} />
                )
            )}
        </div>
    );
}

export default Players;



