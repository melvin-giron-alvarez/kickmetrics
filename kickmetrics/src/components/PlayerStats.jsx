import React from 'react'
import { TiStar } from "react-icons/ti";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const PlayerStats = ({ stats, info, img, lastname, handleFavorites }) => {

  return (
    <div className='mx-6 md:mx-10 lg:mx-6 text-dimwhite flex flex-wrap-reverse lg:flex-wrap justify-between mt-5 items-start'>
        <div className='w-[100%] lg:w-[65%] mx-auto'>
            <div className='block md:flex my-[2.5em] sm:my-[1.5em] items-center'>
                <div className='flex mb-5 md:mb-0 mx-auto w-auto sm:w-[50%] items-center'>
                    <h1 className='roboto-medium text-[3.5em] sm:text-[4.8em] mr-1'>{img.strNumber? img.strNumber : ''}</h1>
                    <div className='w-auto flex flex-wrap'>
                        <h1 className='w-full roboto-medium text-[2.3em] sm:text-[3.2em]'>{lastname}</h1>
                        <p className='w-full roboto-regular text-[2.8]'>{stats.games?.position ? stats.games?.position : ''}</p>
                    </div>
                </div>
                <div className='text-center mx-auto flex w-full justify-evenly md:w-[50%] tracking-tight'>
                    <div className='w-[30%]'>
                        <p className='roboto-medium text-[2em] sm:text-[2.5em] mb-2'>{stats.goals?.total ? stats.goals?.total : '0'}</p>
                        <p className='roboto-medium text-[1em] sm:text-[1.4em]'>GOALS</p>
                    </div>
                    <div className='w-[32%]'>
                        <p className='roboto-medium text-[2em] sm:text-[2.5em] mb-2'>{stats.goals?.assists ? stats.goals?.assists : '0'}</p>
                        <p className='roboto-medium text-[1em] sm:text-[1.4em]'>ASSISTS</p>
                    </div>
                    <div className='w-[32%]'>
                        <p className='roboto-medium text-[2em] sm:text-[2.5em] mb-2'>{stats.shots?.total ? stats.shots?.total : '0'}</p>
                        <p className='roboto-medium text-[1em] sm:text-[1.4em]'>SHOTS</p>
                    </div>
                </div>
            </div>


            <div className='flex flex-wrap my-[2.5em] justify-evenly'>
                <div className='w-full md:w-[30%]'>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>TEAM: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.team?.name ? stats.team?.name : ''}</p>
                    </div> 
                    <div className='flex items-baseline  leading-none py-2'>
                        <p className='text-[.8em] pr-2'>MATCHES PLAYED: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.games?.appearences ? stats.games?.appearences : '0'}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>MINUTES PLAYED: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.games?.minutes ? stats.games?.minutes : '0'}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>OVERAL RATING: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.games?.rating ? stats.games?.rating : '0'}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>SUBSTITUES: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.substitutes?.in ? stats.substitutes?.in : '0'} in, {stats.substitutes?.out ? stats.substitutes?.out : '0'} out, {stats.substitutes?.bench ? stats.substitutes?.bench : '0'} bench</p>
                    </div>
                </div>

                <div className='w-full md:w-[30%]'>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>LEAGUE: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.league?.name ? stats.league?.name : ''}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>YELLOW CARDS: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.cards?.yellow ? stats.cards?.yellow : '0'}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>RED CARDS: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.cards?.red ? stats.cards?.red : '0'}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>PENATIES: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.penalty?.scored ? stats.penalty?.scored : '0'} scored, {stats.penalty?.missed ? stats.penalty?.missed : '0'} missed</p>
                    </div>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>FOULS: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.fouls?.drawn ? stats.fouls?.drawn : '0'} drawn, {stats.fouls?.committed ? stats.fouls?.committed : '0'} committed</p>
                    </div>
                </div>

                <div className='w-full md:w-[30%]'>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>LOCATION: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.league?.country ? stats.league?.country : ''}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>PASSES: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.passes?.total ? stats.passes?.total : '0'} [{stats.passes?.accuracy ? stats.passes?.accuracy : '0'}% accuracy]</p>
                    </div>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>TACKLES: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.tackles?.total ? stats.tackles?.total : '0'} [{stats.tackles?.blocks ? stats.tackles?.blocks : '0'} blocks]</p>
                    </div>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>DUELS: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.duels?.total ? stats.duels?.total : '0'} [{stats.duels?.won ? stats.duels?.won : '0'} won]</p>
                    </div>
                    <div className='flex items-baseline leading-none py-2'>
                        <p className='text-[.8em] pr-2'>DRIBBLES: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.dribbles?.attempts ? stats.dribbles?.attempts : '0'} total [{stats.dribbles?.success ? stats.dribbles?.success : '0'} successes]</p>
                    </div>
                </div>
            </div>


            <div className='w-full my-[1.5em] sm:overflow-y-scroll sm:h-[150px]'>
                <p className='roboto-regular tracking-tighter text-[.9em] sm:leading-snug'>{img.strDescriptionEN ?? ''}</p>
            </div>
        </div>

        <div className='w-[100%] lg:w-[30%] flex flex-wrap justify-evenly lg:block lg:translate-y-[-20%] mx-auto items-center'>
            <div className='w-[90%] sm:w-[40%] lg:w-full'>
                <img src={img.strCutout ?? 'No picture found'} className='w-full mx-auto lg:w-[95%] drop-shadow-[-5px_-5px_10px_rgba(0,0,0,0.25)]'/>
            </div>
            <div className='w-full sm:w-[60%] lg:w-full'>
            <div className='flex flex-wrap w-full my-2 justify-center items-center'>
                <h1 className='roboto-medium tracking-tight text-dimwhite text-[1.7em] sm:text-[2em]'>{img.strPlayer ? img.strPlayer : ''}</h1>
                <TiStar onClick={() => handleFavorites(img.strPlayer, img.strCutout)} className='text-[2.5em] sm:text-[3em] text-dimwhite cursor-pointer' />
            </div>
            <div className='w-[90%] lg:w-[68%] mx-auto'>
                    <div className='flex items-baseline leading-none py-1'>
                        <p className='text-[.8em] pr-2'>DATE OF BIRTH: </p>
                        <p className='text-[1em] tracking-tighter'>{info.birth?.date ? info.birth?.date : ''}</p>
                    </div> 
                    <div className='flex items-baseline  leading-none py-1'>
                        <p className='text-[.8em] pr-2'>BIRTH LOCATION: </p>
                        <p className='text-[1em] tracking-tighter'>{img.strBirthLocation ? img.strBirthLocation : ''}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-1'>
                        <p className='text-[.8em] pr-2'>COUNTRY: </p>
                        <p className='text-[1em] tracking-tighter'>{info.birth?.country ? info.birth?.country : ''}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-1'>
                        <p className='text-[.8em] pr-2'>AGE: </p>
                        <p className='textem] tracking-tighter'>{info.age ? info.age : ''}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-1'>
                        <p className='text-[.8em] pr-2'>ETHNICITY: </p>
                        <p className='text-[1em] tracking-tighter'>{img.strEthnicity ? img.strEthnicity : ''}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-1'>
                        <p className='text-[.8em] pr-2'>HEIGHT: </p>
                        <p className='text-[1em] tracking-tighter'>{img.strHeight ? img.strHeight : ''}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-1'>
                        <p className='text-[.8em] pr-2'>WEIGHT: </p>
                        <p className='text-[1em] tracking-tighter'>{info.weight ? info.weight : ''}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-1'>
                        <p className='text-[.8em] pr-2'>NATIONALITY: </p>
                        <p className='text-[1em] tracking-tighter'>{info.nationality ? info.nationality : ''}</p>
                    </div>

                    <div className='flex leading-none mt-3'>
                    <a href={img.strInstagram ? (img.strInstagram.startsWith('http://') || img.strInstagram.startsWith('https://') ? img.strInstagram : `https://${img.strInstagram}`) : ''} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='text-[1.4em] text-dimwhite cursor-pointer mr-5' /></a>
                            <a href={img.strTwitter ? (img.strTwitter.startsWith('http://') || img.strTwitter.startsWith('https://') ? img.strTwitter : `https://${img.strTwitter}`) : ''} target="_blank" rel="noopener noreferrer">
                            <BsTwitterX className='text-[1.4em] text-dimwhite cursor-pointer mr-5' /></a>
                            <a href={img.strFacebook? (img.strFacebook.startsWith('http://') || img.strFacebook.startsWith('https://') ? img.strFacebook : `https://${img.strFacebook}`) : ''} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='text-[1.4em] text-dimwhite cursor-pointer' /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayerStats