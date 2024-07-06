import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Info = () => {

  useEffect(() => {
    AOS.init({duration: 800})
}, [])


  return (
    <div className='w-[75%] z-[5] md:w-[50%] text-dimwhite absolute top-[70%] right-[10%] sm:top-[80%] lg:top-[18%] sm:right-[6%]'>
        <h1 className='text-[2.5em] sm:text-[3.5em] roboto-medium tracking-tight pb-[1em] text-center'>WHAT WE PROVIDE</h1>
        <div data-aos="fade-up-left" className='flex flex-wrap justify-between w-full roboto-regular items-center py-[1.5em]'>
            <p className='sm:w-[25%] roboto-medium text-[2em] lg:text-[3.5em] pb-[.5em] sm:pb-0'>01 ]</p>
            <p className='w-full sm:w-[75%] text-[1.1em] lg:text-[1.3em] tracking-tighter'>Player Insight: Get informed on player background and statistics, including nationality, team, position, and more.</p>
        </div>
        <div data-aos="fade-up-left" className='flex flex-wrap justify-between w-full roboto-regular items-center py-[1.5em]'>
            <p className='sm:w-[25%] roboto-medium text-[2em] lg:text-[3.5em] pb-[.5em] sm:pb-0'>02 ]</p>
            <p className='w-full sm:w-[75%] text-[1.1em] lg:text-[1.3em] tracking-tighter'>Team Performances: Get insight on club background like league standings, match results, players, and more.</p>
        </div>
        <div data-aos="fade-up-left" className='flex flex-wrap justify-between w-full roboto-regular items-center py-[1.5em]'>
            <p className='sm:w-[25%] roboto-medium text-[2em] lg:text-[3.5em] pb-[.5em] sm:pb-0'>03 ]</p>
            <p className='w-full sm:w-[75%] text-[1.1em] lg:text-[1.3em] tracking-tighter'>Personal Experience: Save your favorite players and clubs to keep track of their stats throughout the season.</p>
        </div>
    </div>
  )
}

export default Info