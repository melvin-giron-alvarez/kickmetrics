import React, { useState } from 'react';
import { BgColor, Welcome, Bracket } from '../components';
import { clickLeague } from '../constants';

const Standings = () => {
    BgColor('#EFEEED');

    const [league, setLeague] = useState('');
    const [rank, setRank] = useState({});
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState('');

    const getStandings = async (leagueId) => {
        const url = `https://api-football-v1.p.rapidapi.com/v3/standings?league=${leagueId}&season=2023`;
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
                throw new Error(`League standings not found.`);
            }
            const data = await response.json();
            const rank = data.response[0].league.standings[0];
            setRank(rank);
            setHasSearched(true);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleButtonClick = (leagueId) => {
        setLeague(leagueId);
        setHasSearched(false);
        getStandings(leagueId);
    };

    return (
        <div className='w-full h-screen'>
            <Welcome color={'grey'} hover={'black'} />
            <div className='w-full flex flex-wrap mt-7 justify-around md:items-center'>
                <h1 className='w-full roboto-medium text-center text-black mt-22 mb-4 text-[.9em] sm:text-[1em] md:text-[1.1em]'>STANDINGS</h1>
                {clickLeague.map((item, index) => (
                    <button key={index} onClick={() => handleButtonClick(item.id)} className='roboto-medium w-full text-black mb-3 sm:mb-2 sm:sb-0 sm:w-auto text-[.9em] cursor-pointer'>{item.name}</button>
                ))}
            </div>
            {!hasSearched ? (
                <p className='roboto-regular mx-auto mt-20 tracking-tighter w-[80%] text-[.8em] sm:text-[1em] text-center text-grey'>{`Click on a league to view current standings.`}</p>
            ) : (
                error !== "" ? (
                    <p className='roboto-regular mx-auto mt-20 tracking-tighter w-[80%] text-[.8em] sm:text-[1em] text-center text-grey'>{`Uh Oh! Standings are not available yet.`}</p>
                ) : (
                    <>
                    <Bracket rank={rank} />
                    <div className='w-[70%] flex flex-wrap pb-10 mx-auto roboto-regular text-center tracking-tight justify-between text-[.7em] text-black'>
                        <p className='w-[50%] md:w-[21%] lg:w-auto pb-2'>MP: Matches Played</p>
                        <p className='w-[50%] md:w-[19%] lg:w-auto pb-2'>W: Wins</p>
                        <p className='w-[50%] md:w-[19%] lg:w-auto pb-2'>D: Draws</p>
                        <p className='w-[50%] md:w-[19%] lg:w-auto pb-2'>L: Loss</p>
                        <p className='w-[50%] md:w-[19%] lg:w-auto pb-2'>GF: Goals For</p>
                        <p className='w-[50%] md:w-[32%] lg:w-auto pb-2'>GA: Goals Against</p>
                        <p className='w-[50%] md:w-[32%] lg:w-auto pb-2'>GD: Goal Difference</p>
                        <p className='w-[50%] md:w-[32%] lg:w-auto pb-2'>Pts: Points</p>
                    </div>
                </>
                )
            )}
        </div>
    );
};

export default Standings;
