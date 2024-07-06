import React from 'react'
import { FaInstagram, FaFacebook, FaYoutube, FaLink } from "react-icons/fa";
import { TiStar } from "react-icons/ti";
import { BsTwitterX } from "react-icons/bs";

const TeamStats = ({ stats, info, img, stadium, playerIMG, handleFavorites }) => {
  return (
    <div className='mx-6 md:mx-10 lg:mx-6 text-dimwhite flex flex-wrap justify-between mt-5 items-start'>
        <div className='w-[100%] lg:w-[60%] mx-auto'>
            <div className='flex justify-center mb-5 md:mb-0 w-auto items-center'>
                <img src={info.logo ? info.logo : ''} className='w-[30%] sm:w-[15%] mr-3'/>
                <div className='w-[50%] flex flex-wrap'>
                    <h1 className='w-full roboto-medium text-[2.3em] sm:text-[2.7em]'>{info.name? info.name : ''}</h1>
                    <p className='w-full roboto-regular text-[2.8]'>{info.country? info.country : ''}, {info.founded? info.founded : ''}</p>
                </div>
                <TiStar onClick={() => handleFavorites(info.name, info.logo)} className={`text-[2.5em] sm:text-[3em] text-dimwhite cursor-pointer`} />
            </div>

            <div className='w-full block my-[2.5em] sm:my-[1.5em] items-center'>
                <div className='w-full flex flex-wrap justify-center'>
                    <div className='flex items-baseline leading-none py-2 mr-9'>
                        <p className='text-[.8em] pr-2'>CITY: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tight'>{stadium.city ? stadium.city : '0'}</p>
                    </div>
                    <div className='flex items-baseline leading-none py-2 mr-5'>
                        <p className='text-[.8em] pr-2'>VENUE: </p>
                        <p className='text-[1.1em] sm:text-[1.25em] tracking-tight'>{stadium.name ? stadium.name : '0'}</p>
                    </div>
                    <div className='flex leading-none mt-3'>
                    <a href={img.strInstagram ? (img.strInstagram.startsWith('http://') || img.strInstagram.startsWith('https://') ? img.strInstagram : `https://${img.strInstagram}`) : ''} target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='text-[1.4em] text-dimwhite cursor-pointer mr-3' /></a>
                            <a href={img.strTwitter ? (img.strTwitter.startsWith('http://') || img.strTwitter.startsWith('https://') ? img.strTwitter : `https://${img.strTwitter}`) : ''} target="_blank" rel="noopener noreferrer">
                            <BsTwitterX className='text-[1.4em] text-dimwhite cursor-pointer mr-3' /></a>
                            <a href={img.strFacebook? (img.strFacebook.startsWith('http://') || img.strFacebook.startsWith('https://') ? img.strFacebook : `https://${img.strFacebook}`) : ''} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='text-[1.4em] text-dimwhite cursor-pointer mr-3' /></a>
                            <a href={img.strYoutube? (img.strYoutube.startsWith('http://') || img.strYoutube.startsWith('https://') ? img.strYoutube : `https://${img.strYoutube}`) : ''} target="_blank" rel="noopener noreferrer">
                            <FaYoutube className='text-[1.4em] text-dimwhite cursor-pointer mr-3' /></a>
                            <a href={img.strWebsite? (img.strWebsite.startsWith('http://') || img.strWebsite.startsWith('https://') ? img.strWebsite : `https://${img.strWebsite}`) : ''} target="_blank" rel="noopener noreferrer">
                            <FaLink className='text-[1.4em] text-dimwhite cursor-pointer' /></a>
                    </div>
                </div>

                <div className='flex flex-wrap my-[2.5em] justify-center sm:justify-evenly'>
                    <div className='w-full sm:w-[30%] md:w-[19%] block mb-9 sm:mb-0'>
                        <p className='text-center roboto-medium text-[1em] sm:text-[1.4em] mb-2'>PLAYED</p>
                        <div className='justify-center flex items-baseline leading-none py-2'>
                            <p className='text-[.8em] pr-2'>TOTAL: </p>
                            <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.fixtures?.played?.total ? stats.fixtures?.played?.total : '0'}</p>
                        </div>
                        <div className='justify-center flex items-baseline leading-none py-2'>
                            <p className='text-[.8em] pr-2'>WINS: </p>
                            <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.fixtures?.wins?.total ? stats.fixtures?.wins?.total : '0'}</p>
                        </div>
                        <div className='justify-center flex items-baseline leading-none py-2'>
                            <p className='text-[.8em] pr-2'>DRAWS: </p>
                            <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.fixtures?.draws?.total ? stats.fixtures?.draws?.total : '0'}</p>
                        </div>
                        <div className='justify-center flex items-baseline leading-none py-2'>
                            <p className='text-[.8em] pr-2'>LOSSES: </p>
                            <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.fixtures?.loses?.total ? stats.fixtures?.loses?.total : '0'}</p>
                        </div>
                    </div>

                    <div className='w-full sm:w-[30%] md:w-[19%] block mb-9 sm:mb-0'>
                        <p className='roboto-medium text-center text-[1em] sm:text-[1.4em] mb-2'>GOALS</p>
                        <div className='justify-center flex items-baseline leading-none py-2'>
                            <p className='text-[.8em] pr-2'>FOR: </p>
                            <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.goals?.for?.total?.total ? stats.goals?.for?.total?.total : '0'}</p>
                        </div>
                        <div className='justify-center flex items-baseline leading-none py-2'>
                            <p className='text-[.8em] pr-2'>AGAINST: </p>
                            <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.goals?.against?.total?.total ? stats.goals?.against?.total?.total : '0'}</p>
                        </div>
                    </div>

                    <div className='w-[30%] md:w-[19%] block mb-9 sm:mb-0'>
                        <p className='text-center roboto-medium text-[1em] sm:text-[1.4em] mb-2'>PENALTIES</p>
                        <div className='justify-center flex items-baseline leading-none py-2'>
                            <p className='text-[.8em] pr-2'>TOTAL: </p>
                            <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.penalty?.total ? stats.penalty?.total : '0'}</p>
                        </div>
                        <div className='justify-center flex items-baseline leading-none py-2'>
                            <p className='text-[.8em] pr-2'>SCORED: </p>
                            <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.penalty?.scored?.total ? stats.penalty?.scored?.total : '0'}</p>
                        </div>
                        <div className='justify-center flex items-baseline leading-none py-2'>
                            <p className='text-[.8em] pr-2'>MISSED: </p>
                            <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.penalty?.missed?.total ? stats.penalty?.missed?.total : '0'}</p>
                        </div>
                    </div>

                    <div className='w-full sm:w-[40%] md:w-[19%] block mb-9 sm:mb-0 mt-3 md:mt-0'>
                        <p className='text-center roboto-medium text-[1em] sm:text-[1.4em] mb-2'>CLEAN SHEETS</p>
                        <div className='justify-center flex items-baseline leading-none py-2'>
                            <p className='text-[.8em] pr-2'>TOTAL: </p>
                            <p className='text-[1.1em] sm:text-[1.25em] tracking-tighert'>{stats.clean_sheet?.total ? stats.clean_sheet?.total : '0'}</p>
                        </div>
                    </div>
                    
                    <div className='w-full sm:w-[40%] md:w-[19%] block mt-3 md:mt-0'>
                        <p className='text-center roboto-medium text-[1em] sm:text-[1.4em] mb-2'>FAILED TO SCORE</p>
                        <div className='justify-center flex items-baseline leading-none py-2'>
                            <p className='text-[.8em] pr-2'>TOTAL: </p>
                            <p className='text-[1.1em] sm:text-[1.25em] tracking-tighter'>{stats.failed_to_score?.total ? stats.failed_to_score?.total : '0'}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-full lg:w-[37%] mx-auto lg:translate-y-[-15%]'>
            <p className='roboto-regular w-full pb-5 text-[1.5em] text-center'>PLAYERS</p>
            <div className='w-full flex flex-wrap justify-center overflow-y-scroll h-[400px]'>
                {playerIMG.map((image, index) => (
                    <div key={image.id} className='w-[80%] sm:w-[33%] md:w-[25%] lg:w-[47%] pb-5'>
                        <img src={image.photo} className='w-[70%] mx-auto' />
                        <p className='text-[.8em] pt-2 text-center'>{image.name ? image.name : ''}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className='w-full my-[1.5em] sm:overflow-y-scroll sm:h-[150px]'>
            <p className='roboto-regular tracking-tighter  text-[.9em] sm:leading-snug'>{img.strDescriptionEN ?? ''}</p>
        </div>
    </div>
  )
}

export default TeamStats