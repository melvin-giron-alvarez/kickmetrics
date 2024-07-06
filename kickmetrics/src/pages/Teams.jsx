import React, { useState } from 'react'
import { BgColor, Welcome, SearchForm, TeamStats } from '../components'
import { collection, addDoc, query, where, getDocs, db, auth } from '../firebase'

const Teams = () => {
    BgColor('#0B1314e5');

    const [stats, setStats] = useState([]);
    const [info, setInfo] = useState([]);
    const [stadium, setStadium] = useState([]);
    const [playerIMG, setPLayerIMG] = useState([]);
    const [img, setImg] = useState({});
    const [search, setSearch] = useState('');
    const [league, setLeague] = useState(''); 
    const [season, setSeason] = useState(''); 
    const [error, setError] = useState('');
    const [hasSearched, setHasSearched] = useState(false);


    const getTeamStats = async (teamId) => {
        const url = `https://api-football-v1.p.rapidapi.com/v3/teams/statistics?league=${league}&season=${season}&team=${teamId}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            },
            next: {
                revalidate: 60 * 60 * 24
            }
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Team '${search}' not found.`);
            }
            const data = await response.json();
            console.log(data.response)
            setStats(data.response)

            setError('');
        } catch (error) {
            setError(error.message);
            console.error(error);
        }
    };


    const getTeamPlayers = async (teamId) => {
        const url = `https://api-football-v1.p.rapidapi.com/v3/players/squads?team=${teamId}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            },
            next: {
                revalidate: 60 * 60 * 24
            }
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Team '${search}' not found.`);
            }
            const data = await response.json();
            console.log(data.response[0].players)
            setPLayerIMG(data.response[0].players)

            setError('');
        } catch (error) {
            setError(error.message);
            console.error(error);
        }
    }


    const getTeamId = async () => {
        const url = `https://api-football-v1.p.rapidapi.com/v3/teams?name=${search}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
                'x-rapidapi-host': 'api-football-v1.p.rapidapi.com'
            },
            next: {
                revalidate: 60 * 60 * 24
            }
        };
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(`Team '${search}' not found.`);
            }
            const data = await response.json();
            console.log(data.response[0].team)
            const teamId = data.response[0].team.id
            getTeamStats(teamId)
            getTeamPlayers(teamId)
            setInfo(data.response[0].team)
            setStadium(data.response[0].venue)

            setError('');
        } catch (error) {
            setError(error.message);
            console.error(error);
        }
    };


    const getPlayerIMG = async () => {
        try {
            const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${search}`);
            if (!response.ok) {
                throw new Error(`Team '${search}' not found.`);
            }
            const data = await response.json();
            console.log(data);
    
            if (!data.teams || data.teams.length === 0) {
                throw new Error(`Team '${search}' not found.`);
            }
    
            const team = data.teams[0];
            setImg(team);

            setError('')
        } catch (error) {
            setError(error.message);
            console.error(error);
        }
    };

    const addFavoriteTeam = async (teamName, teamIMG) => {
        try {
            const user = auth.currentUser;
            if (!user) {
                console.error('No user logged in.');
                return;
            }
    
            const favoritesRef = collection(db, 'favorites');
            const q = query(favoritesRef, 
                            where('id', '==', teamName),
                            where('userId', '==', user.uid));
            const querySnapshot = await getDocs(q);
            
            if (querySnapshot.empty) {
                const newFavorite = { 
                    id: teamName, 
                    img: teamIMG, 
                    name: teamName,
                    userId: user.uid
                };
                await addDoc(favoritesRef, newFavorite);
                console.log('team added to favs');
            } else {
                console.log('team already added to favs');
            }
        } catch (error) {
            console.error('error adding team to favorites:', error);
        }
    };



    const handleOnSubmit = (e) => {
        e.preventDefault();
        getTeamId();
        getPlayerIMG();
        setSearch('')
        setHasSearched(true);
    };

    return (
        <div className='w-full'>
            <Welcome color={'dimwhite'} hover={'#6F6F6F'} />
            <SearchForm 
                title={'TEAM'} 
                enterPlayerTeam={"Club's name"} 
                search={search}
                handleOnSubmit={handleOnSubmit}
                changeSearch={(e) => setSearch(e.target.value)} 
                setLeague={setLeague}
                setSeason={setSeason}
                hover={'grey'}
            />
            {!hasSearched ? (
                <p className='roboto-regular mx-auto mt-4 tracking-normal w-[80%] text-[.8em] sm:text-[1em] text-center text-dimwhite'></p>
            ) : (
                error !== "" ? (
                    <>
                        <p className='roboto-regular mx-auto mt-9 tracking-normal w-[80%] text-[.8em] sm:text-[1em] text-center text-dimwhite'>{`Uh Oh! Either Team not found or no stats are available yet.`}</p>
                        <p className='roboto-regular mx-auto mt-4 tracking-normal w-[80%] text-[.8em] sm:text-[1em] text-center text-dimwhite'>{`Please check spelling, selector fields, or search another team.`}</p>
                        <p className='roboto-regular mx-auto mt-4 tracking-normal w-[80%] text-[.8em] sm:text-[1em] text-center text-dimwhite'>{`Make sure league and season are also accurate to the team.`}</p>
                    </>
                ) : (
                    <TeamStats handleFavorites={addFavoriteTeam} stats={stats} info={info} img={img} stadium={stadium} playerIMG={playerIMG} />
                )
            )}
</div>
  )
}

export default Teams